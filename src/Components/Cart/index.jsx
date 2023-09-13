import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BasicRating from "../Rating";

export default function MediaCard(props) {
  const { productName, productDescription, productImage } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 150 }} image={productImage} />
      <CardContent>
        <BasicRating></BasicRating>
        <Typography gutterBottom variant="h5" component="div">
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {productDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}
