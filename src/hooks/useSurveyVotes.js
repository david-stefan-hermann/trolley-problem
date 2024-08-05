import { useState, useEffect } from 'react'

function useSurveyVotes(initialVotes = []) {
  const [votes, setVotes] = useState(() => {
    const savedVotes = localStorage.getItem('surveyVotes')
    return savedVotes ? JSON.parse(savedVotes) : initialVotes
  })

  // Function to update the vote for a specific survey
  const castVote = (surveyIndex, option) => {
    setVotes(prevVotes => {
      const newVotes = [...prevVotes]

      // Ensure the array is large enough
      if (surveyIndex >= newVotes.length) {
        newVotes.length = surveyIndex + 1 // Increase the length of the array
        newVotes.fill(null, prevVotes.length, surveyIndex) // Fill new indexes with null
      }

      newVotes[surveyIndex] = option
      return newVotes
    })
    console.log('local votes: ' + votes)
  }

  // Function to clear all votes
  const clearVotes = () => {
    setVotes([])
    localStorage.removeItem('surveyVotes')  // Also clear from local storage
  }

  // Use useEffect to update local storage whenever the votes state changes
  useEffect(() => {
    localStorage.setItem('surveyVotes', JSON.stringify(votes))

    const timeoutId = setTimeout(() => {
      console.log('Clearing votes after timeout')
      clearVotes()
    }, 300000) // Clear votes after 5 minutes

    window.onbeforeunload = () => {
      console.log('Clearing votes before unloading')
      clearVotes()
    }

    return () => {
      clearTimeout(timeoutId)
      window.onbeforeunload = null
    }
  }, [votes])

  return [votes, castVote, clearVotes]
}

export default useSurveyVotes