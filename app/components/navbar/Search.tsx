"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { useSession } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";

const Search = () => {
  const { data: session } = useSession();
  const loginModal = useLoginModal();

  const handleSearch = () => {
    if (session?.user) {
      console.log("inpout");
    } else {
      loginModal.onOpen();
    }
  };

  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <form className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent border-none outline-none text-sm font-semibold px-2"
          />
        </div>
        <div className="hidden sm:block"></div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block"></div>
          <button
            onClick={handleSearch}
            className="p-2 bg-blue-500 rounded-full text-white"
          >
            <BiSearch size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
