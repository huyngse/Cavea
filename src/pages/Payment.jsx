import React from "react";
import { useCart } from "../contexts/CardContext";
import CartItem from "../components/CartItem";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

var status=0;

const userIdC=Cookies.get("loggedInUser")


export default function ViewCardForm() {
    useEffect(() => {
        var query = window.location.search.substring(1);
            console.log(query)//"app=article&act=news_content&aid=160990"
            var vars = query.split("&");
            console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
            for (var i=0;i<vars.length;i++) {
                        var pair = vars[i].split("=");
                        console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
            if(pair[0] == 'vnp_ResponseCode'){
                
               if(pair[1]=='00'){
                var payUrl = 'http://localhost:8089/cart/bill?username='+userIdC;
                const getCarts = async () => {
                  try {
                    const res = await axios.get(payUrl);
                    console.log(res)
                  }catch (error){
                    console.log(error.message);
                  }
                }
                getCarts();
               }
            
                }else{
                    status=1;
                }
             }
      }, []);
      function viewResult(){
        var result;
        if(status==0){
            return (<a href="http://localhost:3000/Cavea"><h1>Thanh toan thanh cong</h1></a>)
        }else{
            return (<a href="http://localhost:3000/Cavea"><h1>Thanh toan that bai</h1></a>)
        }
        
      }
      
    return(
        
        <div>
           {viewResult()}

        </div>
    )
}