import React from "react";
import leftArrowSvg from "./../../../assets/chevron-left-blue.svg";
import rightArrowSvg from "./../../../assets/chevron-right-blue.svg";
import './SliderArrow.css';

const SliderArrow = ({ leftOrRight, onClick }) => {
  return (
    <div className="arrow">
      <img
        src={leftOrRight === "left" ? rightArrowSvg : leftArrowSvg}
        onClick={onClick}
        style={
          leftOrRight === "left"
            ? { marginLeft: "1rem" }
            : { marginRight: "1rem" }
        }
        alt="Carousel Arrow"
      />
    </div>
  );
};

export default SliderArrow;