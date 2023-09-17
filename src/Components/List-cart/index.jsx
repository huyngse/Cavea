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

  const images = [myImage, myImage, myImage, myImage];

  const ratings = [4, 3, 5, 2];

  return (
    <FormListCart>
      {products.map((product, index) => (
        <MediaCard
          key={index}
          productName={product}
          productDescription={descriptions[index]}
          productImage={images[index]}
          rating={ratings[index]}
        />
      ))}
    </FormListCart>
  );
}

export default ListCart;
