import { NextResponse } from 'next/server'
import Response from '../../../models/Response'
import dbConnect from '../../../utils/dbConnect'

export const runtime = process.env.NODE_ENV === 'development' ? 'node' : 'edge'

export async function POST(req) {
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Method not allowed' }, { status: 405 })
    }

    const deletePassword = process.env.DELETE_PASSWORD || ""
    const body = await req.json()
    const { password } = body

    if (!password) {
        return NextResponse.json({ message: 'Error: Missing password' }, { status: 400 })
    }

    if (password !== deletePassword) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    try {
        await dbConnect()
        const responses = await Response.find()

        for (let response of responses) {
            response.votes.option1 = 0
            response.votes.option2 = 0
            await response.save()
        }

        return NextResponse.json({ message: 'All votes have been reset' }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: 'Error: ' + err.message }, { status: 500 })
    }
}