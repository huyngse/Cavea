import React from "react";
import { FormListCart } from "./style_component";
import MediaCard from "../Cart/index.jsx";
import myImage from "../../images/bird-decor.png";

function ListCart() {
  const products = Array.from(
    { length: 4 },
    (_, index) => `Product ${index + 1}`
  );
  const descriptions = Array.from(
    { length: 4 },
    (_, index) => `This is description about product ${index + 1}`
  );
  const images = [myImage, myImage, myImage, myImage, myImage, myImage];
  const ratings = [4, 3, 5, 2, 1, 2];
  const prices = [10, 20, 15, 25, 30, 12];
  const discount = [5, 10, 15, 20, 25, 30];

  return (
    <FormListCart>
      {products.map((product, index) => (
        <MediaCard
          key={index}
          productName={product}
          productDescription={descriptions[index]}
          productImage={images[index]}
          rating={ratings[index]}
          productPrice={prices[index]}
          productDiscount={discount[index]}
        />
      ))}
    </FormListCart>
  );
}

export default ListCart;
