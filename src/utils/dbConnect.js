import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
            console.log('New database connection established')
            return mongoose
        }).catch((error) => {
            console.error('Database connection error:', error)
            return null // Return null if connection fails
        })
    }

    try {
        cached.conn = await cached.promise

        if (cached.conn) {
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
        } else {
            console.log('Database connection failed, running without database')
        }

        return cached.conn
    } catch (error) {
        console.error('Error ensuring collection and indexes:', error)
        return null // Return null if ensuring collection and indexes fails
    }
}

export default dbConnect