import { useState, useEffect } from 'react'
import config from '../../config'

const useFetchVotes = () => {
    const [responses, setResponses] = useState([])

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
        const interval = setInterval(fetchData, 3000)
        return () => clearInterval(interval)
    }, [])

    return responses
}

export default useFetchVotes