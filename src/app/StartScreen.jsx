"use client"

import React from 'react'
import Buttons from '../components/Buttons'
import Button from '../components/Button'

const placeholderImage = '/ghost.jpg'
const splashImage = '/splash.jpeg'

const StartScreen = ({ setReadMessage }) => {

    return (
        <>
            <div className="font-semibold w-full max-w-3xl text-center mt-2 flex flex-col items-center">

                <img
                    src={splashImage}
                    alt="Initial State Illustration"
                    className="w-full mb-4 md:max-w-lg 2xl:max-w-none"
                    onError={(e) => e.target.src = placeholderImage} // Check if the image can be displayed
                />

                <p className="text-lg mb-4">
                    Du bist Programmierer:in eines autonomen Fahrzeugs. In Notfallsituationen
                    muss das Fahrzeug eine Entscheidung treffen, die Menschenleben kostet.
                    Wie soll das Fahrzeug entscheiden?
                </p>

                <Buttons>
                    {
                        <Button onClick={() => {
                            setReadMessage(true)
                        }}>
                            Los geht's
                        </Button>
                    }
                </Buttons>

            </div>
        </>
    )
}

export default StartScreen
