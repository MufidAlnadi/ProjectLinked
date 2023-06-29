"use client";
import usePostModal from "@/app/hooks/usePostModal";
import Modal from "./Modal";
import { useEffect, useMemo, useState } from "react";
import Heading from "../Heading";
import { popularServicesData } from "../home/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../inputs/Input";
import CountrySelect from "../inputs/CountrySelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  TITLE = 2,
  DATE = 3,
  PDF = 4,
  DESCRIPTION = 5,
}

const PostModal: React.FC = () => {
  const router = useRouter();
  const postModal = usePostModal();
  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isLoading, setisLoading] = useState(false);
  const { data: session } = useSession();


  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      category: "",
      description: "",
      full_description: "",
      start_date: "",
      end_date: "",
      pdf_path: "",
      location: "",
      owner_id: 0,
    },
  });
  useEffect(() => {
    if (session?.user?.id) {
      setValue("owner_id", session.user.id);
    }
  }, [session, setValue]);

  const category = watch("category");
  const location = watch("location");
  const start_date = watch("start_date");
  const end_date = watch("end_date");

  const setCustomValues = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };
  const onNext = () => {
    setStep((value) => value + 1);
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form Data:", data);
      if (step !== STEPS.DESCRIPTION) {
        return onNext();
      }
    setisLoading(true);
    axios
      .post("/api/postProject", data)
      .then(() => {
        toast.success("Project Submitted");
         console.log("🚀 ~ file: PostModal.tsx:96 ~ data:", data);
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        postModal.onClose();
      })
      .catch((error) => {
        toast.error("Something went wronge", error);
         console.log("🚀 ~ file: PostModal.tsx:96 ~ data:", data);
      })
      .finally(() => {
        setisLoading(false);
         console.log("🚀 ~ file: PostModal.tsx:96 ~ data:", data);
      });
      console.log("🚀 ~ file: PostModal.tsx:96 ~ data:", data)
  };
  const actionLabel = useMemo(() => {
    if (step === STEPS.DESCRIPTION) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Explore the project categories where you can actively post your projects "
        subtitle="Pick a category "
      />
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-3
      max-h-[50vh] overflow-y-auto justify-items justify-center"
      >
        {popularServicesData.map(({ name, label, icon }) => (
          <div key={label} className="col-span-1">
            <CategoryInput
              onClick={(category) => {
                setCustomValues("category", category);
              }}
              selected={category === name}
              name={name}
              icon={icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className=" flex flex-col gap-8">
        <Heading
          title="Where is your project located?"
          subtitle="help contractors find you!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValues("location", value)}
        />
      </div>
    );
  }

  if (step === STEPS.TITLE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Title of your Project"
          subtitle="Help people understand"
        />
        <Input
          id="title"
          label="Title"
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }
  if (step === STEPS.DATE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="	Project Date" subtitle="Project Deadline" />
        <div className="flex flex-row gap-8">
          <DatePicker
            selected={start_date}
            onChange={(value: any) => {
              const currentDate = new Date();
              if (value >= currentDate) {
                setCustomValues("start_date", value);
              }
            }}
            dateFormat="yyyy-MM-dd"
            className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholderText="Select Start Date"
            minDate={new Date()}
            required
          />

          <DatePicker
            selected={end_date}
            onChange={(value: any) => {
              const currentDate = new Date();
              if (value >= currentDate) {
                setCustomValues("end_date", value);
              }
            }}
            dateFormat="yyyy-MM-dd"
            className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholderText="Select End Date"
            minDate={new Date()}
            required
          />
        </div>
      </div>
    );
  }
  if (step === STEPS.PDF) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Submit your project documentation" subtitle="PDF" />
      </div>
    );
  }
  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Describe your project"
          subtitle="Requirement for your project"
        />
        <h1>Add a concise description</h1>
        <Input
          id="description"
          label="Details"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <h1> Add a full description </h1>
        <textarea
          id="full_description"
          rows={4}
          className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed border-neutral-600-500
          focus:border-black
         
        `}
          placeholder="Description"
          {...register("full_description")}
        />
      </div>
    );
  }
  return (
    <Modal
      title="Post a Project"
      isOpen={postModal.isOpen}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      onClose={postModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default PostModal;
