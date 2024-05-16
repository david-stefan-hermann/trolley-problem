import React, { useState, useEffect } from 'react'
import DashItem from './DashItem'
import scenarios from '../scenarios/scenarios_data'
import config from '../../../config'

const Dashboard = () => {
  const [responses, setResponses] = useState([])
  const [autoUpdate, setAutoUpdate] = useState(true)
  const [password, setPassword] = useState('')

  const fetchData = async () => {
    try {
      const response = await fetch(`${config.API_URL}/responses`)
      const data = await response.json()
      setResponses(data)
    } catch (error) {
      setResponses([])
      console.error('Error fetching responses:', error)
    }
  }

  useEffect(() => {
    fetchData()
    if (autoUpdate) {
      const interval = setInterval(fetchData, 3000)
      return () => clearInterval(interval)
    }
  }, [autoUpdate])

  const handleDeleteVotes = async () => {
    const userPassword = prompt('Please enter the password to delete all votes:')
    if (userPassword === password) {
      try {
        await fetch(`${config.API_URL}/responses/delete`, { method: 'DELETE' })
        alert('All votes have been deleted.')
        fetchData() // Refresh the data
      } catch (error) {
        console.error('Error deleting votes:', error)
      }
    } else {
      alert('Incorrect password. Deletion aborted.')
    }
  }

  return (
    <div className="p-4 max-w-6xl">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center">
          <label className="flex items-center mr-4">
            <input
              type="checkbox"
              checked={autoUpdate}
              onChange={() => setAutoUpdate(!autoUpdate)}
              className="toggle-checkbox"
            />
            <span className="ml-2">Auto Update</span>
          </label>
          <button
            onClick={handleDeleteVotes}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Delete All Votes
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scenarios.map((scenario, idx) => {
          let response = null
          try {
            response = responses.find((res) => res.scenarioID === idx)
          } catch (error) {
            console.error('This Index does not exist in Database.')
          }
          return <DashItem key={idx} scenario={scenario} response={response} />
        })}
      </div>
    </div>
  )
}

export default Dashboard
