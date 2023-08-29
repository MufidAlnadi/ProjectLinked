import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
export async function GET() {
  const jobs = await prisma.job?.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
  return NextResponse.json(jobs);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { id, is_approved, is_deleted } = body;

  try {
    const updatedJob = await prisma.job.update({
      where: { id },
      data: {
        is_approved: is_approved || false,
        is_deleted: is_deleted || false,
      },
    });

    return NextResponse.json(updatedJob);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
