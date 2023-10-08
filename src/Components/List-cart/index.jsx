import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { FormListCart } from "./style_component.jsx";
import MediaCard from "../Product-card/index.jsx";
import { products } from "./list_product.jsx";

import { CardContext, useCart } from "../../CardContext.jsx";

function ListCart() {
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
    <FormListCart>
      {products.map((product) => (
        <MediaCard
          className="product-card"
          key={product.model}
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
      ))}
    </FormListCart>
  );
}

export default ListCart;
