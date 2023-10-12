import React from "react"
import "./reservations.css"
import Card from "./reservations.js"
import resvData from "./resvData.js"

export default function Main(){
    const cards = resvData.map(item => {
        return (
          <Card 
            img={item.img}            
            title= {item.title}
            description= {item.description}
          />
        )
      })
    
    
    return(
        <div className="main bg-gradient-to-r from-[#525252] to-[#3d72b4]">
            <h1 className="text-center text-6xl font-bold">Reservations</h1>
            <div className="flex flex-wrap card-resv">
                {cards}
            </div>
        </div>
    )
}