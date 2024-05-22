import React from 'react'
import placeholderImage from '../../assets/ghost.jpg'
import splashImage from '../../assets/splash.jpeg'
import Buttons from '../input_elements/Buttons'
import Button from '../input_elements/Button'
import Footer from '../Footer'

const StartScreen = ({setReadMessage}) => {

    return (
        <>
            <div className="font-semibold w-full max-w-3xl text-center mt-2">

                <img
                    src={splashImage}
                    alt="Initial State Illustration"
                    className="w-full mb-4 rounded"
                    onError={(e) => e.target.src = placeholderImage} // Check if the image can be displayed
                />
                <p className="text-lg mb-4">
                    Du erlebst als Passagier in einem autonomen Fahrzeug
                    eine unerwartete Notfallsituation. Du musst schnell entscheiden, wer in
                    einem unvermeidbaren Unfall betroffen sein wird.
                </p>

                <div className="md:hidden">
                    <Footer />
                </div>

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
