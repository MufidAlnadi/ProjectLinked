import { NextResponse } from 'next/server';
import prisma from '../../libs/prismadb';

export async function PUT(request: Request) {
  const body = await request.json();

  const { applicationId, payment, jobId, isClosed } = body;

  const updatedApplication = await prisma.jobApplication.update({
    where: { id: applicationId },
    data: { payment },
  });
  const updatedJob = await prisma.job.update({
    where: { id: jobId },
    data: { is_closed: isClosed },
  });

  return NextResponse.json({ updatedApplication, updatedJob });
}
