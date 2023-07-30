import pic1 from "../../assets/sliderpic1.png";
import pic2 from "../../assets/sliderpic2.jpg";
import pic3 from "../../assets/sliderpic3.png";
import { useState } from "react";
import "./ImageSlider.css";
import ImageView from "./ImageView";

const ImageSlider2 = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
    const images= [pic1,pic2,pic3];
//   const handleNext = () => {
//     setDirection("right");
//     if (index === 0) {
//       setIndex(1);
//     } else if(index === 1){
//       setIndex(2);
//     }
//     else{
//         setIndex(0)
//     }
//   };
//   const handlePrevious = () => {
//     if (index === 1) {
//       setIndex(0);
//     } else  if(index === 2){
//       setIndex(1);
//     }else{
//         setIndex(2)
//     }

//     setDirection("left");
//   };

  return (
    <div style={{ position: "relative" }}>
      
      
     <ImageView img={images}/>
    </div>
  );
};

export default ImageSlider2;
