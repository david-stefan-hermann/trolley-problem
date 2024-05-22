import React, { useState, useRef } from 'react'
import CircleSegments from './CircleSegments'
import Buttons from '../input_elements/Buttons'
import Button from '../input_elements/Button'
import segments from './fortune_wheel_data'
import IconArrowUp from '../../assets/icons/icon-arrow-up.png'
import confetti from 'canvas-confetti'


function FortuneWheel() {
    const [wheelSpinning, setWheelSpinning] = React.useState(false)
    const [degree, setDegree] = useState(0)
    const [winningSegment, setWinningSegment] = useState('') // The segment that the wheel stops at
    const canvasRef = useRef(null) // Ref for the confetti canvas

    const spinWheel = () => {
        setWheelSpinning(true)

        const additionalDegrees = Math.floor(5000 + Math.random() * 5000) // at least 5000 to 10000 degrees
        const newDegree = degree + additionalDegrees // Add to current degree for continuous rotation

        setDegree(newDegree)

        setTimeout(() => {
            setWheelSpinning(false)
            const normalizedDegree = newDegree % 360
            setDegree(normalizedDegree)
            calculateWinner(normalizedDegree)
            launchConfetti() // Trigger confetti on stop

        }, 3000)
    }

    const calculateWinner = (normalizedDegree) => {
        const degreesPerSegment = 360 / segments.length
        const winningIndex = Math.floor((360 - normalizedDegree + 90) / degreesPerSegment) % segments.length
        setWinningSegment(segments[winningIndex].text)
    }

    const launchConfetti = () => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 } // Makes it look like it's coming from the bottom
        })
    }

    return (
        <div className="w-full flex flex-col text-center items-center">
            <canvas ref={canvasRef} className='fixed w-full h-full'></canvas> {/* Setup canvas for confetti */}
            <div className='w-full flex-col flex items-center pt-4 overflow-hidden'>
                <div className='w-full flex flex-col items-center' style={{ transform: `rotate(${degree}deg)`, transition: wheelSpinning ? 'transform 3s ease-out' : 'none' }}>
                    <CircleSegments segments={segments} />
                </div>
            </div>

            <div className='w-full flex flex-col items-center pb-4 -mt-5 z-10'>
                <img
                    src={IconArrowUp}
                    alt="Outcome Illustration"
                    className="h-10"
                    onError={(e) => e.target.src = <p>^</p>} // Check if the image can be displayed
                />
            </div>

            {(winningSegment && !wheelSpinning) && <p className='font-semibold text-lg mb-4'>{winningSegment}</p>}

            {!wheelSpinning ?
                <Buttons>
                    {
                        <Button onClick={() => {
                            spinWheel()
                        }}>
                            Dreh am Rad
                        </Button>
                    }
                </Buttons>
                : <p className='h-4 justify-center fixed px-4 py-0 w-full left-0 space-x-0 bottom-8 md:bottom-0 md:relative'>drehen...</p>
            }
        </div>
    )
}

export default FortuneWheel
