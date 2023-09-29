import React from "react";
import { Link } from "react-router-dom";

import { FormListCart } from "./style_component.jsx";
import MediaCard from "../Cart/index.jsx";
import { products } from "./list_product.jsx";

function ListCart() {
  return (
    <FormListCart className="test">
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
        />
      ))}
    </FormListCart>
  );
}

export default ListCart;
