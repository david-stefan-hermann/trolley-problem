import React, { useState } from 'react'
import CircleSegments from './CircleSegments'
import Buttons from '../input_elements/Buttons'
import Button from '../input_elements/Button'
import segments from './fortune_wheel_data'

function FortuneWheel() {
    const [wheelSpinning, setWheelSpinning] = React.useState(false)
    const [degree, setDegree] = useState(0)
    const [winningSegment, setWinningSegment] = useState('') // The segment that the wheel stops at

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
        }, 3000)
    }

    const calculateWinner = (normalizedDegree) => {
        const degreesPerSegment = 360 / segments.length
        const winningIndex = Math.floor((360 - normalizedDegree) / degreesPerSegment) % segments.length
        setWinningSegment(segments[winningIndex].label)
    }

    return (
        <div className="w-full flex flex-col text-center items-center">
            <div className='w-full flex-col flex items-center py-4 overflow-hidden'>
                <div className='w-full flex flex-col items-center' style={{ transform: `rotate(${degree}deg)`, transition: wheelSpinning ? 'transform 3s ease-out' : 'none' }}>
                    <CircleSegments segments={segments} />
                </div>
            </div>
            {winningSegment && <p className='font-semibold text-lg mb-4'>{winningSegment}</p>}
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
