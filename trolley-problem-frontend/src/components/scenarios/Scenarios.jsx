import React, { useState } from 'react'
import scenarios from './scenarios_data'
import Scenario from './Scenario'

const Scenarios = () => {
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)

    const handleNextScenario = () => {
        if (currentScenarioIndex < scenarios.length - 1) {
            setCurrentScenarioIndex(currentScenarioIndex + 1)
        } else {
            alert("You've completed all scenarios!")
        }
    }

    const currentScenario = scenarios[currentScenarioIndex]

    return (
        <Scenario scenario={currentScenario} onNextScenario={handleNextScenario} />
    )
}

export default Scenarios
