import Navbar from "./Navbar";
import "./Top.css"
import NavbarSecondary from "./navbarsecondary/NavbarSecondary";
const Top = () => {
    return (
        <div className="top-container">
           <Navbar/>
           <NavbarSecondary/>
        </div>
    )
}

export default Top;