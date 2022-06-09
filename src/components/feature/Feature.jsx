import React from "react";
import "./feature.css";
import icon1 from "../../assets/icon1.png";
import fog from "../../assets/fog.png";

const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <img className="icon-image" src={icon1} />
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
