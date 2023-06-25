"use client";
import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function Hero() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1593436878396-e943a3cac98f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488257907837-523fe2051fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1625842196989-6fbfa83c2852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1538592577044-de1e471c38b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const [image, setImage] = useState(1);
  // const [searchData, setSearchData] = useState("");
  useEffect(() => {
    const interval = setInterval(
      () => setImage((prevImage) => (prevImage >= 4 ? 1 : prevImage + 1)),
      10000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w[1400px] h-[780px] ">
      <div className="container mx-auto">
        <div className="max-w[1400px] h-[780px] absolute">
          <div className="z-0 relative w-[90%] md:w-[650px] flex justify-center flex-col h-full gap-20">
            <h1 className="text-white text-3xl sm:text-5xl leading-snug 2xl:mb-10 ti:ml-10">
              Discover the ideal&nbsp;
              <i>services</i>
              <br />
              for your business
            </h1>
            <div className="flex align-middle ti:ml-10 z-0">
              <div className="relative">
                <IoSearchOutline className="absolute text-gray-500 text-2xl flex align-middle h-full left-2" />
                <input
                  type="text"
                  className="h-12 sm:h-14 w-full sm:w-[450px] pl-10 rounded-md rounded-r-none"
                  placeholder={`search`}
                  //  value={searchData}
                  //  onChange={(e) => setSearchData(e.target.value)}
                />
              </div>
              <button
                className="bg-[#0A66C2] text-white px-6 sm:px-12 text-lg font-semibold rounded-r-md"
                //  onClick={() => router.push(`/search?q=${searchData}`)}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[image].url})` }}
        className="w-full h-full bg-center bg-cover duration-1000"
      ></div>
    </div>
  );
}
