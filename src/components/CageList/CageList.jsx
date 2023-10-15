import React, { useContext } from "react";
import { Link } from "react-router-dom";

import MediaCard from "../ProductCard/ProductCard.jsx";
import { products } from "./list_product.jsx";

import { CardContext, useCart } from "../../contexts/CardContext.jsx";

export default function CageList() {
  const { addToCart } = useContext(CardContext);
  const { handleCompare } = useCart();

  const handleComparison = (productId) => {
    handleCompare(productId);
  };

  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      addToCart(productToAdd);
    }
  };

  return (
    <div className="px-3 py-3">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-3" key={index}>
            <MediaCard
              id={product.id}
              productName={
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={`/product-detail/${product.id}`}
                >
                  {product.name}
                </Link>
              }
              productDescription={product.model}
              productImage={product.image}
              rating={product.rating}
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
