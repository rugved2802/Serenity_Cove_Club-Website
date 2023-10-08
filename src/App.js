import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home.js"
import Footer from "./Pages/Footer/footer.js"
import Navbar from "./Pages/Nav/navbar.js"
import About from "./Pages/About/about.js"
import Membership from "./Pages/Membership/main-mem.js";
import Amenities from "./Pages/Amenities/main-amen.js";
import Reservations from "./Pages/Reservations/main-resv.js";


export default function App(){
    return(
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="/amenities" element={<Amenities />} />
                    <Route path="/reservations" element={<Reservations />} />
                    
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}