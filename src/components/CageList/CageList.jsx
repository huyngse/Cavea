import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import MediaCard from "../ProductCard/ProductCard.jsx";

import { CardContext, useCart } from "../../contexts/CardContext.jsx";

export default function CageList() {
  const { addToCart } = useContext(CardContext);
  const { handleCompare } = useCart();
  const [products, setProducts] = useState([]);

  const handleComparison = (productId) => {
    handleCompare(productId);
  };

  const handleAddToCart = (productId) => {
    const productToAdd = products.find(
      (product) => product.cageId === productId
    );
    if (productToAdd) {
      addToCart(productToAdd);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8080/product/all").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="px-3 py-3">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-3" key={index}>
            <MediaCard
              id={product.cageId}
              productName={
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={`/product-detail/${product.cageId}`}
                >
                  {product.cageName}
                </Link>
              }
              productDescription={product.cageCode}
              productImage={
                products.find(
                  (image) => image.cageId === product.cageId && image.main
                )?.imageUrl
              }
              rating={product.rate}
              productPrice={product.price}
              productDiscount={product.discount}
              onCompare={handleComparison}
              onAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
