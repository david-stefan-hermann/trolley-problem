import React, { useState } from 'react'
import scenarios from './scenarios_data'
import Scenario from './Scenario'

import { useRouter } from 'next/navigation'

const Scenarios = () => {
    const router = useRouter()

    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
    const [isDone, setIsDone] = useState(false)

    const handleNextScenario = () => {
        if (currentScenarioIndex < scenarios.length - 1) {
            setCurrentScenarioIndex(currentScenarioIndex + 1)
        } else {
            setCurrentScenarioIndex(0)
            router.push('/dashboard')
        }
    }

    const currentScenario = scenarios[currentScenarioIndex]

    return (
        <Scenario scenario={currentScenario} scenarioID={currentScenarioIndex} onNextScenario={handleNextScenario} />
    )
}

export default Scenarios
