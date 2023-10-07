import React from "react"
import "./Home.css"

export default function Hero() {
    return(
        <div className="hero px-1">
            <h1 className="text-6xl font-semibold py-3">Discover Serenity and <br /> Sophistication</h1>
            <button className="btn-hero">Join our club</button>
        </div>
    )
}