import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    job_id,
    submitted_by,
    pdf_path,
    first_name,
    last_name,
    mobile_no,
    email,
    cover_letter,
    additional_info,
    years_of_experience,
    cv,
    description,
    price,
  } = body;

  const jobApplication = await prisma.jobApplication.create({
    data: {
      job: { connect: { id: job_id } },
      submittedBy: { connect: { id: submitted_by } },
      pdf_path,
      first_name,
      last_name,
      mobile_no,
      email,
      cover_letter,
      additional_info,
      years_of_experience,
      cv,
      description,
      price,
    },
  });

  return NextResponse.json(jobApplication);
}
