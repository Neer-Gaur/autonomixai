"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import ParallaxImage from './parallaxImage';

const IconsScroller = ({ direction, bgColor, text }) => {
  // Array of text items
  const icons = [
    "/icons/zod.svg",
    "/icons/claude-ai-icon.svg",
    "/icons/firebase-studio.svg",
    "/icons/jwt.svg",
    "/icons/mysql.svg",
    "/icons/mongodb.svg",
    "/icons/figma.svg",
    "/icons/premiere.svg",
    "/icons/lightroom.svg",
    "/icons/adobe-xd.svg",
    "/icons/adobe.svg",
    "/icons/canva.svg",
    "/icons/vitejs.svg",
    "/icons/bootstrap.svg",
    "/icons/django.svg",
    "/icons/nestjs.svg",
    "/icons/vue.svg",
    "/icons/tailwindcss.svg",
    "/icons/fastapi.svg",
    "/icons/angular.svg",
    "/icons/firebase.svg",

    "/icons/netlify.svg",
    "/icons/javascript.svg",
    "/icons/typescript.svg",
    "/icons/python.svg",

    "/icons/nodejs.svg",
    "/icons/react_light.svg",
    "/icons/redux.svg",
  ];

  return (
    <>
      <div
        className="w-full relative overflow-hidden   mb-10"
        style={{ backgroundColor: `var(${bgColor})`, color: `var(${text})` }}
      >
        <div className="relative flex gap-[1vw] py-1">
          {[1, 2].map((row) => (
            <motion.div
              key={row}
              className="flex items-center gap-5 shrink-0"
              initial={{ x: direction === 1 ? "0" : "-50%" }}
              animate={{ x: direction === 1 ? "-50%" : "0" }}
              transition={{
                duration: 65,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...icons, ...icons].map((item, index) => (
                <div
                  key={index}
                  className="flex  items-center justify-center gap-[0.5vw]  mr-[3vw] text-xs text-center"
                >
                  <Image src={item} alt={item} width={40} height={50} />
                  <span>
                    <h4 className="font-bold">
                      {item
                        .split("/")
                        .pop()
                        .split(".")[0]
                        .replace(/[_-]/g, " ")}
                    </h4>
                  </span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="w-full relative overflow-hidden   mb-10"
        style={{ backgroundColor: `var(${bgColor})`, color: `var(${text})` }}
      >
        <div className="relative flex gap-[1vw] py-1">
          {[1, 2].map((row) => (
            <motion.div
              key={row}
              className="flex items-center gap-5 shrink-0"
              initial={{ x: direction === -1 ? "-50%" : "0%" }} // Start position
              animate={{ x: direction === -1 ? "0%" : "-50%" }} // End position
              transition={{
                duration: 65,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...icons, ...icons].map((item, index) => (
                <div
                  key={index}
                  className="flex  items-center justify-center gap-[0.5vw]  mr-[3vw] text-xs text-center"
                >
                  <Image src={item} alt={item} width={40} height={50} />
                  <span>
                    <h4 className="font-bold">
                      {item
                        .split("/")
                        .pop()
                        .split(".")[0]
                        .replace(/[_-]/g, " ")}
                    </h4>
                  </span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IconsScroller;
