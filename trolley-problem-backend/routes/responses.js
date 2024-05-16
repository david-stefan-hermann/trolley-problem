import express from 'express'
import Response from '../models/Response.js'

const router = express.Router()

// Get all responses
router.get('/', async (req, res) => {
  try {
    const responses = await Response.find()
    res.json(responses)
  } catch (err) {
    res.status(400).json('Error: ' + err)
  }
})

// Add a new response
router.post('/add', async (req, res) => {
  const newResponse = new Response({
    scenarioId: req.body.scenarioId,
    votes: req.body.votes,
  })

  console.log('newResponse: ' + req.body.scenarioId + ": " + req.body.votes)

  try {
    const savedResponse = await newResponse.save()
    res.json(savedResponse)
  } catch (err) {
    res.status(400).json('Error: ' + err)
  }
})

export default router