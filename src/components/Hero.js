import React from "react";
import photoGrid from "../img/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero--photo" src={photoGrid} alt="" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
