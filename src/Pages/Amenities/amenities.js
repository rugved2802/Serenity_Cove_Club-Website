import React from "react"
import {Link} from "react-router-dom"

export default function Amenities(props){
    return(
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
            <div className=" relative w-[400px] card">
                <div className="flex justify-center">
                    <img src={props.img} alt="img" className="w-[400px] picture"/>
                </div>
                <div className="block">
                <Link to="" className="btn-link text-white font-semibold text-3xl">{props.title}</Link>
                </div>
            </div>
        </div>
    )
}