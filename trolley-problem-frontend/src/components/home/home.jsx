import React from 'react'
import Scenarios from '../scenarios/Scenarios'

const Home = () => {
    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <header className="w-full max-w-3xl text-center">
                <h1 className="text-4xl font-bold mb-2">Das Trolley Problem für autonomes Fahren</h1>
                <h2 className="text-2xl mb-8">von Karo, Philipp und David</h2>
            </header>
            <Scenarios />
        </div>
    )
}

export default Home
