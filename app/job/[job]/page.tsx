
import EmptyState from "@/app/components/EmptyState";
import React, { FC } from "react";
import JobCard from "./JobCard";

interface pageProps {
  params: { name: string };
}
const  page: FC<pageProps>  = ({ params }) => {

  const isEmpty = true;
  if (isEmpty) {
    return <EmptyState showReset/>;
  }
  return (
    <JobCard/>
  );
};

export default page;
