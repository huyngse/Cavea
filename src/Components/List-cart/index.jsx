import React from "react";
import { FormListCart } from "./style_component";
import MediaCard from "../Cart/index.jsx";

function ListCart() {


  const products = [
    {
      id: 1,
      name: "LỒNG CU GÁY QUẢ ĐÀO MẶT CẮT MAI TỨ QUÝ GỖ MUN NÓC TRE",
      descriptions: "CG 0350",
      image: "https://www.sieuthilongchim.net//img/webroot/upload/image/files/Mai%20tu%20quy%20go%20mun%20noc%20tre%20(3).jpg",
      rating: 4,
      price: "3,500,000 vnđ",
      discount: "4,600,000 vnđ",
    },
    {
      id: 2,
      name: "LỒNG CU GÁY ĐỤC CÁ CHÉP HÓA RỒNG",
      descriptions: "CG 01500",
      image: "https://www.sieuthilongchim.net//img/webroot/upload/image/images/L%E1%BB%93ng%20chim%20cu%20g%C3%A1y/long-chim-cu-gay%20(3).jpg",
      rating: 5,
      price: "17,000,000 vnđ",
      discount: "15,000,000 vnđ",
    },
    {
      id: 3,
      name: "LỒNG CU GÁY QUẢ DÀO CỬA DƠI CHÂN QUỲ SIZE 40",
      descriptions: "CG 0850",
      image: "https://www.sieuthilongchim.net//img/webroot/upload/image/images/L%E1%BB%93ng%20chim%20cu%20g%C3%A1y/long-qua-dao-doi-quy-size40%20(1).jpg",
      rating: 5,
      price: "900,000 vnđ",
      discount: "1,100,000 vnđ",
    },
    {
      id: 4,
      name: "LỒNG CHIM CU GÁY SIZE 35 CHÂN NƠI NÓC ĐAN",
      descriptions: "CG350",
      image: "https://www.sieuthilongchim.net//img/webroot/upload/image/files/cu%20gay%20390%20(4).jpg",
      rating: 3,
      price: "370,000 vnđ",
      discount: "450,000 vnđ",
    },
  ];

  return (
    <FormListCart className="test">
      {products.map((product) => (
        <MediaCard
          className="product-card"
          key={product.id}
          productName={product.name}
          productDescription={product.descriptions}
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
