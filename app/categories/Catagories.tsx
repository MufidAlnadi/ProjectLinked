"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { popularServicesData } from "../components/home/Categories";
import { useSession } from "next-auth/react";
import useLoginModal from "../hooks/useLoginModal";

export default function Catagories() {
  const router = useRouter();
  const { data: session } = useSession();
  const loginModal = useLoginModal();

  const handleCardClick = (job: any) => {
    if (!session?.user) {
      loginModal.onOpen();
    } else {
      router.push(`/job/${job}`);
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularServicesData.map(({ name, label, image }) => (
              <div key={name} className="p-4">
                <div
                  onClick={() => handleCardClick(name)}
                  className="cursor-pointer"
                >
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      width={700}
                      height={400}
                      alt="services"
                      className="h-64"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {name}
                      </h1>
                      <p className="leading-relaxed mb-3">{label}</p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
