"use client";
import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdWaterDrop, MdOutlineHvac } from "react-icons/md";
import { GiElectricalResistance, GiMechanicalArm } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { LiaBuildingSolid } from "react-icons/lia";
import { GrPersonalComputer } from "react-icons/Gr";
import { BsFillBagFill } from "react-icons/Bs";



export const popularServicesData = [
  {
    name: "Water & Sewage",
    icon: MdWaterDrop,
    label: "Clean and efficient systems",
    image:
      "https://plus.unsplash.com/premium_photo-1682144316397-21c647d59d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    name: "Electrical Contracting",
    icon: GiElectricalResistance,
    label: "Professional electrical services",
    image:
      "https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1223&q=80",
  },
  {
    name: "Mechanical Contracting",
    icon: GiMechanicalArm,
    label: "Reliable mechanical solutions",
    image:
      "https://images.unsplash.com/photo-1519752594763-2633d8d4ea29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    name: "Roads & Bridges",
    icon: FaCheckCircle,
    label: "Infrastructure construction",
    image:
      "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Buildings",
    icon: LiaBuildingSolid,
    label: "Construction and renovation",
    image:
      "https://images.unsplash.com/photo-1527335988388-b40ee248d80c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "HVAC Systems",
    icon: MdOutlineHvac,
    label: "Conditioning services",
    image:
      "https://images.unsplash.com/photo-1614447413576-b346c641c128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    name: "Information Technology (IT)",
    icon: GrPersonalComputer,
    label: "IT services and solutions",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Marketing and Advertising",
    icon: BsFillBagFill,
    label: "Strategic marketing and advertising",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

interface CustomArrowProps {
  onClick: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    className="arrow left-arrow text-white bg-black rounded-full p-2 absolute top-1/2 transform -translate-y-1/2 left-5 z-10"
    onClick={onClick}
  >
    <IoIosArrowBack className="arrow-icon" />
  </button>
);

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    className="arrow right-arrow text-white bg-black rounded-full p-2 absolute top-1/2 transform -translate-y-1/2 right-5 z-10"
    onClick={onClick}
  >
    <IoIosArrowForward className="arrow-icon" />
  </button>
);
const PopularServices: React.FC = () => {
   
 const settings = {
   dots: true,
   infinite: true,
   speed: 600,
   slidesToShow: 5,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: "-100px",
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 1,
         centerPadding: "50px",
       },
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
         centerPadding: "45px",
       },
     },
     {
       breakpoint: 640,
       settings: {
         slidesToShow: 1,
         centerPadding: "45px",
       },
     },
   ],
   prevArrow: <CustomPrevArrow onClick={() => {}} />,
   nextArrow: <CustomNextArrow onClick={() => {}} />,
 };
  return (
    <div className="flex justify-center py-10">
      <div className="container mx-auto w-1400 relative">
        <Slider {...settings} className="slider-container">
          {popularServicesData.map(({ name, label, image }) => (
            <div key={name} className="relative cursor-pointer">
              <div className="h-80 w-72 relative rounded-md">
                <div className="aspect-w-3 aspect-h-4 flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src={image}
                      fill
                      alt="service"
                      className="rounded-md"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-50 py-2 px-4 overflow-hidden">
                  <span className="text-white text-sm block overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {label}
                  </span>
                  <h6 className="font-bold text-white text-xl overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {name}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularServices;