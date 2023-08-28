import Image from "next/image";
import React from "react";
export default function Cta() {
  return (
    <div>
      <div className="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 py-9">
        <div className="relative rounded-md">
          <Image
            src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png"
            height={336}
            width={1250}
            alt="city view"
            className="w-full h-full rounded-md  object-center object-fill absolute sm:block hidden"
          />
          <Image
            src="https://i.ibb.co/LQpxBsc/mobile.png"
            width={350}
            height={336}
            alt="city view"
            className="w-full h-full rounded-md absolute object-center object-fill sm:hidden"
          />
          <div className="text-xl relative  bg-gradient-to-r from-blue-700 to-transparent w-full h-full  top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
            <div>
              <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
                Connecting Contractors with Subcontractors
              </h1>
              <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12 2xl:pr-12 mt-4">
                Our platform facilitates seamless connections between
                contractors and subcontractors, streamlining the construction
                process.
              </p>
            </div>
            <div className="md:mt-12 mt-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
