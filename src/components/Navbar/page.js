"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page ()  {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`Navbar fixed top-0 transition-transform duration-500 ease-in-out z-[99] w-full h-[10vh] text-zinc-950/80  bg-zinc-50/80 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`} 
    >
      <div className="w-full h-full grid grid-cols-5 items-center backdrop-blur-sm bg-zinc/90 border-b border-white/10 shadow-[0_2px_10px_rgba(255,255,255,0.05)]">
        <div className="flex justify-start col-span-1 pl-[2vw] items-center">
          <Link href="/"><span className="text-sm md:text-base font-bold uppercase tracking-wider text-zinc-950">Autonomix AI</span></Link>
        </div>

        <div className="hidden md:grid col-span-4 grid-cols-4 pr-[1vw]">
          {navItems.map((item, index) => (
            <div key={index} className="flex justify-end ">
              <Link
                href={item.path}
                className="text-[0.8vw] font-medium hover:cursor-pointer uppercase"
              >
                <p className="mix-blend-difference ">{item.name}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-end md:hidden col-span-4 px-[5vw]">
          <button onClick={() => setMenuOpen(!menuOpen)}>
           <div
  className="relative w-6 h-5 flex flex-col justify-between items-center cursor-pointer "
>
  <span
    className={`block h-[2px] w-full bg-zinc-950 transition-transform duration-300 ease-in-out ${
      menuOpen ? "rotate-45 translate-y-[9px]" : ""
    }`}
  />
  <span
    className={`block h-[2px] w-full bg-zinc-950 transition-opacity duration-300 ease-in-out ${
      menuOpen ? "opacity-0" : "opacity-100"
    }`}
  />
  <span
    className={`block h-[2px] w-full bg-zinc-950 transition-transform duration-300 ease-in-out ${
      menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
    }`}
  />
</div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-110%" }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="fixed top-[10vh] left-0 w-full h-[50vh] bg-zinc-50 text-zinc-950 flex flex-col items-start justify-center z-50 gap-[2vw] "
          >
            {navItems.map((item, index) => (
              <div key={item.name} className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{
                    delay: 0.1 * index,
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <Link
                    href={item.path}
                    className="text-6xl uppercase tracking-wide block"
                    onClick={() => setMenuOpen(false)}
                  >
                    
                    {item.name}
                    
                  </Link>
                </motion.div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


