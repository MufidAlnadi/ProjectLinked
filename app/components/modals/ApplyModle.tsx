import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

const ApplyJobModal: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: any) => {
    setIsLoading(true);
    axios
      .post("/api/applyForJob", data)
      .then(() => {
        toast.success("Application Submitted");
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong", error);
        setIsLoading(false);
      });
  };

  return (

  );
};

export default ApplyJobModal;