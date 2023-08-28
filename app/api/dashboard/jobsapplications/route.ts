import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'
export async function GET () {
  const jobsApplications = await prisma.jobApplication?.findMany({
    orderBy: {
      submitted_at: 'desc'
    }
  })
  return NextResponse.json(jobsApplications)
}
