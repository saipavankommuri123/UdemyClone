import Navbar from "./Navbar";
import "./Top.css"
// import Carousel from "./carousel/Carousel";
// import ImageSlider from "./imageslider/ImageSlider";
// import ImageSlider2 from "./imageslider/ImageSlider2";
import ImageCarousel from "./imagecarousel/ImageCarousel";
import MenuCard from "./menucard/MenuCard";
import NavbarSecondary from "./navbarsecondary/NavbarSecondary";
const Top = () => {
    return (
        <div className="top-container">
           
           <Navbar/>
           <NavbarSecondary/>
          <ImageCarousel/>
        </div>
    )
}

export default Top;