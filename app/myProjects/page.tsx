"use client";
import React, { useEffect, useState } from "react";
import EmptyState from "../components/EmptyState";
import Applcationcards from "./Applcationcards";
import axios from "axios";
import { useSession } from "next-auth/react";

const Application = () => {
  const { data: session } = useSession();

  const [jobs, setJobs] = useState<any>([]);
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
    return job.owner_id === session.user.id;
  });
  if (filtered.length === 0) {
    return <EmptyState showReset />;
  }
  if (filtered.length <= 3) {
    return (
      <>
        {filtered?.map((job: any) => {
          return (
            <div key={job.id} className="h-screen">
              <Applcationcards key={job.id} data={job} />
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <div>
        {filtered.map((job: any) => {
          return (
            <div key={job.id}>
              <Applcationcards data={job} />
            </div>
          );
        })}
      </div>
    );
  }
};

export default Application;
