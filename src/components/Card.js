import React from "react";
// import Katie from "../img/katie-zaferes.png";
import Star from "../img/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={require(`../img/${props.img}`)}
        alt=""
      />
      <div className="card--stats">
        <img className="card--star" src={Star} alt="" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})∙</span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--description">{props.title}</p>
      <p className="card--cost">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
