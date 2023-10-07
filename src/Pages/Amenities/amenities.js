import React from "react"
import {Link} from "react-router-dom"

export default function Amenities(props){
    return(
        <div className="">
            <div className=" relative w-[350px] card">
                <div className="flex justify-center">
                    <img src={props.img} alt="img" className="w-[350px] picture"/>
                </div>
                <div className="block">
                <Link to="" className="btn-link text-white font-semibold text-3xl">{props.title}</Link>
                </div>
            </div>
        </div>
    )
}