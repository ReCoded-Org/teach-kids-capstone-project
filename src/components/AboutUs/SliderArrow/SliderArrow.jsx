import React from "react";
import leftArrowSvg from "./../../../assets/chevron-left-white.svg";
import rightArrowSvg from "./../../../assets/chevron-right-white.svg";
import "./SliderArrow.css";

const SliderArrow = ({ leftOrRight, onClick }) => {
    return (
        <div className='arrow'>
            <img
                src={leftOrRight === "left" ? rightArrowSvg : leftArrowSvg}
                onClick={onClick}
                style={
                    leftOrRight === "left"
                        ? {
                              marginLeft: "1rem",
                              position: "relative",
                          }
                        : {
                              marginRight: "1rem",
                              position: "relative",
                          }
                }
                alt='Carousel Arrow'
            />
        </div>
    );
};

export default SliderArrow;
