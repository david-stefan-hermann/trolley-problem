import { NextResponse } from 'next/server'
import Response from '../../../models/Response'
import dbConnect from '../../../utils/dbConnect'

export async function GET() {

  try {
    await dbConnect()
    const responses = await Response.find()

    if (responses.length === 0) {
      return NextResponse.json({ message: 'No responses found' }, { status: 404 })
    }

    return NextResponse.json(responses, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'Error: ' + err.message }, { status: 500 })
  }
}