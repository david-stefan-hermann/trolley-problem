import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        console.log('Using existing database connection')
        return cached.conn
    }

    if (!cached.promise) {

        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
            console.log('New database connection established')
            return mongoose
        }).catch((error) => {
            console.error('Database connection error:', error)
            throw error
        })
    }

    try {
        cached.conn = await cached.promise

        // Ensure the collection and indexes are created
        const responseSchema = new mongoose.Schema({
            votes: {
                option1: { type: Number, default: 0 },
                option2: { type: Number, default: 0 },
            },
        })

        const Response = mongoose.models.Response || mongoose.model('Response', responseSchema)
        await Response.init() // Ensure indexes are created

        console.log('Database connected and collection ensured')
        return cached.conn
    } catch (error) {
        console.error('Error ensuring collection and indexes:', error)
        throw error
    }
}

export default dbConnect