import getJobById from '@/app/actions/getJobById';
import React from 'react';
import JobDetails from './JobDetails';

interface IdParams {
  JobDetailsId: string;
}

const JobDetailsPage = async ({ params }: { params: IdParams }) => {
  const jobById = await getJobById({ jobById: Number(params.JobDetailsId) });
  return (
    <>
    <div>
      <JobDetails
      job={jobById}
      />
    </div>
    <div>
      apply
    </div>
    </>
  );
};

export default JobDetailsPage;
