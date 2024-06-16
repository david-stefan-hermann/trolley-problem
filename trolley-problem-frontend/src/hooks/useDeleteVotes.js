import { useState } from 'react'

const useDeleteVotes = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const deleteVotes = async () => {
    setIsLoading(true)
    setError(null)
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
        const errorData = await response.json()
        throw new Error(`HTTP error! status: ${response.status} - ${errorData.message || JSON.stringify(errorData)}`)
      }
    } catch (error) {
      setError(error.message || error)
    } finally {
      setIsLoading(false)
    }
  }

  return [deleteVotes, isLoading, error]
}

export default useDeleteVotes