import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { products } from "../../Components/List-cart/list_product";
import "./../../Components/Cart/product_cart.css";
import "./product_detail.css";
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DiamondIcon from '@mui/icons-material/Diamond';
import InterestsIcon from '@mui/icons-material/Interests';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GridGoldenratioIcon from '@mui/icons-material/GridGoldenratio';
import DeskIcon from '@mui/icons-material/Desk';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartButton } from "../../Components/Cart/style_component";
const centerContentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "5rem",
};


export default function ProductDetailForm() {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const { productId } = useParams();

  const productInfo = products.find(
    (product) => product.id === parseInt(productId)
  );
  if (!productInfo) {
    return <div style={centerContentStyle}>Sản phẩm không tồn tại.</div>;
  }


  return (
    <div className="product-detail-container" onLoad={scrollToTop}>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={productInfo.image}></img>
          </Grid>
          <Grid item xs={8}>
            <h1>{productInfo.name}<span className="model">{productInfo.model}</span></h1>
            <Divider />

            <div className="rating-bar">
              <div>
                <span>{productInfo.rating}</span>
                <Rating name="read-only" value={productInfo.rating} readOnly precision={0.5} style={{ marginLeft: '10px' }} />
              </div>
              <Divider orientation="vertical" flexItem />
              <div>
                <span>0 </span>
                Đánh gái
              </div>
              <Divider orientation="vertical" flexItem />
              <div>
                <span>0 </span>
                Đã bán
              </div>
            </div>
            <Divider className="" />
            <Grid container spacing={0}>
              <Grid item xs={6} className="price-box">
                <h2>
                  {productInfo.price}
                </h2>
                <h3>
                  {productInfo.discount}
                </h3>
                <button className="add-to-cart-button">
                  {/* <AddShoppingCartIcon style={{marginRight: '5px'}}/> */}
                  Thêm vào giỏ
                  <i class="fa-sharp fa-solid fa-chevron-right"></i>
                </button>
              </Grid>
              <Grid item xs={6}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <ListItem>

                    <ListItemAvatar>
                      <Avatar style={{ backgroundColor: 'grey' }}>
                        <InterestsIcon />

                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hình dáng" secondary={productInfo.shape} />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar style={{ backgroundColor: 'grey' }}>
                        <DiamondIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Nguyên liệu" secondary={productInfo.material} />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar style={{ backgroundColor: 'grey' }}>
                        <GridGoldenratioIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Số nan" secondary={productInfo.spoke} />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar style={{ backgroundColor: 'grey' }}>
                        <CheckroomIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Móc" secondary={productInfo.hanger} />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar style={{ backgroundColor: 'grey' }}>
                        <DeskIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Chân quỳ" secondary={productInfo.base} />
                  </ListItem>
                </List>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

      </div>
    </div>
  );
}
