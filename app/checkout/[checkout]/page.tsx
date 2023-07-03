import React from 'react';
import Checkout from './Checkout';
import { getApplicationById } from '@/app/actions/getApplicationById';

interface IdParams {
	appID: string;
}

//

const page = async ({ params }: { params: IdParams }) => {
	const applicationsNumber = parseInt(params.checkout);
	const application = await getApplicationById(applicationsNumber);
	return (
		<div>
			<Checkout application={application} />
			<p>{application.price} </p>
		</div>
	);
};

export default page;
