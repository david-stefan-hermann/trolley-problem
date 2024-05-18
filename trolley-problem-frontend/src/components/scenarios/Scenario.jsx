import React, { useState } from 'react'
import Button from '../input_elements/Button'
import placeholderImage from '../../assets/ghost.jpg'
import config from '../../../config'

const Scenario = ({ scenario, scenarioID, onNextScenario }) => {
    const [outcome, setOutcome] = useState(null)

    const handleOptionClick = (index) => {
        setOutcome(scenario.outcomes[index])
        handleVote(index)
    }

    const handleVote = async (option) => {
        console.log('Voting for scenario', scenarioID, 'with option', option, 'on endpoint', `${config.API_URL}/responses/vote`)
        try {
            const response = await fetch(`${config.API_URL}/responses/vote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ scenarioID, option }),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            console.log(data) // Do something with the data
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <>
            <h1 className="text-2xl md:text-2xl mb-8">{scenario.title}</h1>
            <div className="font-semibold w-full max-w-3xl text-center">
                {outcome ? (
                    <>
                        <img
                            src={outcome.image}
                            alt="Outcome Illustration"
                            className="w-full mb-4"
                            onError={(e) => e.target.src = placeholderImage} // Check if the image can be displayed
                        />
                        <p className="text-lg mb-4">{outcome.description}</p>
                        <div className="flex justify-center mt-6 space-x-4 fixed bottom-0 left-0 w-full bg-white py-4 space-x-0 static mt-0 md:relative">

                            <Button onClick={() => {
                                setOutcome(null)
                                onNextScenario()
                            }}>
                                Nächstes Szenario
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <img
                            src={scenario.initialImage}
                            alt="Initial State Illustration"
                            className="w-full mb-4 rounded"
                            onError={(e) => e.target.src = placeholderImage} // Check if the image can be displayed
                        />
                        <p className="text-lg mb-4">{scenario.question}</p>
                        <div className="flex gap-2 justify-center fixed bottom-0 bg-white px-4 py-4 w-full left-0 space-x-0 md:relative">
                            {scenario.outcomes.map((outcome, index) => (
                                <Button key={index} onClick={() => handleOptionClick(index)}>
                                    {outcome.option}
                                </Button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Scenario
