"use client"

import React, { useState } from 'react'
import Scenarios from './Scenarios'
import StartScreen from './StartScreen'

export default function Page() {
    const [readMessage, setReadMessage] = useState(false)

    return (
        <div className="flex flex-col">
            <main className="flex-grow flex flex-col items-center w-full">
                { readMessage ? <Scenarios /> : <StartScreen setReadMessage={setReadMessage} /> }
            </main>
        </div>
    )
}