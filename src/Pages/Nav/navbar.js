import React from "react"
import logo from "../../Images/logo-12.jpg"
import {Link} from "react-router-dom";
import "./navbar.css"
import "../Home/Home.css"

export default function Navbar(){
    // const [navbarColor, setNavbarColor] = useState("white");
    // const [isTransparentBackground, setIsTransparentBackground] = useState(false);
  
    // useEffect(() => {
    //   // Check the background color of the parent element (or body)
    //   const parentBackgroundColor = window.getComputedStyle(
    //     document.body.parentNode
    //   ).getPropertyValue("background-color");
  
    //   // If the background color is "transparent" or not defined, set the navbar color to black
    //   if (parentBackgroundColor === "transparent" || !parentBackgroundColor) {
    //     setNavbarColor("");
    //     setIsTransparentBackground(true);
    //   } else {
    //     // Otherwise, set it to your default color (e.g., white)
    //     setNavbarColor("");
    //     setIsTransparentBackground(false);
    //   }
    // }, []);


    return(
        <div className="nav" >
            <div className="flex py-5 navbar justify-between">
                <img src={logo} alt="logo" className="px-10 content-end" width="225px"  />
                    <div className="flex">
                    <Link to="/" className="navbar-items self-center px-10">Home</Link>
                    <Link to="/about" className="navbar-items self-center px-10">About</Link>
                    <Link to="/membership" className="navbar-items self-center px-10">Membership</Link>
                    <Link to="/amenities" className="navbar-items self-center px-10">Amenities</Link>
                    <Link to="/reservations" className="navbar-items self-center px-10">Reservations</Link>
                    </div>
            </div>
        </div>
    )
}