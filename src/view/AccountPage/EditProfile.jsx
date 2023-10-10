import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from "../../AuthContext.jsx";

function EditProfile() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState('');

  const {
    loggedInUser,
    userRole,
    userEmail,
    userFirstName,
    userLastName,
    userPhone,
  } = useAuth();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json'
        );
        setCities(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCityChange = (e) => {
    const selectedCityId = e.target.value;
    setSelectedCity(selectedCityId);

    if (selectedCityId !== '') {
      const selectedCityData = cities.find((city) => city.Id === selectedCityId);
      setDistricts(selectedCityData?.Districts || []);
    } else {
      setDistricts([]);
    }
    setSelectedDistrict('');
    setWards([]);
  };

  const handleDistrictChange = (e) => {
    const selectedDistrictId = e.target.value;
    setSelectedDistrict(selectedDistrictId);

    if (selectedDistrictId !== '') {
      const selectedCityData = cities.find((city) => city.Id === selectedCity);
      const selectedDistrictData = selectedCityData?.Districts.find(
        (district) => district.Id === selectedDistrictId
      );
      setWards(selectedDistrictData?.Wards || []);
    } else {
      setWards([]);
    }
  };
  const handleWardChange = (e) => {
    setSelectedWard(e.target.value);
  };

  return (
    <div>
      <h1 className='h4 fw-normal'>Hồ sơ của tôi</h1>
      <p className='fs-6 fw-normal text-muted'>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      <hr className='mb-3' />
      <div className='row'>
        <div className="col-8">
          <table className="w-100">
            <tbody>
              <tr>
                <td className='text-end p-3'>
                  <label htmlFor="usernameInput" className="form-label text-muted">Tên đăng nhập</label>
                </td>
                <td>
                  <input type="text" className="form-control" id="usernameInput" aria-describedby="username" defaultValue="shymastic" />
                </td>
              </tr >
              <tr>
                <td className='text-end p-3'>
                  <label htmlFor="fullName" className="form-label text-muted">Họ và tên</label>
                </td>
                <td>
                  <div className='d-flex gap-3'>
                    <input type="text" className="form-control" id="fullName" aria-describedby="lastNameInput" defaultValue="Lê Nguyễn Đăng Khoa" />
                  </div>

                </td>
              </tr>
              <tr>
                <td className='text-end p-3'>
                  <label className="form-label text-muted">Email</label>
                </td>
                <td>
                  <p className='mb-2'>
                    khoalndse173249@fpt.edu.vn
                  </p>
                </td>
              </tr>
              <tr>
                <td className='text-end p-3'>
                  <label className="form-label text-muted">Số điện thoại</label>
                </td>
                <td>
                  <p className='mb-2'>
                    098-8392-933
                  </p>
                </td>
              </tr>
              <tr>
                <td className='text-end p-3 align-top'>
                  <label className="form-label text-muted">Địa chỉ</label>
                </td>
                <td>
                  <select id="city" onChange={handleCityChange} value={selectedCity} className='form-select mb-3'>
                    <option value="">Chọn tỉnh thành</option>
                    {cities.map((city) => (
                      <option key={city.Id} value={city.Id}>
                        {city.Name}
                      </option>
                    ))}
                  </select>
                  <select id="district" onChange={handleDistrictChange} value={selectedDistrict} className='form-select mb-3'>
                    <option value="">Chọn quận huyện</option>
                    {districts.map((district) => (
                      <option key={district.Id} value={district.Id}>
                        {district.Name}
                      </option>
                    ))}
                  </select>
                  <select id="ward" onChange={handleWardChange} value={selectedWard} className='form-select'>
                    <option value="">Chọn phường xã</option>
                    {wards.map((ward) => (
                      <option key={ward.Id} value={ward.Id}>
                        {ward.Name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td className='text-end p-3'>
                  <label htmlFor="homeInput" className="form-label text-muted">Số nhà, tên đường</label>
                </td>
                <td>
                  <input type="text" className="form-control" id="homeInput" aria-describedby="home address" defaultValue="" />
                </td>
              </tr >
            </tbody >
          </table >
        </div>
        <div className="col-4 d-flex align-items-center flex-column border-start ">
          <label htmlFor="avartar-file" className="object-fit-cover object-position-center rounded-circle overflow-hidden mt-4 mb-4" style={{ width: "128px", height: "128px", cursor: "pointer" }}>
            <img src="https://cdn5.vectorstock.com/i/1000x1000/64/39/sketch-cute-sparrow-vector-3176439.jpg" alt="" class="img-fluid" />
          </label>
          <div className='mb-3'>
            <input class="form-control" type="file" id="avartar-file" hidden></input>
            <button className='btn btn-outline-primary'> <label htmlFor="avartar-file" style={{ cursor: "pointer" }}>Chọn file</label></button>
          </div>
          <div className='text-sm text-muted'>
            <small>
              Dụng lượng file tối đa 1 MB<br />
              Định dạng:.JPEG, .PNG
            </small>
          </div>

        </div>

      </div>
    </div >
  )
}

export default EditProfile