import React, { useState } from 'react'
import Button from '../input_elements/button'
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

        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <>
            <p className="text-2xl mb-8">{scenario.title}</p>
            <div className="font-semibold bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg">
                {outcome ? (
                    <>
                        <img
                            src={outcome.image}
                            alt="Outcome Illustration"
                            className="w-full mb-4 rounded"
                            onError={(e) => e.target.src = placeholderImage} // Check if the image can be displayed
                        />
                        <p className="text-lg mb-4">{outcome.description}</p>
                        <Button onClick={() => {
                            setOutcome(null)
                            onNextScenario()
                        }}>
                            Nächstes Szenario
                        </Button>
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
                        <div className="flex justify-center mt-6 space-x-4">
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
