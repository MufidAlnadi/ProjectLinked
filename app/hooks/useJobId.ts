import { create } from 'zustand';

type JobIdState = {
	jobId: number | null;
	setJobId: (id: number | null) => void;
};

export const useJobId = create<JobIdState>((set) => ({
	jobId: null,
	setJobId: (id) => set({ jobId: id }),
}));
