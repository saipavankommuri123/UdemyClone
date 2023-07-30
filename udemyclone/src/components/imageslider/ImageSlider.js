import pic1 from "../../assets/sliderpic1.png";
import pic2 from "../../assets/sliderpic2.jpg";
import pic3 from "../../assets/sliderpic3.png";
import { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleNext = () => {
    setDirection("right");
    if (index === 0) {
      setIndex(1);
    } else if(index === 1){
      setIndex(2);
    }
    else{
        setIndex(0)
    }
  };
  const handlePrevious = () => {
    if (index === 1) {
      setIndex(0);
    } else  if(index === 2){
      setIndex(1);
    }else{
        setIndex(3)
    }

    setDirection("left");
  };
  return (
    <div style={{ position: "relative" }}>
      <button class="button-next" onClick={handleNext}>
        Next
      </button>
      <button class="button-previous" onClick={handlePrevious}>
        Previous
      </button>
      {/* {index === 0 ? ( */}
      {/* <img className={index===0 ? "transform2 overlay2" : "transform2"}   src={pic1} alt="slider1" /> */}
      {/* ) : ( */}
      {/* <img className={index === 1 ? "transform" : "transform overlay"} src={pic2} alt="slider1" /> */}
      {/* )} */}
      {/* <img className={index===0 ? "transform-left-hide slide-right" : "transform-left-hide"}   src={pic1} alt="slider1" />
      <img className={index === 1 ? "transform-right-hide slide-left" : "transform-right-hide "} src={pic2} alt="slider1" /> */}
      <img
        className={
          index === 0
            ? "transform-left-hide slide-right"
            : "transform-left-hide"
        }
        src={pic1}
        alt="slider1"
      />
      <img
        className={
          index === 1
            ? "transform-right-hide slide-left"
            : "transform-right-hide"
        }
        src={pic2}
        alt="slider1"
      />
      <img
        className={
          index === 2
            ? "transform-right-hide slide-left"
            : "transform-right-hide"
        }
        src={pic3}
        alt="slider1"
      />
    </div>
  );
};

export default ImageSlider;
