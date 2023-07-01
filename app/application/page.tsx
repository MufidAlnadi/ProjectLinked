
import React from 'react';
import EmptyState from '../components/EmptyState';
import Applcationcards from './Applcationcards';

const Application = () => {
	return (
		<>
			<EmptyState
				title="No Applications yet"
				subtitle="looks like no one submitted any application"
			/>
			<Applcationcards/>
		</>
	);
};

export default Application;
