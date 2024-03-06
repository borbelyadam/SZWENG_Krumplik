import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.imageUri} alt=""></img>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-body">
          <p>{props.body}</p>
        </div>
      </div>

      <div className="btn">
        <button>View Product</button>
      </div>
    </div>
  );
};

export default Card;