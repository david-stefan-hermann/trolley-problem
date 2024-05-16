import mongoose from 'mongoose'

const responseSchema = new mongoose.Schema({
  scenarioID: { type: Number, required: true },
  votes: {
    option1: { type: Number, required: true },
    option2: { type: Number, required: true }
  }
})

export default mongoose.model('Response', responseSchema)