import React from "react";
import Rating from "@mui/material/Rating";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
function UserReview(props) {
  const [likeCount, setLikeCount] = React.useState(props.likeCount);
  const [liked, setLiked] = React.useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
    } else {
      setLikeCount(likeCount - 1);
      setLiked(false);
    }
  };
  return (
    <>
      <div className="border-top mb-3"></div>

      <div className="d-flex bg-light p-3 ">
        <img
          src={props.avatar}
          className="review-avatar me-3 align-self-start"
        ></img>
        <div className="flex-grow-1">
          {props.username}
          <br />
          <Rating
            name="review-rating"
            defaultValue={props.rating}
            precision={0.5}
            readOnly
          />
          <br />
          <small className="text-muted">{props.date}</small>
          {props.children}
          <div className="text-end">
            <button
              className={`btn ${
                liked === true ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={handleLikeClick}
            >
              <span className="me-2">
                <ThumbUpOffAltIcon />
              </span>
              {likeCount}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserReview;
