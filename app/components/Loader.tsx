'use client';

import { PuffLoader } from 'react-spinners';

const Loader = () => {
	return (
		<div
			className="
      h-screen
      flex 
      flex-col 
      justify-center 
      items-center 
    "
		>
			<PuffLoader size={100} color="blue" />
		</div>
	);
};

export default Loader;
