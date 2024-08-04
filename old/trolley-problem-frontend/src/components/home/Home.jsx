import React, { useState } from 'react'
import Scenarios from '../scenarios/Scenarios'
import StartScreen from './StartScreen'

const Home = () => {
    const [readMessage, setReadMessage] = useState(false)

    return (
        <div className="flex flex-col">
            <main className="flex-grow flex flex-col items-center w-full">
                { readMessage ? <Scenarios /> : <StartScreen setReadMessage={setReadMessage} /> }
            </main>
        </div>
    )
}

export default Home
