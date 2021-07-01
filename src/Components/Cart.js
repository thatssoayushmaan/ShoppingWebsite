import React, { useState } from "react";
import RatingStars from "./RatingStars";
export default function Cart({ product, count, setCount }) {
  const [text, setText] = useState("Add To Cart");

  const handleClick = (e) => {
    if (e.target.innerText === "Add To Cart") {
      setCount(count + 1);
      setText("Remove");
    } else {
      setCount(count - 1);
      setText("Add To Cart");
    }
  };

  const rating = Math.floor(Math.random() * 5) + 1;

  const showRating = (rating) => {
    let row = [];
    for (let i = 0; i < rating; i++) {
      row.push(
        <span className="fill-star" key={i}>
          <i className="fas fa-star"></i>
        </span>
      );
      for (let i = rating; i < 5; i++) {
        row.push(
          <span className="fill-star" key={i}>
            <i class="fal fa-star"></i>
          </span>
        );
      }
      return row;
    }
  };
  return (
    <div className="card">
      <img className="card-img-top" src={product.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <button onClick={handleClick}>{text}</button>
        <RatingStars />
      </div>
    </div>
  );
}
