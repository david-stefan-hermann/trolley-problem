import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <header className="w-full max-w-3xl text-center">
                <h1 className="text-4xl font-bold mb-2">Das Trolley Problem für autonomes Fahren</h1>
                <h2 className="text-2xl mb-8">von Karo, Philipp und David</h2>
            </header>
            <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg">
                <p className="text-lg mb-4">
                    Imagine you are the driver of a trolley. The trolley is headed towards five people tied up on the tracks.
                    You can pull a lever to switch tracks, but doing so will result in the trolley hitting one person on the other track.
                </p>
                <div className="flex justify-around mt-6">
                    <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">Pull the Lever</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Do Nothing</button>
                </div>
            </div>
        </div>
    )
}

export default Home
