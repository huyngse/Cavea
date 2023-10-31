import React from "react";
import { useCart } from "../contexts/CardContext";
import CartItem from "../components/CartItem";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function ViewCardForm() {
  const { cart, totalPrice } = useCart();
  const [carts, setCarts] = useState([]);
  const [objectcart,setObject]=useState({})
  const userIdC=Cookies.get("loggedInUser")
  var sum=0;
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0); // Used to count the number of products added
  useEffect(() => {
    const getCarts = async () => {
      try {
        const res = await axios.get('http://localhost:8089/cart/get?username='+userIdC);
        setCarts(res.data.list); 
        setObject(res.data)
        console.log("Username",userIdC);
      }catch (error){
        console.log(error.message);
      }
    }
    getCarts();
  }, []);
  return (
    <MainLayout>
      <div className="container" style={{ minHeight: "500px" }}>
        <div className="row my-3">
          <div className="col-8">
            <h2 className="border-bottom py-3 mb-3">
              Hiện đang có {objectcart.totalItems} sản phẩm trong giỏ hàng
            </h2>
              <div>
                {carts.map((item) => {
                  return(<CartItem
                    key={item.regularCages.cageId}
                    id={item.regularCages.cageId}
                    image={'https://www.sieuthilongchim.net//img/webroot/upload/image/files/cu%20gay%20390%20(4).jpg'}
                    name={item.regularCages.cageName}
                    description={item.regularCages.longDecription}
                    price={item.regularCages.cagePrice}
                    cost={item.regularCages.cagePrice}
                    quantity={1}
                  />)
                })}
                <div
                  variant="h6"
                  color="text.secondary"
                  style={{ padding: "1rem" }}
                ></div>
              </div>
            <h2 className="border-bottom py-3 mb-3">Sản phẩm để dành</h2>
            <CartItem
              image="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
              name="Sảm phẩm số #1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam maxime, aperiam harum blanditiis ducimus alias nemo, qui autem doloribus ea, voluptatibus quo in nisi vitae explicabo assumenda ipsam vero!"
              price={1000}
              cost={1000}
              archive
            />
          </div>
          <div className="col-4 ps-5 mt-5">
            <div className="text-center mb-4">
              <h2>Tổng cộng </h2>
              <h3 className="text-primary mb-3">
                {objectcart.message}
              </h3>
              <a href="/checkout">
                <button className="btn btn-primary mx-auto w-50">
                  Đặt hàng
                </button>
              </a>
            </div>
            <ul className="ps-3">
              <a href="/">
                <li>Tiếp tục mua hàng</li>
              </a>
              <a href="/">
                <li>Trở về</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
