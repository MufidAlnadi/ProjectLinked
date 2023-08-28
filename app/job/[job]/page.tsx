"use client";
import EmptyState from "@/app/components/EmptyState";
import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";
import { useSession } from "next-auth/react";

interface IdParams {
  appID: string;
}

const Page = ({ params }: { params: IdParams }) => {
  const [jobs, setJobs] = useState<any[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/dashboard/jobs")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  const filtered = jobs.filter((job) => {
    return (
      job.category === decodeURIComponent(params.job) 
      &&
      !job.is_closed &&
      job.is_approved &&
      job.owner_id !== session.user.id 
    );
  });

  if (filtered.length === 0) {
    return <EmptyState showReset />;
  }
  if (filtered.length <= 3) {
    return (
      <div>
        {filtered.map((job: any) => {
          return (
            <div key={job.id} className="h-screen">
              <JobCard data={job} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        {filtered.map((job: any) => {
          return (
            <div key={job.id}>
              <JobCard data={job} />
            </div>
          );
        })}
      </div>
    );
  }
};

export default Page;
