import React from "react"
import {Link} from "react-router-dom"
import "./membership.css"

export default function Membership(props){
    return(
        <div data-aos="zoom-in" data-aos-once="true" data-aos-duration="500">
            <div className=" w-[580px] p-5 text-white rounded-xl bg-black h-full">
            <div className="flex justify-center">
                <img src={props.img} alt="img" className="rounded-lg mb-3"/>
            </div>
                <div className="text-3xl font-semibold head">
                    {props.title}
                </div>
                <div className="text-xl mb-6 font-extralight">
                    {props.description}
                </div>
                <Link to="" className="btn-know font-bold text-lg">Know More</Link>
            </div>
        </div>
    )

}