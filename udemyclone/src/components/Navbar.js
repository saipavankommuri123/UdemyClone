import "./Navbar.css";
import udemyImage from "../assets/logo-udemy.svg";
import { useState } from "react";
import CategoriesDropdown from "./categories/CategoriesDropdown";
import { categories } from "../assets/sampledata";
import MenuCard from "./menucard/MenuCard";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = () => {
        setShowMenu(true);
    }
  // const [showCategories, setShowCategories] = useState(false);
  // const displayCategories = () => {
  //     setShowCategories(i => !i);
  // }
  return (
    <div className="navbar-main">
         <MenuCard showMenu={showMenu} setShowMenu={setShowMenu}/>
      <div className="menu-icon" onClick={handleMenu}>
        <span class="material-icons">menu</span>
      </div>
      <div className="navbar-element udemy-image">
        <img src={udemyImage} alt="udemy" />
      </div>
      <div className="navbar-element-categories">
        <span className="main-span">Categories</span>
        <CategoriesDropdown categories={categories} />
      </div>
      <div className="navbar-element hide">
        <div className="navbar-search">
          {/* <div>
          
            </div> */}
          <div className="search-icon">
            <span class="material-symbols-outlined">search</span>
          </div>
          <div>
            <input
              type="text"
              name="search-input"
              placeholder="Search for anything"
            ></input>
          </div>
        </div>
      </div>

      <div className="navbar-element hide">Udemy Business</div>
      <div className="navbar-element hide">Teach on Udemy</div>
      <div className="navbar-element hide">My Learning</div>
      <div className="navbar-element hide">
        <span class="material-symbols-outlined">favorite</span>
      </div>
      <div className="navbar-element cart-icon">
        <span class="material-symbols-outlined">shopping_cart</span>
      </div>
      <div className="navbar-element hide">
        <span class="material-symbols-outlined">notifications</span>
      </div>
      <div className="navbar-element hide">
        <span class="material-symbols-outlined">radio_button_unchecked</span>
      </div>
    </div>
  );
};
export default Navbar;
