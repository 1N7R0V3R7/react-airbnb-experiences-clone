import React from 'react'
import HeroImage from '../images/photo-grid.png'
export default function Hero() {
    return <div className="layout px-12">
        <div className="mt-8">
            <img src={HeroImage} alt="Hero Image" className="w-[80%] h-auto mx-auto" />
        </div>
        <h1 className="font-bold text-5xl mt-12 lg:text-7xl">
            Online Experiences
        </h1>
        <div className="text-2xl tracking-widest font-light mt-8 w-[70%] lg:text-3xl">
            Join unique interactive led by one-of-a-kind hosts-all without leaving home.
        </div>
    </div>
}