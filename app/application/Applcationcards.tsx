
import React from 'react';

import { getApplications } from '@/app/api/getAppliactionById/route';
import useSessionIdHook from '../hooks/useId';
import { getPostedJobs } from '../actions/getUserJobs';

const Applcationcards = async () => {
	// const sessionId = useSessionIdHook();

	const applications = await getApplications(1);
	const job = await getPostedJobs(1)
	return (
		<div>
			{applications.map((application) => (
				<div key={application.id}>
					{application.first_name} {application.last_name}
				</div>
			))}
			{job?.map((application) => (
				<div key={application.id}>
					{application.category} {application.description}
				</div>
			))}
		</div>
	);
};

export default Applcationcards;
