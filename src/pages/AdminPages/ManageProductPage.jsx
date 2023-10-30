import React, { useEffect, useState } from "react";
import AdminLayout from '../../layouts/AdminLayout'
import { formatCurrency } from '../../utils/utils'
import axios from "axios";
import Modal from '@mui/material/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function ManageProductPage() {
  const [cages, setCages] = useState([]);
  const [selectedCage, setSelectedCage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [longDescription, setLongDescription] = useState('');
  const handleLongDescriptionChange = (value) => {
    setLongDescription(value);
  };
  const openModal = (cage) => {
    setSelectedCage(cage);
    setPrice(cage.cagePrice);
    setDiscountPercent(cage.discount);
    setDiscountPrice(cage.cagePrice - cage.cagePrice * cage.discount);
    setLongDescription(cage.longDescription);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const API_BASE_URL = "http://localhost:8080";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/cages`);
        setCages(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const handleCheckboxChange = async (cageId) => {
    const updatedCages = cages.map((cage) => {
      if (cage.cageId === cageId) {
        const updatedCage = { ...cage, enabled: !cage.enabled };
        updateCageStatus(updatedCage);
        return updatedCage;
      }
      return cage;
    });

    setCages(updatedCages);
  };

  const updateCageStatus = async (updatedCage) => {
    try {
      console.log(`http://localhost:8080/cages/${updatedCage.cageId}`);

      await axios.put(
        `http://localhost:8080/cages/${updatedCage.cageId}`,
        updatedCage
      );
      console.log("Cage status updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteImage = (imageId) => {
    // Send DELETE request to delete the image
    axios.delete(`http://localhost:8080/cages/images/${imageId}`)
      .then(response => {
        // Remove the deleted image from selectedCage
        setSelectedCage(prevState => ({
          ...prevState,
          cageImages: prevState.cageImages.filter(image => image.imageId !== imageId)
        }));
      })
      .catch(error => {
        console.error('Error deleting image:', error);
      });
  };
  const handleAddImage = (event) => {
    const newImageFile = event.target.files[0];


    const formData = new FormData();
    formData.append('isMain', false);
    formData.append('image', newImageFile);

    // Send POST request to upload the new image
    axios.post(`http://localhost:8080/cages/${selectedCage.cageId}/images`, formData)
      .then(response => {
        const newImage = {
          imageId: response.data.imageId,
          imageUrl: response.data.imageUrl,
          main: false
        };

        // Add the new image to selectedCage
        setSelectedCage(prevState => ({
          ...prevState,
          cageImages: [...prevState.cageImages, newImage]
        }));
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });

  };

  const handleSetMainImage = (imageId) => {
    // Send PUT request to set the selected image as the main image
    axios.put(`http://localhost:8080/cages/${selectedCage.cageId}/images/${imageId}/main`)
      .then(response => {
        // Update the main image flag in selectedCage
        setSelectedCage(prevState => ({
          ...prevState,
          cageImages: prevState.cageImages.map(image => {
            if (image.imageId === imageId) {
              return {
                ...image,
                main: true
              };
            } else {
              return {
                ...image,
                main: false
              };
            }
          })
        }));
      })
      .catch(error => {
        console.error('Error setting image as main:', error);
      });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle any other save actions if needed
  // };
  const [price, setPrice] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  const handlePriceChange = (event) => {
    const newPrice = event.target.value * 1;
    setPrice(newPrice);
    calculateDiscountPrice(newPrice, discountPercent);
  };

  const handleDiscountPercentChange = (event) => {
    const newDiscountPercent = event.target.value * 1;
    setDiscountPercent(newDiscountPercent);
    calculateDiscountPrice(price, newDiscountPercent);
  };

  const handleDiscountPriceChange = (event) => {
    const newDiscountPrice = event.target.value * 1;
    setDiscountPrice(newDiscountPrice);
    calculateDiscountPercent(price, newDiscountPrice);
  };

  const calculateDiscountPrice = (price, discountPercent) => {
    const calculatedDiscountPrice = price - (price * discountPercent);
    setDiscountPrice(calculatedDiscountPrice);
  };

  const calculateDiscountPercent = (price, discountPrice) => {
    const calculatedDiscountPercent = ((price - discountPrice) / price);
    setDiscountPercent(calculatedDiscountPercent);
  };

  return (
    <AdminLayout>
      <div className='bg-gray w-100 p-2'>
        <div className='bg-white mb-3'>
          <h1 className='h2 text-center p-3'>Danh sách sản phẩm</h1>
          <div className="px-3 py-3">
            <form className="input-group mb-3 px-5">
              <input
                type="text"
                className="form-control search-bar"
                placeholder="Tìm kiếm theo tên sản phẩm"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-light"
                type="button"
                id="button-addon2"
              >
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên Sản Phẩm</th>
              <th scope="col">Loại</th>
              <th scope="col">Giá</th>
              <th scope="col">Giảm còn</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Trạng thái</th>
              <th scope="col"></th>

            </tr>
          </thead>
          <tbody>
            {cages.map((cage) => (
              <tr key={cage.cageId}>
                <td>{cage.cageId}</td>
                <td>{cage.cageName}</td>
                <td>{cage.birdType.birdName}</td>
                <td>{formatCurrency(cage.cagePrice)}</td>
                <td>{formatCurrency(cage.cagePrice - cage.discount * cage.cagePrice)}</td>
                <td>{cage.quantity}</td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={cage.enabled}
                    onChange={() => handleCheckboxChange(cage.cageId)}
                  />
                </td>
                <td>
                  <button className="bg-transparent border-0" onClick={() => openModal(cage)}>
                    <i className="bi bi-pencil-square text-primary"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && (
          <Modal
            open={showModal}
            onClose={closeModal}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
            className='overflow-auto'
          >
            <div className="bg-white m-3 p-3">
              <div className="d-flex">
                <h2 className="me-auto">Chỉnh sửa lồng</h2>
                <button className="btn btn-outline-danger me-3" onClick={closeModal}>Xóa</button>
                <button className="btn btn-light me-3" onClick={closeModal}>Hủy</button>
                <button className="btn btn-primary" onClick={closeModal}>Lưu</button>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col-8">
                  <div className="mb-3">
                    <label htmlFor="cageName" className="form-label fw-bold">Tên lồng</label>
                    <input type="email" className="form-control" id="cageName" defaultValue={selectedCage.cageName} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="shortDescription" className="form-label fw-bold">Mô tả ngắn</label>
                    <textarea className="form-control" id="shortDescription" rows="3" defaultValue={selectedCage.shortDescription}></textarea>
                  </div>
                  <div className="mb-3">
                    <strong>Mô tả đầy đủ</strong>
                    <ReactQuill value={longDescription} onChange={handleLongDescriptionChange} />
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-6">

                      <div className="mb-3">
                        <label htmlFor="price" className="form-label fw-bold">Giá</label>
                        <input type="number" className="form-control" id="price" value={price} onChange={handlePriceChange}></input>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="discount" className="form-label fw-bold">Giảm (%)</label>
                        <input type="number" className="form-control" id="discount" value={discountPercent}
                          onChange={handleDiscountPercentChange}></input>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="discountPrice" className="form-label fw-bold">Giảm còn</label>
                        <input type="number" className="form-control" id="discountPrice" value={discountPrice}
                          onChange={handleDiscountPriceChange}></input>
                      </div>
                    </div>
                    <div className="col-6">
                      <strong>Giá:</strong> {formatCurrency(price)}
                      <br />
                      <strong>Giảm:</strong> {discountPercent.toFixed(2) * 100}%
                      <br />
                      <strong>Giảm còn:</strong> {formatCurrency(discountPrice)}
                      

                    </div>
                  </div>

                </div>
                <div className="col-4">
                  <div>
                    <h5>Thêm ảnh mới</h5>
                    <input type="file" accept="image/*" onChange={handleAddImage} />
                    <hr />
                    {selectedCage.cageImages.map((image) => (
                      <div key={image.imageId}>
                        <img src={image.imageUrl} alt="Cage" className="img-fluid" />
                        {image.main === true && (<p className="text-center h5 text-primary">&lt;&lt;&lt;Ảnh chính&gt;&gt;&gt;</p>)}
                        <div className="text-center mt-1 mb-3">
                          {image.main === false && (
                            <button type="button" className="btn btn-primary me-3" onClick={() => handleSetMainImage(image.imageId)}>
                              Chọn làm ảnh chính
                            </button>
                          )}

                          <button className="btn btn-danger" onClick={() => handleDeleteImage(image.imageId)}>Xóa ảnh</button>
                        </div>
                      </div>
                    ))}
                    {/* <button className="btn btn-primary" onClick={handleSubmit}>Lưu ảnh</button> */}
                  </div>


                </div>
              </div>

            </div>
          </Modal>
        )}
      </div>
    </AdminLayout>
  )
}

export default ManageProductPage