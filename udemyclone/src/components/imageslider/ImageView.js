import {useState} from "react";
import "./ImageSlider.css";

const ImageView = (props) => {
    console.log(props)
    const [i, setI] = useState(0);
    const [j, setJ] = useState(1);
 
  const handleNext = () => {
    setI(1);
    setJ(0)
  };
  const handlePrevious = () => {
   
  };
  return (
    <>
      <button className="button-previous" onClick={handlePrevious}>
        Previous
      </button>
      <button className="button-next" onClick={handleNext}>
        Next
      </button>
      <img
        className="transform-right-hide slide-left"
        src={props.img[i]}
        alt="sliderIm"
      />
      <img
        className="transform-right-hide"
        src={props.img[j]}
        alt="sliderIm"
      />
    </>
  );
};

export default ImageView;
