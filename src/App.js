import React, { useEffect } from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home/Home.js"
import Footer from "./Pages/Footer/footer.js"
import Navbar from "./Pages/Nav/navbar.js"
import About from "./Pages/About/about.js"
import Membership from "./Pages/Membership/main-mem.js";
import Amenities from "./Pages/Amenities/main-amen.js";
import Packages from "./Pages/Packages/main-pack.js";
import Reservations from "./Pages/Reservations/reservations.js"


export default function App(){
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [pathname])

    useEffect (() => {
        Aos.init({ duration: 500 });
      }, []);


    return(
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="/amenities" element={<Amenities />} />
                    <Route path="/packages" element={<Packages />} />
                    <Route path="/reservations" element={<Reservations />} />
                </Routes>
                <Footer />
            </div>
    )
}