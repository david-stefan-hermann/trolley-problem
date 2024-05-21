import React, { useState } from 'react'
import Scenarios from '../scenarios/Scenarios'
import Startscreen from './Startscreen'

const Home = () => {
    const [readMessage, setReadMessage] = useState(false)

    return (
        <div className="flex flex-col">
            <main className="flex-grow flex flex-col items-center w-full">
                { readMessage ? <Scenarios /> : <Startscreen setReadMessage={setReadMessage} /> }
            </main>
        </div>
    )
}

export default Home
