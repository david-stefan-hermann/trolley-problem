import React, { useState } from 'react'
import Button from '../input_elements/Button'
import Buttons from '../input_elements/Buttons'
import placeholderImage from '../../assets/ghost.jpg'
import config from '../../../config'
import useSurveyVotes from '../../hooks/useSurveyVotes'


const Scenario = ({ scenario, scenarioID, onNextScenario }) => {
    const [outcome, setOutcome] = useState(null)
    const [votes, castVote, clearVotes] = useSurveyVotes()

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

        // Clear votes if the scenario is the first one
        scenarioID == 0 && clearVotes()
        castVote(scenarioID, option)
    }

    return (
        <>
            <h1 className="text-2xl md:text-2xl mb-8">{scenario.title}</h1>
            <div className="font-semibold w-full max-w-3xl text-center flex flex-col items-center">
                {outcome ? (
                    <>
                        <img
                            src={outcome.image}
                            alt="Outcome Illustration"
                            className="w-full mb-4 md:max-w-lg 2xl:max-w-none"
                            onError={(e) => e.target.src = placeholderImage} // Check if the image can be displayed
                        />
                        <p className="text-lg mb-4">{outcome.description}</p>

                        <Buttons>
                            {
                                <Button onClick={() => {
                                    setOutcome(null)
                                    onNextScenario()
                                }}>
                                    Nächstes Szenario
                                </Button>
                            }
                        </Buttons>
                    </>
                ) : (
                    <>
                        <img
                            src={scenario.initialImage}
                            alt="Initial State Illustration"
                            className="w-full mb-4 md:max-w-lg 2xl:max-w-none"
                            onError={(e) => e.target.src = placeholderImage} // Check if the image can be displayed
                        />
                        <p className="text-lg mb-4">{scenario.question}</p>
                        
                        <Buttons>
                            {scenario.outcomes.map((outcome, index) => (
                                <Button key={index} onClick={() => handleOptionClick(index)}>
                                    {outcome.option}
                                </Button>
                            ))}
                        </Buttons>
                    </>
                )}
            </div>
        </>
    )
}

export default Scenario
