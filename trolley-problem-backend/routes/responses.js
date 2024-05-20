import express from 'express'
import Response from '../models/Response.js'
import fs from 'fs'

const router = express.Router()

// Get all responses
router.get('/', async (req, res) => {
  try {
    const responses = await Response.find()
    if (responses.length === 0) {
      return res.status(404).json('Error: No responses found')
    }
    res.json(responses)
  } catch (err) {
    res.status(500).json('Error: ' + err)
  }
})

// Vote for a response
router.post('/vote', async (req, res) => {
  try {
    let response = await Response.findOne({ scenarioID: req.body.scenarioID })

    if (!response) {
      response = new Response({
        scenarioID: req.body.scenarioID,
        votes: {
          option1: 0,
          option2: 0
        }
      })
    }

    if (req.body.option === 0) {
      response.votes.option1 += 1
    } else if (req.body.option === 1) {
      response.votes.option2 += 1
    } else {
      return res.status(400).json('Error: Invalid option')
    }

    const updatedResponse = await response.save()
    res.json(updatedResponse)
  } catch (err) {
    res.status(500).json('Error: ' + err)
  }
})

// Reset votes for all responses
router.post('/reset-votes', async (req, res) => {
  const deletePassword = getDeletePassword()

  const { password } = req.body

  if (password === undefined || password ==="" || !password) {
    return res.status(400).json('Error: Missing password')
  }

  if (password !== deletePassword) {
    return res.status(401).json('Unauthorized')
  }

  try {
    const responses = await Response.find()

    for (let response of responses) {
      response.votes.option1 = 0
      response.votes.option2 = 0
      await response.save()
    }

    res.json('All votes have been reset')
  } catch (err) {
    res.status(500).json('Error: ' + err)
  }
})

// Read Docker secret or fall back to environment variable
const getDeletePassword = () => {
  // set with: echo "password" | docker secret create delete_password -
  try {
    return fs.readFileSync('/run/secrets/delete_password', 'utf-8').trim()
  } catch (err) {
    return process.env.DELETE_PASSWORD
  }
}

export default router