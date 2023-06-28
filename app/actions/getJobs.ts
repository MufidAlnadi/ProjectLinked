import prisma from "@/app/libs/prismadb";
export default async function getJobs() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: {
        created_at: "desc",
      },
    });
    return jobs;
  } catch (error: any) {
    throw new Error(error);
  }
}
