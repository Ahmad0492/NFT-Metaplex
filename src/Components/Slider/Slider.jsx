import React from "react";
import { SliderDiv } from "./style";
import RightArrow from "../../assets/right_arrow.svg";
import LeftArrow from "../../assets/left_arrow.svg";

const Slider = ({ moveLeft, moveRight }) => {
  return (
    <SliderDiv>
      <img src={LeftArrow} alt="Left Arrow" onClick={moveLeft} />
      <img src={RightArrow} alt="Right Arrow" onClick={moveRight} />
    </SliderDiv>
  );
};

export default Slider;
