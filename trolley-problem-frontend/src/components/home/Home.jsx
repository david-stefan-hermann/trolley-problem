import React from 'react'
import Scenarios from '../scenarios/Scenarios'

const Home = () => {
    return (
        <div className="flex flex-col p-4">
            <main className="flex-grow flex flex-col items-center w-full">
                <Scenarios />
            </main>
        </div>
    )
}

export default Home
