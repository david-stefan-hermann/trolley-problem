import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DashItem from './DashItem'
import scenarios from '../scenarios/scenarios_data'
import QrDisplay from './QrDisplay'
import { FaQrcode } from "react-icons/fa"
import { GiEasterEgg } from "react-icons/gi"
import useDeleteVotes from '../../hooks/useDeleteVotes'
import useFetchVotes from '../../hooks/useFetchVotes'

const DashBoard = () => {
  const responses = useFetchVotes()
  const [displayQr, setDisplayQr] = useState(false)
  const [deleteVotes, isLoading, error] = useDeleteVotes()

  const navigate = useNavigate()

  const handleDeleteVotes = async () => {
    try {
      await deleteVotes()
    } catch (error) {
      console.error('Error deleting votes:', error)
    }
  }

  const handleSpinClick = () => {
    navigate('/spin')
  }

  return (
    <>
      {displayQr &&
        <p>
          <QrDisplay hideQrCode={() => setDisplayQr(false)} />
        </p>}
      <>
        <div className="flex w-full h-2 border-b border-black"></div>
        <div className="p-4 max-w-6xl">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold md:text-3xl">Auswertung</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={handleSpinClick}
                className="bg-gray-500 hover:bg-gray-600 text-white h-8 px-2 rounded"
              >
                <span>
                  <GiEasterEgg />
                </span>
              </button>
              <button
                onClick={() => setDisplayQr(true)}
                className="bg-gray-500 hover:bg-gray-600 text-white h-8 px-2 rounded"
              >
                <span>
                  <FaQrcode />
                </span>
              </button>
              <button
                onClick={handleDeleteVotes}
                disabled={isLoading}
                className={`${isLoading ? "bg-gray-500" : "bg-red-500 hover:bg-red-600"} text-white h-8 px-2 align-items-center rounded`}
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
              return <DashItem key={idx} scenarioID={idx} scenario={scenario} response={response} />
            })}
          </div>
        </div>
      </>
    </>
  )
}

export default DashBoard
