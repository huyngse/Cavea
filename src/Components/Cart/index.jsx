import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import BasicRating from "../Rating/index.jsx";
import { CustomCard } from "./style_component.jsx";

export default function MediaCard(props) {
  const { productName, productDescription, productImage, rating } = props;

  return (
    <CustomCard>
      <CardMedia sx={{ height: 262 }} image={productImage} />
      <CardContent>
        <BasicRating value={rating}></BasicRating>
        <Typography gutterBottom variant="h5" component="div">
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {productDescription}
        </Typography>
      </CardContent>
    </CustomCard>
  );
}
