import React, { useState, useRef, useEffect } from 'react'
import CircleSegments from './CircleSegments'
import Buttons from '../input_elements/Buttons'
import Button from '../input_elements/Button'

import segments, { message } from './fortune_wheel_data'

import IconArrowUp from '../../assets/icons/icon-arrow-up.png'
import Icon from '/icon-512.png'

import confetti from 'canvas-confetti'

import confettiSound from '../../assets/sounds/firecracker.mp3'
import spinningSound from '../../assets/sounds/bike-wheel.mp3'
import AudioPlayer from '../helpers/AudioPlayer'

function FortuneWheel() {
    const [wheelSpinning, setWheelSpinning] = React.useState(false)
    const [degree, setDegree] = useState(0)
    const [winningSegment, setWinningSegment] = useState('') // The segment that the wheel stops at
    const [spinningSoundControl, setSpinningSoundControl] = useState('stop')
    const [confettiSoundControl, setConfettiSoundControl] = useState('stop')
    const canvasRef = useRef(null) // Ref for the confetti canvas


    const spinWheel = () => {
        setWheelSpinning(true)

        const additionalDegrees = Math.floor(5000 + Math.random() * 5000) // at least 5000 to 10000 degrees
        const newDegree = degree + additionalDegrees // Add to current degree for continuous rotation

        setDegree(newDegree)

        setConfettiSoundControl('stop')
        setSpinningSoundControl('play')

        setTimeout(() => {
            setWheelSpinning(false)

            const normalizedDegree = newDegree % 360
            setDegree(normalizedDegree)
            calculateWinner(normalizedDegree)

            launchConfetti() // Trigger confetti on stop            

            setSpinningSoundControl('stop')
            setConfettiSoundControl('play')
        }, 3000)
    }

    const calculateWinner = (normalizedDegree) => {
        const degreesPerSegment = 360 / segments.length
        const winningIndex = Math.floor((360 - normalizedDegree + 90) / degreesPerSegment) % segments.length
        setWinningSegment(segments[winningIndex].text)
    }

    const launchConfetti = () => {
        // Makes it look like it's coming from the bottom
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.7 }
        })
        // launch a few confetti from the left edge
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        })
        // and launch a few from the right edge
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        })
    }

    return (
        <div className="w-full flex flex-col text-center items-center">
            <canvas ref={canvasRef} className='hidden'></canvas> {/* Setup canvas for confetti */}

            <div className='w-full flex-col flex items-center mt-4 overflow-hidden relative'>
                <div className='w-full flex flex-col items-center' style={{ transform: `rotate(${degree}deg)`, transition: wheelSpinning ? 'transform 3s ease-out' : 'none' }}>
                    <CircleSegments segments={segments} />
                </div>
                <div className='w-full h-auto flex flex-col items-center bg-red-500 opacity-50 absolute top-0 right-0 bottom-0 left-0'>
                    <img
                        src={Icon}
                        alt="Outcome Illustration"
                        className="h-10"
                        onError={(e) => e.target.src = <p>^</p>} // Check if the image can be displayed
                    />
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

            {(winningSegment && !wheelSpinning) && <p className='font-semibold text-lg mb-4'>{message.start + winningSegment}</p>}

            {!wheelSpinning ?
                <>
                    <Buttons>
                        {
                            <Button onClick={() => {
                                spinWheel()
                            }}>
                                Dreh am Rad
                            </Button>
                        }
                    </Buttons>
                </>
                : null
            }

            <AudioPlayer src={spinningSound} control={spinningSoundControl} volume={0.3} />
            <AudioPlayer src={confettiSound} control={confettiSoundControl} volume={0.1} />
        </div>
    )
}

export default FortuneWheel
