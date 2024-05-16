import React from 'react'

const DashItem = ({ scenarioID, scenario, response }) => {
    return (
        <div key={scenarioID} className="mb-6">
            <h2 className="text-xl mb-2">{scenario.question}</h2>
            <div className="ml-4">
                {scenario.outcomes.map((outcome, index) => {
                    const voteCount = response ? response.votes[`option${index + 1}`] : 0
                    return (
                        <div key={index} className="mb-1">
                            <span className="font-semibold">{outcome.option}: </span>
                            <span>{voteCount} Stimmen</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DashItem
