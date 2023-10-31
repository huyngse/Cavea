import React from "react";
import Cookies from "js-cookie";
import { useCart } from "../contexts/CardContext";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";


export default function CheckoutPage() {
  const email = Cookies.get("email");
  const phone = Cookies.get("phone");
  const firstName = Cookies.get("firstName");
  const lastName = Cookies.get("lastName");
  const { cart, totalPrice } = useCart();
  const [carts, setCarts] = useState([]);
  const [cuscarts, setCusCarts] = useState([]);
  const [objectcart,setObject]=useState({})
  const userIdC=Cookies.get("loggedInUser")
  
  var urldata;
  var checkCus;

  const handleClick = () => {
    var typePays = document.getElementsByName('flexRadioDefault');
    var userid = document.getElementById('usernn');
    var typePay = "";
    var payUrl = '';
    for (var i = 0; i < typePays.length; i++) {
      if (typePays[i].checked) {
        typePay = typePays[i].value;
      }
    }
    if (typePay === '1') {
      
      if(checkCus){
        payUrl = 'http://localhost:8089/cart/pay?username=' + userIdC+'&status=2';
      }else{
        payUrl = 'http://localhost:8089/cart/pay?username=' + userIdC
      }
      const getCarts = async () => {
        try {
          const res = await axios.get(payUrl);
          urldata = res.data

          console.log(urldata);
          window.open(urldata.data)
        } catch (error) {
          console.log(error.message);
        }
      }
      getCarts();

    }
    else if (typePay === '2') {
      payUrl = 'http://localhost:8089/cart/bill?username=' + userIdC;
      const getCarts = async () => {
        try {
          const res = await axios.get(payUrl);
          window.open('http://localhost:3000/payment-vnpay/results?vnp_ResponseCode=01')
          console.log(res)
        } catch (error) {
          console.log(error.message);
        }
      }
      getCarts();
    }
    return payUrl;
  }

  useEffect(() => {
    const getCarts = async () => {
      try {
        const res = await axios.get('http://localhost:8089/cart/get?username='+userIdC);
        setCarts(res.data.list);
        setObject(res.data)
        console.log(res.data.list);
      } catch (error) {
        console.log(error.message);
      }
    }
    const getCusCarts = async () => {
      try {
        const res = await axios.get('http://localhost:8089/cart/get?username='+userIdC+'&status=2');
        setCusCarts(res.data.list);
        console.log(res.data.list);
      } catch (error) {
        console.log(error.message);
      }
    }
    
    var query = window.location.search.substring(1);
    console.log(query)//"app=article&act=news_content&aid=160990"
    var vars = query.split("&");
    console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
      if (pair[0] == 'customize-cage') {
        if (pair[1] == 'true') {
          checkCus = true;
        }

      }
    }
    if (checkCus) {
      getCusCarts();
    } else {
      getCarts();
      getCusCarts();
    }

  }, []);
  return (
    <MainLayout>
      <div className="bg-white">
        <div className="flex-grow-1 container py-3 ">
          <h1 className="h2 border-bottom mb-3">Đơn hàng</h1>
          <div className="row mb-5">
            <div className="col-7">
              <section>
                <h2 className="h5">Địa chỉ giao hàng</h2>
                <span className="h6">
                  Tên khách hàng:{" "}
                  <span style={{ fontWeight: "normal" }}>
                    {firstName} {lastName}
                  </span>
                </span>
                <br />
                <span className="h6">
                  Email: <span style={{ fontWeight: "normal" }}>{email}</span>
                </span>
                <br />
                <span className="h6">
                  Số điện thoại:{" "}
                  <span style={{ fontWeight: "normal" }}>{phone}</span>
                </span>
                <br />
                <span className="h6">Địa chỉ:</span>
              </section>
            </div>
            <div className="col-5 ps-3">
              <section className="mb-3">
                <h2 className="h5">Thông tin tài khoản</h2>
                <span className="h6">
                  Tên khách hàng:{" "}
                  <span style={{ fontWeight: "normal" }}>
                    {firstName} {lastName}
                  </span>
                </span>
                <br />
                <span className="h6">Email: </span>
                <span style={{ fontWeight: "normal" }}>{email}</span>
                <br />
                <span className="h6">
                  Số điện thoại:{" "}
                  <span style={{ fontWeight: "normal" }}>{phone}</span>
                </span>
              </section>
            </div>
          </div>

          <div className="row">
            <div className="col-7">
              <h2 className="h5">Tóm tắt giỏ hàng</h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">SST</th>
                    <th scope="col">Ảnh</th>
                    <th scope="col">Thông tin sản phẩm</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <div style={{ maxWidth: "100px" }}>
                          <img
                            className="img-fluid"
                            src={item.image}
                            alt=""
                          ></img>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="h6">Tên sản phẩm: </span>
                          {item.regularCages.cageName}
                        </div>
                        <div>
                          <span className="h6">Loại: </span>
                          {item.regularCages.cageCode}
                        </div>
                        <div>
                          <span className="h6">Số lượng: </span>
                          {1}
                        </div>
                        <div>
                          <span className="h6">Thành tiền: </span>
                          {item.regularCages.cagePrice}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2 className="h5">Tóm tắt giỏ hàng Customcage</h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">SST</th>
                    <th scope="col">shape</th>
                    <th scope="col">material</th>
                    <th scope="col">price</th>
                    <th scope="col">description</th>
                  </tr>
                </thead>
                <tbody>
                  {cuscarts.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {item.shape}
                      </td>
                      <td>
                        <div>

                          {item.material}
                        </div>


                      </td>
                      <td> <div>

                        {item.price}
                      </div></td>
                      <td> <div>

                        {item.description}
                      </div></td>
                    </tr>
                  ))}
                </tbody>
              </table>



              <div className="text-end">
                <span className="text-muted">Tổng cộng: </span>
                <span className="text-primary h3">
                  {objectcart.message}
                </span>
              </div>
            </div>
            <div className="col-5 ps-3 mb3">
              <div className="mb-3">
                <label className="h5">Ghi chú đơn hàng</label>
                <textarea
                  className="form-control"
                  id="orderNote"
                  rows="3"
                  placeholder="Ghi chú trong trường hợp địa chỉ khó tìm"
                ></textarea>
              </div>

              <input type="hidden" value='17' name="usernn" id="usernn" />
              <div className="mb-3">
                <h2 className="h5">Phương thức thanh toán</h2>
                <div className="ps-3">
                  <div className="form-check">
                    <input

                      value='1'
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="paymentMethod1"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="paymentMethod1"
                    >
                      Bằng VNPay
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      value='2'
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="paymentMethod2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="paymentMethod2"
                    >
                      Thanh toán tại cửa hàng
                    </label>
                  </div>


                </div>
              </div>
              <div className="d-flex">
                {/* <a href="/payment" className="mx-auto w-50"> */}
                <button onClick={handleClick} className="btn btn-primary ">Thanh toán</button>
                {/* </a> */}
              </div>

            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
