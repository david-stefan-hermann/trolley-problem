import { NextResponse } from 'next/server'
import Response from '../../../models/Response'
import dbConnect from '../../../utils/dbConnect'

export const runtime = process.env.NODE_ENV === 'development' ? 'node' : 'edge'

export async function POST(req) {
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Method not allowed' }, { status: 405 })
    }

    try {
        await dbConnect()
        const body = await req.json()
        let response = await Response.findOne({ scenarioID: body.scenarioID })

        if (!response) {
            response = new Response({
                scenarioID: body.scenarioID,
                votes: {
                    option1: 0,
                    option2: 0,
                },
            })
        }

        if (body.option === 0) {
            response.votes.option1 += 1
        } else if (body.option === 1) {
            response.votes.option2 += 1
        } else {
            return NextResponse.json({ message: 'Error: Invalid option' }, { status: 400 })
        }

        const updatedResponse = await response.save()
        return NextResponse.json(updatedResponse)
    } catch (err) {
        return NextResponse.json({ message: 'Error: ' + err.message }, { status: 500 })
    }
}