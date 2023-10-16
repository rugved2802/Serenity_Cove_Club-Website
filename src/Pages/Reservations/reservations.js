import React from "react";
import "./reservations.css";
import memData from "../Membership/memData";
import packData from "../Packages/packData";
import amenData from "../Amenities/amenData";


export default function Reservations(){
    return(
        <div className="main bg-gradient-to-r from-[#525252] to-[#3d72b4]">
            <h1 className="text-center text-6xl font-bold heading">Reservations</h1>
            <div className="flex flex-wrap divide-x-2 px-4 justify-around">
            {/* Membership */}
            <section className="px-2 w-[40%] bg-white py-5 rounded-3xl">
                <h1 className="text-3xl font-semibold head mb-2 ml-2">Membership</h1>
                <h2 className="text-4xl font-bold ml-2">Become a Member!</h2>
                <form action="#1" className="py-4">
                    <div className="form-row grid grid-cols-2">
                            <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label htmlFor="">First Name</label>
                            </div>

                            <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label htmlFor="">Last Name</label>
                            </div>
                    </div>

                    <div className="form-row grid grid-cols-2">
                        <div className="input-data">
                            <input type="text" required />
                            <div className="underline"></div>
                            <label htmlFor="">Email Address</label>
                        </div>

                        <div className="input-data">
                            <input type="tel" required />
                            <div className="underline"></div>
                            <label htmlFor="">Phone</label>
                        </div>
                    </div>

                    <div className="grid grid-rows-2 w-[50%] ml-4">
                        <label htmlFor="membershipType" className="my-2 font-semibold">Select Membership Type:</label>
                        <select id="membershipType" name="membershipType">
                        {memData.map((membership) => (
                        <option key={membership.id} value={membership.title}>
                        {membership.title}
                        </option>
                        ))}
                        </select>

                        <div className="mt-9">
                                    <div className="btn-sub font-bold text-lg">
                                        <div className=""></div>
                                        <input type="submit" value="Submit" />
                                    </div>
                        </div>
                    </div>    
                </form>
            </section>

                





            {/* Package */}
            <section className="px-4 w-[40%] bg-white py-5 rounded-3xl">
                <h1 className="text-3xl font-semibold head mb-2">Packages</h1>
                <h2 className="text-4xl font-bold">Book your Package here</h2>
                <form action="#2" className="py-4">
                    <div className="form-row grid grid-cols-2">
                            <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label htmlFor="">First Name</label>
                            </div>

                            <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label htmlFor="">Last Name</label>
                            </div>
                    </div>

                    <div className="form-row grid grid-cols-2">
                        <div className="input-data">
                            <input type="text" required />
                            <div className="underline"></div>
                            <label htmlFor="">Email Address</label>
                        </div>

                        <div className="input-data">
                            <input type="tel" required />
                            <div className="underline"></div>
                            <label htmlFor="">Phone</label>
                        </div>
                    </div>      

                    <div className="grid grid-rows-2 w-[50%] ml-4">
                        <label htmlFor="membershipType" className="my-2 font-semibold">Select Package Type:</label>
                        <select id="membershipType" name="membershipType" className="w-[100%]">
                        {packData.map((packages) => (
                        <option key={packages.id} value={packages.title}>
                        {packages.title}
                        </option>
                        ))}
                        </select>
                    </div>

                    <div className="grid grid-rows-2 w-[50%] ml-4 mt-8">
                            <label className="my-2 font-semibold">Choose a Date:</label>
                            <input type="date" id="date" name="date" required className=" calendar my-2"/>
                    </div>
                    
                    <div className="grid grid-rows-2 w-[94%] ml-4 mt-5">
                        <label htmlFor="amenityType" className="my-2 font-semibold">Select Amenity Type:</label>
                        <select id="amenityType" name="amenityType" className="input-data">
                        <option value="none">None</option> {/* Placeholder option */}
                        {amenData.map((amenity) => (
                        <option key={amenity.id} value={amenity.title}>
                        {amenity.title}
                        </option>
                        ))}
                        </select>
                    </div>

                    <div className="form-row grid">
                    <div className="input-data">
                            <input type="text" required />
                            <div className="underline"></div>
                            <label htmlFor="">Membership id(if any)</label>
                        </div>  
                    </div>







                    <div className="btn-sub font-bold text-lg mt-9 ml-4">
                            <div className="">
                                <div className=""></div>
                                <input type="submit" value="Submit" />
                            </div>
                    </div>
                </form>
            </section>
            </div>
        </div>
    )
}