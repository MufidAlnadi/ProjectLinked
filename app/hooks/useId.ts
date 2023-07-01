import { useSession } from 'next-auth/react';

const useSessionIdHook = () => {
	const { data: session } = useSession();
	return session?.user.id;
};

export default useSessionIdHook;
