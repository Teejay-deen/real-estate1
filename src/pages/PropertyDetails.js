import React from "react";
import { housesData } from "../data";
import { useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";

const PropertyDetails = () => {
    const { id } = useParams();

    const house = housesData.find((house) => {
        return house.id == id;
    });

    return ( <
        section >
        <
        div className = "container mx-auto min-h-[800px] mb-14 " >
        <
        div className = "flex flex-col lg:flex-row lg:items-center lg:justify-between" >
        <
        div >
        <
        h2 className = "text-2xl font-semibold" > { house.name } < /h2> <
        h3 className = "text-lg mb-4" > { house.address } < /h3> <
        /div> <
        div className = "mb-4 lg:mb-0 flex gap-x-2 text-sm" >
        <
        div className = "bg-green-500 text-white px-3 rounded-full" > { house.type } <
        /div> <
        div className = "bg-violet-700 text-white px-3 rounded-full" > { house.country } <
        /div> <
        /div>

        <
        div className = "text-3xl font-semibold text-violet-800" >
        $ { house.price } <
        /div> <
        /div>

        <
        div className = "flex flex-col items-center gap-8 lg:flex-row" >
        <
        div className = "max-w-[768px]" >
        <
        div className = "mb-8" >
        <
        img src = { house.imageLg }
        alt = "" / >
        <
        /div>

        <
        div className = "flex gap-x-6 text-violet-800 mb-6  " >
        <
        div className = "flex gap-2 items-center" >
        <
        BiBed className = "text-2xl" / >
        <
        div > { house.bedrooms } < /div> <
        /div>

        <
        div className = "flex gap-2 items-center" >
        <
        BiBath className = "text-2xl" / >
        <
        div > { house.bathrooms } < /div> <
        /div>

        <
        div className = "flex gap-2 items-center" >
        <
        BiArea className = "text-2xl" / >
        <
        div > { house.surface } < /div> <
        /div> <
        /div> <
        div > { house.description } < /div> <
        /div>

        <
        div className = "my-32 w-full border mt-1 flex-1 bg-white border-gray-300 rounded-lg px-6 py-6" >
        <
        div className = "flex items-center gap-x-4 mb-8" >
        <
        div className = "w-20 h-20 p-1  border-gray-400 rounded-full" >
        <
        img src = { house.agent.image }
        alt = "" / >
        <
        /div> <
        div className = "font-bold text-lg" > { house.agent.name } < /div> <
        Link to = ""
        className = "text-violet-700 text-sm flex" >
        View Listing <
        /Link> <
        /div>

        <
        form className = "flex flex-col gap-y-4" >
        <
        input className = "border border-gray-300 focus:border-violet-500 outline-none rounded-lg w-full px-4 h-14 text-sm"
        type = "text"
        placeholder = "Name*" / >
        <
        input className = "border border-gray-300 focus:border-violet-500 outline-none rounded-lg w-full px-4 h-14 text-sm"
        type = "text"
        placeholder = "Email*" / >
        <
        input className = "border border-gray-300 focus:border-violet-500 outline-none rounded-lg w-full px-4 h-14 text-sm"
        type = "text"
        placeholder = "Phone*" / >

        <
        textarea defaultValue = "Hello Tajudeen, I am Interested in [Modern Appartment]"
        placeholder = "Message*"
        className = "border border-gray-300 outline-none resize-none rounded-lg p-4 text-sm text-gray-400  focus:border-violet-600 w-full h-28" > < /textarea> <
        div className = "gap-x-4 flex flex-row" >
        <
        button className = "bg-violet-700 hover:bg-violet-800 text-sm rounded-full px-2   text-white" > Send Message < /button> <
        button className = "bg-green-600 hover:bg-green-800 px-4 rounded-full text-white" > Call < /button> <
        /div> <
        /form> <
        /div> <
        /div> <
        /div> <
        /section>
    );
};

export default PropertyDetails;