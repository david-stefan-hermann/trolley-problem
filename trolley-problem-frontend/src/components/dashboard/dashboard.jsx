import React, { useState, useEffect } from 'react'
import DashItem from './DashItem'
import scenarios from '../scenarios/scenarios_data'
import config from '../../../config'

const Dashboard = () => {
  const [responses, setResponses] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.API_URL}/responses`)
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
      <p>{`${config?.API_URL}`}</p>
      {scenarios.map((scenario) => {
        const response = responses.find((res) => res.scenarioId === scenario.id)
        return <DashItem key={scenario.id} scenario={scenario} response={response} />
      })}
    </div>
  )
}

export default Dashboard
