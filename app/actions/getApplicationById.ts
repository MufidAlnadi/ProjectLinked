import prisma from '@/app/libs/prismadb';

export async function getApplicationById(id: any) {
	const application = await prisma.jobApplication.findUnique({
		where: { id: Number(id) },
		include: { job: true, submittedBy: true },
	});
	return application;
}
