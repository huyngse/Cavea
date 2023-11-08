import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export const CardContext = createContext();

export function useCart() {
  return useContext(CardContext);
}

export function CardProvider({ children }) {
  const navigate = useNavigate();
  const userIdC = Cookies.get("loggedInUser");
  const [cart, setCart] = useState(() => {
    const storedCart = sessionStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [totalPrice, setTotalPrice] = useState(() => {
    const storedTotal = sessionStorage.getItem("totalPrice");
    return storedTotal ? JSON.parse(storedTotal) : 0;
  });
  const [compareProducts, setCompareProducts] = useState([]);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    sessionStorage.setItem("totalPrice", JSON.parse(totalPrice));
  }, [totalPrice]);

  useEffect(() => {
    const storedCompareProducts = sessionStorage.getItem("compareProducts");
    if (storedCompareProducts) {
      setCompareProducts(JSON.parse(storedCompareProducts));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("compareProducts", JSON.stringify(compareProducts));
  }, [compareProducts]);

  const handleCompare = (productId) => {
    if (compareProducts.includes(productId)) {
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
    } else if (compareProducts.length < 2) {
      alert("Vui lòng chọn ít nhất 2 sản phẩm để so sánh.");
    } else {
      alert("Vui lòng chọn nhiều nhất 3 sản phẩm để so sánh.");
    }
  };

  const addToCart = (product, userid) => {
    const getProduct = async () => {
      try {
        console.log(userIdC);
        const res = await axios.get(
          "http://localhost:8089/cart/add-to-cart?username=" +
            userIdC +
            "&productId=" +
            product
        );
        console.log(product);
      } catch (error) {
        console.log("error");
      }
    };
    getProduct();
    console.log(product + "in" + userid);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (product) => product.id !== productId
      );

      const TotalPrice = updatedCart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotalPrice(TotalPrice);

      return updatedCart;
    });
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      const TotalPrice = updatedCart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotalPrice(TotalPrice);

      return updatedCart;
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

      const TotalPrice = updatedCart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotalPrice(TotalPrice);

      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CardContext.Provider
      value={{
        cart,
        totalPrice,
        compareProducts,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        handleCompare,
        handleCompareClick,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
