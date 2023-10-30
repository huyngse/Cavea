import React, { useEffect, useState } from 'react'
import CageConfigLayout from '../../layouts/CageConfigLayout'
import { formatCurrency } from '../../utils/utils'
import Cookies from 'js-cookie';
import axios from "axios";
function SizeConfigPage() {
  const birdTypeValue = Cookies.get('selected-bird-type');
  let birdType = null;
  if (birdTypeValue != null) {
    birdType = JSON.parse(birdTypeValue);
  }
  const [selectedSpoke, setSelectedSpoke] = useState("");
  const [selectedHeight, setSelectedHeight] = useState("");

  const API_BASE_URL = "http://localhost:8080";
  const [spokesList, setSpokesList] = useState([]);
  const [heights, setHeights] = useState([]);

  useEffect(() => {
    if (birdType != null) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/cage-spokes?birdTypeId=${birdType.birdTypeId}`);
          setSpokesList(response.data);
        } catch (error) {
          console.log(error);
        }
        try {
          const response = await axios.get(`${API_BASE_URL}/api/cage-sizes?birdTypeId=${birdType.birdTypeId}`);
          setHeights(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, []);
  function handleChooseSpoke(event) {
    const selectedOption = JSON.parse(event.target.value);
    setSelectedSpoke(event.target.value);
    if (selectedOption != null) {
      Cookies.set('selected-spoke', JSON.stringify(selectedOption), { expires: 7 });
    }
  }
  function handleChooseHeight(event) {
    const selectedOption = JSON.parse(event.target.value);
    setSelectedHeight(event.target.value);
    if (selectedOption != null) {
      Cookies.set('selected-height', JSON.stringify(selectedOption), { expires: 7 });
    }
  }
  return (
    <CageConfigLayout>
      <div className="p-2">
        <h1 className="h3">Chọn kích thước lồng</h1>
      </div>
      <hr />
      <div className='container mb-3'>
        <h3 className="h5">Số nan</h3>
        <select className="form-select mb-3" aria-label="number of spokes" value={selectedSpoke}
        onChange={handleChooseSpoke}>
          <option>Chọn số nan</option>
          {
            (birdType != null) && (
              spokesList.map((spoke) => (
                <option value={JSON.stringify(spoke)} key={spoke.spokeId}>{spoke.spokes} ({formatCurrency(spoke.price)})</option>
              )
              )
            )
          }
        </select>
        <h3 className="h5">Chiều cao</h3>
        <select className="form-select mb-3" aria-label="Default select example" value={selectedHeight}
        onChange={handleChooseHeight}>
          <option >Chọn chiều cao</option>
          {
            (birdType != null) && (
              heights.map((height) => (
                <option value={JSON.stringify(height)} key={height.sizeId}>{height.size} ({formatCurrency(height.price)})</option>
              )
              )
            )
          }
        </select>
       
      </div>
      <div className='text-center mb-4'>
        <a href="/configurator/component">
          <button className="btn btn-primary px-5">Lưu và tiếp tục</button>
        </a>
      </div>

    </CageConfigLayout>
  )
}

export default SizeConfigPage