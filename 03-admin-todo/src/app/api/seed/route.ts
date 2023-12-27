import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    prisma.todo.create({
        data: { description: 'Piedra del alma' }
    })
    const todo = await prisma.todo.create({
        data: { description: 'Piedra del alma' }
    })

    // console.log(todo);
    
    
    return NextResponse.json({
        message: 'Seed Executed'
    })
}