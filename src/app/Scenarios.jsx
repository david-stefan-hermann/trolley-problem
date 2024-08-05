import React, { useState } from 'react'
import scenarios from './scenarios_data'
import Scenario from './Scenario'

import { useRouter } from 'next/navigation'

const Scenarios = () => {
    const router = useRouter()

    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)

    const handleNextScenario = () => {
        if (currentScenarioIndex < scenarios.length - 1) {
            setCurrentScenarioIndex(currentScenarioIndex + 1)

        }
    }

    const handleLastScenario = () => {
        router.push('/dashboard')
    }

    const currentScenario = scenarios[currentScenarioIndex]

    return (
        <Scenario
            scenario={currentScenario}
            scenarioID={currentScenarioIndex}
            onNextScenario={
                currentScenarioIndex < scenarios.length - 1 ? handleNextScenario : handleLastScenario
            }
        />
    )
}


export default Scenarios
