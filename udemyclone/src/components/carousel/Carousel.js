import "./Carousel.css";
import { useState } from "react";

const Carousel = () => {
  const [swipe, setSwipe] = useState();
  const [direction, setDirection] = useState("");
  const [carouselClass, setCarouselClass] = useState("");
  const [array, setArray] = useState([
    "Content for section 1",
    "Content for section 2",
    "Content for section 3",
    "Content for section 4",
  ]);

  const handleNextClick = () => {

    if(swipe === -1){
        const tempArray = [...array];
        const temp = tempArray.pop();
        setArray([temp,...tempArray]);
    }
    setSwipe(1);
    setCarouselClass("");

    setDirection("slider-next");
  };

  const handlePrevClick = () => {
    if (swipe === 1) {
      const tempArray = [...array];
      // const temp = tempArray.pop();
      // setArray([temp, ...tempArray]);
      // console.log([temp, ...tempArray])
      const temp = tempArray.splice(0, 1);
      tempArray.push(temp[0]);
      setArray(tempArray);
      setCarouselClass("carousel-prev");
      setDirection("slider-prev");
      
    }
    if (swipe === -1) {
      setDirection("slider-prev");
      // const tempArray = [...array];
      // const temp= tempArray.pop();
      // setArray([temp,...tempArray])
    }
    if (swipe === null || swipe === undefined) {
      
      const tempArray1 = [...array];
      const temp1 = tempArray1.splice(0, 1);
      tempArray1.push(temp1[0]);
      setArray(tempArray1);
      setCarouselClass("carousel-prev");
      setDirection("slider-prev");
    }
    setSwipe(-1);
    // if(direction === "slider-prev"){

    //     setCarouselClass("carousel-prev")
    //     setDirection("slider-prev");
    //     //
    //     //
    //     // console.log(temp)
    //     //

    // }
    // if(direction === ""){
    // setCarouselClass("carousel-prev")
    // const tempArray1= [...array];
    // const temp1 = tempArray1.splice(0,1);
    // tempArray1.push(temp1[0]);
    // setArray(tempArray1);
    // }

    // setDirection("slider-prev")
  };

  const handleTransitionEnd = () => {
    const tempArray = [...array];
    if (direction === "slider-next") {
      const temp = tempArray.splice(0, 1);
      tempArray.push(temp[0]);
      setArray(tempArray);
      console.log(tempArray);
    } else if (direction === "slider-prev") {
      const temp = tempArray.pop();
      console.log(temp);
      setArray([temp, ...tempArray]);
      console.log([temp, ...tempArray]);
    }
    console.log("done transition");
    setDirection("slider-zero-transition");
    setTimeout(() => {
      setDirection((i) => i + " slider-transition");
    }, 50);
  };

  return (
    <>
      <div className="container">
        <div className={`carousel ${carouselClass}`}>
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`slider ${direction}`}
          >
            {array.map((i) => (
              <section>{i}</section>
            ))}
          </div>
          <div class="controls">
            <span onClick={handlePrevClick} class="arrow prev">
              prev
            </span>
            <span onClick={handleNextClick} class="arrow next">
              next
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
