import React, { useEffect, useState } from 'react'
import CageConfigLayout from '../../layouts/CageConfigLayout'
import { formatCurrency } from '../../utils/utils'
import axios from "axios";
import Cookies from 'js-cookie';
const BirdTypeConfigPage = () => {
  const API_BASE_URL = "http://localhost:8080";
  const [birdTypes, setBirdTypes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/birdtypes`);
        setBirdTypes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  function handleChooseBirdType(param) {
    Cookies.remove('selected-shape');
    Cookies.remove('selected-material');
    Cookies.remove('selected-height');
    Cookies.remove('selected-spoke');
    Cookies.set('selected-bird-type', JSON.stringify(param), { expires: 7 });
  }

  return (
    <CageConfigLayout>
      <div className="p-2">
        <h1 className="h3">Chọn loại lồng chim</h1>
      </div>
      <div className='container-fluid mb-3'>
        <div className="row p-2">
          {
            birdTypes.map((birdType) =>
            (
              <div className='col-4' key={birdType.birdTypeId}>
                <div className='rounded shadow'>
                  <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                    <img src={birdType.birdImageUrl} alt="" className='h-100 w-100 object-fit-cover' />
                  </div>
                  <div className='text-center'>
                    <h3 className='h5'>
                      Lồng {birdType.birdName}
                    </h3>
                    <div>
                      Giá cơ sở: {formatCurrency(birdType.basePrice)}
                    </div>
                    <a href="/configurator/shape">
                      <button className="btn btn-primary mb-3" onClick={() => handleChooseBirdType(birdType)}>Chọn</button>
                    </a>
                  </div>
                </div>
              </div>
            )
            )
          }



        </div>
      </div>

    </CageConfigLayout>
  )
}

export default BirdTypeConfigPage