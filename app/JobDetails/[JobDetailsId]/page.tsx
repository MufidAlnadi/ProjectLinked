import getJobById from '@/app/actions/getJobById';
import React from 'react';

interface IdParams {
  JobDetailsId: string;
}

const JobDetailsPage = async ({ params }: { params: IdParams }) => {
  const jobById = await getJobById({ jobById: Number(params.JobDetailsId) });
  return (
    <>
    <div>
      {jobById?.title}
    </div>
    <div>
      apply
    </div>
    </>
  );
};

export default JobDetailsPage;
