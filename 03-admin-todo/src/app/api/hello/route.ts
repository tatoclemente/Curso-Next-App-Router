import { NextResponse, NextRequest } from 'next/server'
import { request } from 'http';

export async function GET(request: Request) { 

  return NextResponse.json({
    hola: 'Hello World'
  })
}

export async function POST(request:Request) {

  return NextResponse.json({
    hola: 'Hello World',
    method: 'POST'
  })
}