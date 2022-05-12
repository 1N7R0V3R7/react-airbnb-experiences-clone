import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
export default function App() {

    const cards = data.map(item => {
        return <Card
            key={item.id}
            item={item}
        />
    })
    return (
        <div className="font-poppins">
            <Navbar />
            <Hero />
            <section className="layout flex justify-start items-center gap-8 mt-24 px-12 mx-auto pb-12 overflow-x-auto flex-nowrap">
                {cards}
            </section>
        </div>
    )
}