import React from 'react'
import useSurveyVotes from '../../hooks/useSurveyVotes'


const DashItem = ({ scenarioID, scenario, response }) => {
  const totalVotes = response ? Object.values(response.votes).reduce((a, b) => a + b, 0) : 0
  const [votes] = useSurveyVotes()

  return (
    <div className="bg-white md:shadow-md md:rounded-lg md:p-4 my-2md:mt-0 md:mb-6 w-full">
      <p className="text-sm text-gray-500 text-right">{scenario.title}</p>
      <h2 className="text-xl font-bold mb-2">{scenario.shortDescription}</h2>
      <div className="">
        {scenario.outcomes.map((outcome, index) => {
          const voteCount = response ? response.votes[`option${index + 1}`] : 0
          const votePercentage = totalVotes ? (voteCount / totalVotes) * 100 : 0
          const userVotePercentage = votes[scenarioID] == index ? 100 / voteCount : 0
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
                >
                  <div
                    className="bg-[#F6AF3B] h-4 rounded-full"
                    style={{ width: `${userVotePercentage * 1}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DashItem
