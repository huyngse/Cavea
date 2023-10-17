import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import ListCart from "../components/CageList/CageList.jsx";
import BackToTopButton from "../components/BackToHome.jsx";
import { products } from "../components/CageList/list_product.jsx";
import { useCart } from "../contexts/CardContext.jsx";
import HeaderMenu from "../components/HeaderMenu.jsx";
import Carousel from "../components/Carousel.jsx";
import MainLayout from "../layouts/MainLayout.jsx";

const Index = () => {
  const { handleCompareClick, compareProducts } = useCart();
  const [compareDetails, setCompareProductDetails] = useState([]);

  useEffect(() => {
    if (compareProducts.length >= 0) {
      const compareDetails = products.filter((product) =>
        compareProducts.includes(product.id)
      );
      setCompareProductDetails(compareDetails);
    }
  }, [compareProducts]);

  return (
    <MainLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <HeaderMenu />
          </div>
          <div className="col-9">
            <Carousel />
          </div>
        </div>
      </div>

      {compareDetails < 1 ? (
        <></>
      ) : (
        <div className="compare-message">
          {"Bạn đã chọn: " + compareDetails.length}

          <div>
            {compareDetails.map((product, index) => (
              <a
                className="compare-demo-card"
                href={`/product-detail/${product.id}`}
                key={index}
              >
                <img src={product.image} alt="Hinh so sanh" />
              </a>
            ))}
          </div>
          <button onClick={handleCompareClick} className="compare-button">
            So sánh
          </button>
        </div>
      )}

      <div id="cu-gay">
        <div className="bg-primary text-white h4 p-3">Lồng chim cu gáy</div>
      </div>
      <ListCart />
      <BackToTopButton />
    </MainLayout>
  );
};

export default Index;
