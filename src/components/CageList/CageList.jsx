import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CageItem from "./CageItem";
import axios from "axios";

import MediaCard from "../ProductCard/ProductCard.jsx";

import { CardContext, useCart } from "../../contexts/CardContext.jsx";

export default function CageList() {
  const { addToCart } = useContext(CardContext);
  const { handleCompare } = useCart();
  const [products, setProducts] = useState([]);

  const handleComparison = (productId) => {
    handleCompare(productId);
  };

  const handleAddToCart = (productId,userid) => {

      addToCart(productId,userid);
    
  };


  useEffect(() => {
    var cagetypes='';
     var query = window.location.search.substring(1);
            console.log(query)//"app=article&act=news_content&aid=160990"
            var vars = query.split("&");
            console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
            for (var i=0;i<vars.length;i++) {
                        var pair = vars[i].split("=");
                        console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 

                        if(pair[0] == 'cagetype'){
                
                          cagetypes=pair[1];
                       
                           }
                      }


    const getProduct = async () => {
      try {
        var res;
        if(cagetypes!=''){
           res = await axios.get('http://localhost:8089/regular-cage/get?birdtypeId='+cagetypes);
        }else{
           res = await axios.get('http://localhost:8089/regular-cage/get');
        }
        setProducts(res.data.list); 
        console.log(res.data.list);
      }catch (error){
        console.log(error.message);
      }
    }
    getProduct();
  }, []);

  const itemImage = 'https://www.sieuthilongchim.net//img/webroot/upload/image/files/cu%20gay%20390%20(4).jpg';
  const itemStyle = {
    borderBottom: '1px solid #ddd'
 }
 const modelDiv = {
  backgroundColor: "darkOrange",
  width: "fit-content",
  marginLeft: "auto",
  marginRight: "auto",
  color: "white",
  padding: "4px 6px",
  borderRadius: "20px",
  fontSize: "10px",
  fontWeight: "bold",
};

  return (
    <div className="px-3 py-3">
      <div className="row">
      {products.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-6">
<MediaCard
        
        cageid={item.cageId}
        userid='17'
        productName={
            <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/product-detail/${item.cageId}`}
            >
                {item.cageName}
            </Link>
            
        }
        productDescription={item.cageName}
        productImage={itemImage}
        rating={item.cageRate}
        productPrice={item.discount}
        productDiscount={item.cagePrice}
        onCompare={handleComparison}
        onAddToCart={handleAddToCart}
    />

                </div>
              );
          })}
      
      </div>

    </div>
  );
}
