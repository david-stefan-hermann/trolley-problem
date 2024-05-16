import React from 'react'

const DashItem = ({ scenario, response }) => {
  const totalVotes = response ? Object.values(response.votes).reduce((a, b) => a + b, 0) : 0

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 w-full">
      <h2 className="text-xl font-bold mb-2">{scenario.question}</h2>
      <div className="ml-4">
        {scenario.outcomes.map((outcome, index) => {
          const voteCount = response ? response.votes[`option${index + 1}`] : 0
          const votePercentage = totalVotes ? (voteCount / totalVotes) * 100 : 0
          return (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <span className="font-semibold">{outcome.option}</span>
                <span>{voteCount} Stimmen ({votePercentage.toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${votePercentage}%` }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DashItem
