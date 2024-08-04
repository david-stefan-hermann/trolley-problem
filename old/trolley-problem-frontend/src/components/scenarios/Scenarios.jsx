import React, { useState } from 'react'
import scenarios from './scenarios_data'
import Scenario from './Scenario'
import { Navigate } from 'react-router-dom'

const Scenarios = () => {
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
    const [isDone, setIsDone] = useState(false)

    const handleNextScenario = () => {
        if (currentScenarioIndex < scenarios.length - 1) {
            setCurrentScenarioIndex(currentScenarioIndex + 1)
        } else {
            setCurrentScenarioIndex(0)
            setIsDone(true)
        }
    }

    const currentScenario = scenarios[currentScenarioIndex]
    
    if (isDone) {
        return <Navigate to="/dashboard" />
    }

    return (
        <Scenario scenario={currentScenario} scenarioID={currentScenarioIndex} onNextScenario={handleNextScenario} />
    )
}

export default Scenarios
