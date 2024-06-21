import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import responseRoutes from './routes/responses.js'
import dotenv from 'dotenv'


const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

const app = express()
const port = process.env.PORT || 5000
const mongoUri = process.env.MONGO_URI

if (!mongoUri) {
  console.error('MONGO_URI is not defined')
  process.exit(1)
}

// Middleware
const corsOptions = {
  origin: [
    'https://cm.avernus.cloud',
    'https://api-cm.avernus.cloud',
    'http://10.69.69.232'
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
  allowedHeaders: 'Content-Type,Authorization'
}

app.use(cors(corsOptions))

// Explicitly handle preflight requests
app.options('*', cors(corsOptions))

app.use(express.json())

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri)
    const connectionState = mongoose.connection.readyState
    if (connectionState === 1) {
      console.log('MongoDB connected successfully')
    } else {
      console.log('MongoDB connection unsuccessful, current state: ', connectionState)
    }
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