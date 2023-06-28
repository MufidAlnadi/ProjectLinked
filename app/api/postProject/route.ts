import { NextResponse ,} from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
       const body = await request.json(); 

  const {
          owner_id,
          title,
          pdf_path,
          category,
          description,
          location,
          full_description,
          start_date,
          end_date,
        } = body;
    const job = await prisma.job.create({
      data: {
        owner: { connect: { id: owner_id } },
        title,
        pdf_path,
        category,
        description,
        location: location.value,
        full_description,
        start_date,
        end_date,
      },
    });
  return NextResponse.json(job);
}
