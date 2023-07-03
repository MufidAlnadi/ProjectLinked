import { NextResponse } from 'next/server';
import prisma from '../../libs/prismadb';

export async function PUT(request: Request) {
	const body = await request.json();

	const { applicationId, payment } = body;

	const updatedApplication = await prisma.jobApplication.update({
		where: { id: applicationId },
		data: { payment },
	});
    return NextResponse.json(updatedApplication);

}
