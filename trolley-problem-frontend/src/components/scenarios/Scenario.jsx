import React, { useState } from 'react'

import Button from '../input_elements/button'

const Scenario = ({ scenario, onNextScenario }) => {
    const [outcome, setOutcome] = useState(null)

    const handleOptionClick = (index) => {
        setOutcome(scenario.outcomes[index])
    }

    return (
        <>
            <p className="text-2xl mb-8">{scenario.title}</p>
            <div className="font-semibold bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg">
                {outcome ? (
                    <>
                        {
                            outcome.image ? (
                                <img src={outcome.image} alt="Outcome Illustration" className="w-full mb-4 rounded" />
                            ) : null
                        }
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
                        <img src={scenario.initialImage} alt="Initial State Illustration" className="w-full mb-4 rounded" />
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
