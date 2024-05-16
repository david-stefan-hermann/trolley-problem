import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import responseRoutes from './routes/responses.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected')
  } catch (err) {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  }
}

connectDB()

// Routes
app.use('/api/responses', responseRoutes)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})