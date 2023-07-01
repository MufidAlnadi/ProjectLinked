import React from 'react';
import { getApplications } from '@/app/api/getAppliactionById/route';
import ApplicationCard from "./ApplicationCard";
interface IdParams {
	appID: string;
}

const page = async ({ params }: { params: IdParams }) => {
	const applicationsNumber = parseInt(params.applications);

	const application = await getApplications(applicationsNumber);

	return (
		<div className="h-screen">
			{application.map((application) => (
				<ApplicationCard key={application.id} application={application}/>
			))}
		</div>
	);
};

export default page;
