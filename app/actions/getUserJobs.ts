import prisma from "@/app/libs/prismadb";

export async function getPostedJobs(userId: any) {
  const postedJobs = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      jobs: true,
    },
  });

  return postedJobs?.jobs;
}
