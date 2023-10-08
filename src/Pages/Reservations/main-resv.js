import React from "react"
import "./reservations.css"
import Reservations from "./reservations.js"

export default function Main(){
    return(
        <div className="main">
            <h1 className="text-center text-6xl font-bold">Reservations</h1>
            <Reservations />
        </div>
    )
}