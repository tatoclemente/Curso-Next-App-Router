import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import { boolean, object, string } from 'yup'

export async function GET(request: Request) { 
  const { searchParams } = new URL(request.url)
  const take = +(searchParams.get('take') ?? '10')
  const skip = +(searchParams.get('skip') ?? '0')

  if ( isNaN( take ) ) NextResponse.json({ message: 'Take tiene que ser un numero'}, { status: 400 })
  if ( isNaN( skip ) ) NextResponse.json({ message: 'Skip tiene que ser un numero'}, { status: 400 })

  const todos = await prisma.todo.findMany({
    take,
    skip,
  })

  return NextResponse.json(todos)

}

const postSquema = object({
  description: string().required(),
  complete: boolean().optional().default(false) //! TODO mostrar algo interesante
})

export async function POST(request: NextRequest) {

  try {
    const { complete, description } =  await postSquema.validate( await request.json() )  
    const todo = await prisma.todo.create({
      data: { complete, description }
    })
    return NextResponse.json(todo)
  } catch (error) {
    return NextResponse.json( error , { status: 400 })
  }
}