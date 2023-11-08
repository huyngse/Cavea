import React from "react";
import { useCart } from "../contexts/CardContext";
import CartItem from "../components/CartItem";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import "../../src/assets/checked.png";

var status = 0;

const userIdC = Cookies.get("loggedInUser");

export default function ViewCardForm() {
  const navigate = useNavigate();

  function timeout(delay) {
    return new Promise((res) => {
      setTimeout(res, delay);
    });
  }

  useEffect(() => {
    var query = window.location.search.substring(1);
    console.log(query); //"app=article&act=news_content&aid=160990"
    var vars = query.split("&");
    console.log(vars); //[ 'app=article', 'act=news_content', 'aid=160990' ]
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      console.log(pair); //[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ]
      if (pair[0] == "vnp_ResponseCode") {
        if (pair[1] == "00") {
          var payUrl = "http://localhost:8089/cart/bill?username=" + userIdC;
          const getCarts = async () => {
            try {
              const res = await axios.get(payUrl);
              console.log(res);
            } catch (error) {
              console.log(error.message);
            }
          };
          getCarts();
        }
      } else {
        status = 1;
      }
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  });

  function viewResult() {
    var result;
    if (status == 0) {
      return (
        <div
          className="container mt-5"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={require("../assets/checked.png")}
            style={{ width: "60vh", height: "60vh", border: "none" }}
          />
          <a
            href="http://localhost:3000/Cavea"
            style={{ textDecoration: "none" }}
          >
            <h1 className="text-center mt-5">Thanh toán thành công</h1>
          </a>
        </div>
      );
    } else {
      return (
        <>
          <img
            href="../assets/cancel.png"
            style={{ width: "60%", height: "60%" }}
          />
          <a
            href="http://localhost:3000/Cavea"
            style={{ textDecoration: "none" }}
          >
            <h1 className="text-center">Thanh toan that bai</h1>
          </a>
        </>
      );
    }
  }

  return <div>{viewResult()}</div>;
}
