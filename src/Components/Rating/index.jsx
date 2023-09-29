import * as React from "react";
import Rating from "@mui/material/Rating";

export default function BasicRating(props) {
  const { value } = props;

  return <Rating name="read-only" value={value} readOnly precision={0.5}/>;
}
