import prisma from "../../libs/prismadb";



export async function getApplications(jobId: any) {
  const applications = await prisma.jobApplication.findMany({
    where: {
      job_id: jobId,
    },
  });

  return applications;
}
