import "./Navbar.css";
import udemyImage from "../assets/logo-udemy.svg";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-element">
        <img src={udemyImage} alt="udemy" />
      </div>
      <div className="navbar-element">Categories</div>
      <div className="navbar-element">
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

      <div className="navbar-element">Udemy Business</div>
      <div className="navbar-element">Teach on Udemy</div>
      <div className="navbar-element">My Learning</div>
      <div className="navbar-element">
        <span class="material-symbols-outlined">favorite</span>
      </div>
      <div className="navbar-element">
        <span class="material-symbols-outlined">shopping_cart</span>
      </div>
      <div className="navbar-element">
        <span class="material-symbols-outlined">notifications</span>
      </div>
      <div className="navbar-element">
        <span class="material-symbols-outlined">radio_button_unchecked</span>
      </div>
    </div>
  );
};
export default Navbar;
