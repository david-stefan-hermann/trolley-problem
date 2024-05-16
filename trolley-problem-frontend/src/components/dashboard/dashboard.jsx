import React, { useState, useEffect } from 'react'
import scenarios from '../scenarios/scenarios_data'

const Dashboard = () => {
  const [responses, setResponses] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/responses')
        const data = await response.json()
        setResponses(data)
      } catch (error) {
        console.error('Error fetching responses:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {scenarios?.map(scenario => {

        const response = responses?.find(res => res.scenarioId === scenario.id)
        return (

          <div key={scenario?.id} className="mb-6">
            <h2 className="text-xl mb-2">{scenario?.question}</h2>

            <div className="ml-4">
              {scenario?.outcomes?.map((outcome, index) => {

                const voteCount = response ? response.votes[`outcome${index + 1}`] : 0
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


      })}
    </div>
  )
}

export default Dashboard
