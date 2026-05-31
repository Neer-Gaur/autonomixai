"use client";
import React from "react";

import CountUp from "@/commonComponent/CountingUp/page";
import Image from "next/image";
import Copy from "@/commonComponent/textEffect/Copy";

const STATISTICS_DATA = [
  {
    _id: "68490b3b267b8f854c896081",
    title: "Projects Delivered",
    value: 18,
    description: "High-impact solutions crafted with precision and purpose.",
  },
  {
    _id: "68490b4e267b8f854c896084",
    title: "Successful Clients",
    value: 10,
    description:
      "Empowering businesses with tailor-made digital experiences.",
  },
  {
    _id: "68490b62267b8f854c896087",
    title: "Brands Transformed",
    value: 5,
    description:
      "Creative strategies that drive growth and measurable success.",
  },
];

export default function AboutSection() {
  const statistics = STATISTICS_DATA;

  return (
    <div className="w-full h-auto md:h-[70vh] relative  overflow-hidden  text-zinc-950">
      
      <div className="w-full h-[90%] relative " >
        {/* <div className="absolute top-[10vh] -left-[10vw] rounded-full z-0">
                      <Image className="w-[50vw] h-[50vw] object-cover lg:w-[30vw] lg:h-[30vw] " src="/Rectangle98.svg" width={800} height={500} alt="img" />
      
      
                    </div> */}
        <div className="w-full h-full relative">
          <h1 className="px-[1vw] pt-[5vh] z-50">About us</h1>
          
          <div className="w-full md:h-screen   flex justify-end md:pt-[5vw] pt-[20vw]">
          <div className="flex items-center md:justify-center justify-start md:flex-row flex-col md:gap-[5vw] gap-[20vw] w-[70%] h-[40%] ">
            {statistics.map((stat, index) => {
              return (
                <div key={stat._id} className="flex items-start justify-between flex-col gap-[2vw]">
                  <h2 className="font-bold md:w-[70%] w-[100%]">{stat.title}</h2>
                  <h1>
                    <CountUp
                      from={0}
                      to={stat.value}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </h1>
                  <p className="font-bold md:w-[70%] w-[100%]">{stat.description}</p>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[5vh] relative overflow-hidden flex items-end ">
        
      </div>
    </div>
  );
}
