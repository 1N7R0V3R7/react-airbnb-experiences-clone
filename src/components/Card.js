import React from "react";
import star from "../images/star.png";
export default function Card(props) {
    let availability;
    if(!props.item.openSpots) {
        availability = 'SOLD OUT'
    }
    else if(props.item.location === 'Online') {
        availability = 'ONLINE'
    }
    return (
        <div className="font-light text-xl relative flex-shrink-0">
            {
                availability && 
                <div className="absolute top-4 left-4 bg-white text-[#222222] px-2 py-1 rounded-md">
                    {availability}
                </div>
            }
            <img
                src={require(`../images/${props.item.coverImg}`)}
                alt="asdf"
                className="rounded-xl w-full h-96"
            />
            <div className="flex justify-start items-center text-[#918e9b] mt-2">
                <img src={star} alt="Star Icon" />
                <span className="">
                    {props.item.stats.rating} ({props.item.stats.reviewCount}) ·{" "}
                    {props.item.location}
                </span>
            </div>
            <p className="my-2">{props.item.title}</p>
            <div className="">
                <span className="font-bold">From ${props.item.price}</span> / person
            </div>
        </div>
    );
}
