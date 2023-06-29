import prisma from '@/app/libs/prismadb';

interface IdParams {
	jobById: number;
}

export default async function getJobById(params: IdParams) {
	try {
		const { jobById } = params;
		const job = await prisma.job.findUnique({
			where: {
				id: jobById,
			},
			include: {
				owner: true,
			},
		});

		if (!job) {
			return null;
		}

		return {
			...job,
			createdAt: job.created_at.toISOString(),
			user: {
				...job.owner,
				createdAt: job.owner.created_at.toDateString(),
			},
		};
	} catch (error: any) {
		throw new Error(error);
	}
}
