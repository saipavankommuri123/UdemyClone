import "./MenuCard.css";
import MostPopularList from "./MostPopularList";
import ProfileCard from "./ProfileCard";
import { categories } from "../../assets/sampledata";
import MenuCardFooter from "./MenuCardFooter";
const MenuCard = ({ showMenu, setShowMenu }) => {
  return (
    <>
      <div
        className={`menu-container-wrapper ${
          !showMenu && "menu-container-hide"
        }`}
      >
        <div className="close-icon" onClick={() => setShowMenu(false)}>
            <span class="material-icons">close</span>
          </div>
        <div className={`menu-container`}>
          <ProfileCard />
          
          <div className="learn-section">
            <p>Learn</p>
            My learning
          </div>
          <div className="popular-section">
            <p>Most popular</p>
            <MostPopularList categories={categories} />
          </div>
          <div className="more-section">
            <p>More from Udemy</p>
          <MenuCardFooter/>
          </div>
        </div>
        
       
      </div>
    </>
  );
};
export default MenuCard;
