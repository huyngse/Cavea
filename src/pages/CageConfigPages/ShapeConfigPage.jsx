import React, { useEffect, useState } from 'react'
import CageConfigLayout from '../../layouts/CageConfigLayout'
import { formatCurrency } from '../../utils/utils'
import Cookies from 'js-cookie';
import axios from "axios";
function ShapeConfigPage() {
  const birdTypeValue = Cookies.get('selected-bird-type');
  let birdType = null;
  if (birdTypeValue != null) {
    birdType = JSON.parse(birdTypeValue);
  }

  const API_BASE_URL = "http://localhost:8080";
  const [shapes, setShapes] = useState([]);
  useEffect(() => {
    if (birdType != null) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/cage-shapes?birdTypeId=${birdType.birdTypeId}`);
          setShapes(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, []);
  function handleChooseShape(param) {
    Cookies.set('selected-shape', JSON.stringify(param), { expires: 7 });
  }
  return (
    <CageConfigLayout>
      <div className="p-2">
        <h1 className="h3">Chọn hình dáng lồng</h1>
      </div>
      <div className='container-fluid mb-3'>
        <div className="row p-2">
          {
            (birdType != null) &&
            shapes.map((shape) => (
              <div className='col-4' key={shape.shapeId}>
                <div className='rounded shadow'>
                  <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                    <img src={shape.imageUrl} alt="" className='h-100 w-100 object-fit-cover' />
                  </div>
                  <div className='text-center'>
                    <h3 className='h5'>
                      {shape.shape}
                    </h3>
                    <div>
                      Giá: {formatCurrency(shape.price)}
                    </div>
                    <a href="/configurator/material">
                      <button className="btn btn-primary mb-3" onClick={() => handleChooseShape(shape)}>Chọn</button>
                    </a>
                  </div>
                </div>
              </div>
            )
            )
          }
          {
            (birdType == null) && (
              <p className='text-danger h4'>Vui lòng chọn loại chim</p>
            )
          }

        </div>
      </div>

    </CageConfigLayout>
  )
}

export default ShapeConfigPage