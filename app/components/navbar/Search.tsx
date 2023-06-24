import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
//   const handleSubmit = (e:any) => {
//     e.preventDefault();
//     // Add your search logic here
//   };

  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <form
        // onSubmit={handleSubmit}
        className="flex flex-row items-center justify-between"
      >
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
            // type="submit"
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
