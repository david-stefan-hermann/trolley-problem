import React, { useState, useEffect } from 'react'
import DashItem from './DashItem'
import scenarios from '../scenarios/scenarios_data'
import config from '../../../config'
import QrDisplay from './QrDisplay'
import { FaQrcode } from "react-icons/fa"

const DashBoard = () => {
  const [responses, setResponses] = useState([])
  const [autoUpdate, setAutoUpdate] = useState(true)
  const [displayQr, setDisplayQr] = useState(false)

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

    try {
      const response = await fetch(`${config.API_URL}/responses/reset-votes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: userPassword })
      })

      if (!response.ok) {
        // If the response is not OK, try to parse the error message
        const errorData = await response.json()
        throw new Error(`HTTP error! status: ${response.status} - ${errorData.message || JSON.stringify(errorData)}`)
      }
    } catch (error) {
      console.error('Error:', error.message || error)
    }
  }


  return (
    <>
      {displayQr ? (
        <p>
          <QrDisplay hideQrCode={() => setDisplayQr(false)} />
        </p>

      ) : (
        <>
          <div className="flex w-full h-2 border-b border-black"></div>
          <div className="p-4 max-w-6xl">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold md:text-3xl">Auswertung</h1>
              <div className="flex items-center">
                <button
                  onClick={() => setDisplayQr(true)}
                  className="bg-gray-500 hover:bg-gray-600 text-white h-8 px-4 mr-3 rounded"
                >
                  <span>
                    <FaQrcode />
                  </span>
                </button>
                <button
                  onClick={handleDeleteVotes}
                  className="bg-red-500 hover:bg-red-600 text-white h-8 px-4 align-items-center rounded"
                >
                  Reset
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
        </>
      )}
    </>
  )
}

export default DashBoard
