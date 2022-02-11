import React from "react";
import AirBnB from "../img/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={AirBnB} alt="" />
    </nav>
  );
}
