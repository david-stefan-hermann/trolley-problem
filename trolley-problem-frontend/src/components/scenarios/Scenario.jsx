import React, { useState } from 'react'

const Scenario = ({ scenario, onNextScenario }) => {
    const [outcome, setOutcome] = useState(null)

    const handleOptionClick = (index) => {
        setOutcome(scenario.outcomes[index])
    }

    return (
        <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg">
            {outcome ? (
                <>
                    <img src={outcome.image} alt="Outcome Illustration" className="w-full mb-4 rounded" />
                    <p className="text-lg mb-4">{outcome.description}</p>
                    <button
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
                        onClick={() => {
                            setOutcome(null) // Reset outcome state here
                            onNextScenario()
                        }}
                    >
                        Next Scenario
                    </button>
                </>
            ) : (
                <>
                    <img src={scenario.initialImage} alt="Initial State Illustration" className="w-full mb-4 rounded" />
                    <p className="text-lg mb-4">{scenario.question}</p>
                    <div className="flex justify-around mt-6">
                        {scenario.outcomes.map((outcome, index) => (
                            <button
                                key={index}
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                                onClick={() => handleOptionClick(index)}
                            >
                                {outcome.option}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Scenario
