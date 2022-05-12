import React from 'react'
import AirbnbLogo from '../images/airbnb-logo.png'
export default function Navbar() {
    return <nav className="shadow-lg px-12 py-8">
        <div className="layout">
            <img src={AirbnbLogo} alt="Airbnb Logo" className="h-12" />
        </div>
    </nav>
}