import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const navigate = useNavigate();
  const [compareProducts, setCompareProducts] = useState([]);

  const handleCompare = (productId) => {
    if (compareProducts.includes(productId)) {
      console.log(productId);
      setCompareProducts((prevCompare) =>
        prevCompare.filter((id) => id !== productId)
      );
    } else {
      setCompareProducts((prevCompare) => [...prevCompare, productId]);
    }
  };

  const handleCompareClick = () => {
    if (compareProducts.length >= 2 && compareProducts.length <= 3) {
      navigate("/compare", { state: { compareProducts } });
      console.log(compareProducts);
    } else if (compareProducts.length < 2) {
      alert("Vui lòng chọn ít nhất 2 sản phẩm để so sánh.");
    } else {
      alert("Vui lòng chọn nhiều nhất 3 sản phẩm để so sánh.");
    }
  };

  return (
    <CartContext.Provider
      value={{
        handleCompare,
        handleCompareClick,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
