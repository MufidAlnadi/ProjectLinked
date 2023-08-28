import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'
export async function GET () {
  const contactUs = await prisma.contactMessage?.findMany({
    orderBy: { id: 'desc' }
  })
  return NextResponse.json(contactUs)
}
