import React from "react"
import logo from "../../Images/logo-12.jpg"
import {Link} from "react-router-dom";
import "./navbar.css"
import "../Home/Home.css"

export default function Navbar(){
//     const [textColor, setTextColor] = useState("black");

//   useEffect(() => {
//     const navbar = document.querySelector(".nav");
//     const computedStyle = window.getComputedStyle(navbar);
//     const backgroundColor = computedStyle.backgroundColor;
//     const isBackgroundColorLight = isLightColor(backgroundColor);

//     // Set text color based on background color
//         setTextColor(isBackgroundColorLight ? "white" : "black");
//     }, []);

//   // Function to determine if a background color is light
//     function isLightColor(backgroundColor) {
//         const rgbValues = backgroundColor.match(/\d+/g).map(Number);
//         const luminance =
//         0.299 * rgbValues[0] + 0.587 * rgbValues[1] + 0.114 * rgbValues[2];
//         return luminance > 128;
//     }

// style={{ color: textColor }}

    return(
        <div className="nav">
            <div className="flex py-5 navbar justify-between">
                <img src={logo} alt="logo" className="px-10 content-end" width="225px"  />
                    <div className="flex">
                    <Link to="/" className="navbar-items self-center px-10 ">Home</Link>
                    <Link to="/about" className="navbar-items self-center px-10">About</Link>
                    <Link to="/membership" className="navbar-items self-center px-10">Membership</Link>
                    <Link to="/amenities" className="navbar-items self-center px-10">Amenities</Link>
                    <Link to="/reservations" className="navbar-items self-center px-10">Reservations</Link>
                    </div>
            </div>
        </div>
    )
}