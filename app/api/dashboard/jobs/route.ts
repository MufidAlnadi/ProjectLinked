import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'
export async function GET () {
  const jobs = await prisma.job?.findMany({
    orderBy: {
      created_at: 'desc'
    }
  })
  return NextResponse.json(jobs)
}
