"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Copy from "@/commonComponent/textEffect/Copy";
import HoverButton from "@/commonComponent/button/button";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const HOME_PROJECTS = [
  {
    _id: "68b4a9a054dc19eabb55d437",
    name: "NGN Learning",
    description:
      "NGN Learning - Globally Inspired. Emotionally Grounded. A New Era in Preventive Mental Health for Children/Teens, Practitioners and Caregivers",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1756670676309-Generated%20Image%20September%2001%2C%202025%20-%201_33AM.jpeg",
    index: 2,
  },
  {
    _id: "683e92e1783bbf7c61ad36af",
    name: "Derxo",
    description:
      "A next-gen healthcare portal built to enable users to book consultations, access health records, and connect with medical professionals - all within a secure and user-friendly interface.",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748931296978-derxo.png",
    index: 3,
  },
  {
    _id: "683e997b783bbf7c61ad36bc",
    name: "Derxo Admin Panel",
    description:
      "An internal admin dashboard for the Derxo healthcare system to manage appointments, track patient progress, and handle analytics - providing operational visibility for medical teams.",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748932987149-derxo%20admin.png",
    index: 6,
  },
  {
    _id: "683e9c0f783bbf7c61ad36c0",
    name: "TPR Admin Panel",
    description:
      "A robust CRM system developed for The Planet Reserve to manage client interactions, monitor leads, automate workflows, and provide a 360deg view of the customer lifecycle.",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748933647282-tpr%20admin.png",
    index: 7,
  },
  {
    _id: "683e9e87783bbf7c61ad36c8",
    name: "NoCapsFood",
    description:
      "An e-commerce platform that brings fresh and ready-to-cook food products directly to consumers. Built for quick ordering, high performance, and a seamless checkout experience.",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748934278356-nocaps.png",
    index: 8,
  },
];

// Mobile Card Component
const MobileCard = ({ item, index }) => (
  <div
    style={{ backgroundColor: item.color || "#fff" }}
    className="w-full h-[60vh] flex flex-col rounded-2xl shadow-2xl bg-white/60 backdrop-blur-lg border border-white/30 p-6"
  >
    <div className="w-full h-[60%] rounded-xl overflow-hidden mb-4">
      <Image
        width={500}
        height={500}
        className="w-full h-full object-cover"
        src={item.image}
        alt={item.name}
      />
    </div>
    <div className="w-full h-[40%] pt-2">
      <Copy><h2 className="lowercase font-bold text-xl mb-2 relative">
        {item.name}
        <span className="block w-8 h-1 bg-yellow-300 rounded-full mt-1"></span>
      </h2></Copy>
      <Copy><p className="text-justify text-gray-700">{item.description}</p></Copy>
    </div>
  </div>
);

const FiveProjectSlider = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const projectsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const projects = HOME_PROJECTS;
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Add projects to refs array
  const addProjectRef = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  useGSAP(() => {
    if (window.innerWidth < 768) return; // Skip on mobile
  
    const projects = projectsRef.current;
  
    gsap.set(projects, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 4,
      y: window.innerHeight / 4,
      rotation: () => gsap.utils.random(-40, 40),
      scale: 0.8,
      opacity: 1,
    });
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 0%",
        end: "+=380%",
        pin: true,
        scrub: 1,
      },
    });
  
    tl.to(projects, {
      xPercent: 0,
      yPercent: 0,
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      stagger: 0.1,
      ease: "power2.out",
      duration: 1.5,
    });
  
    tl.to(sliderRef.current, {
      x: () => -(sliderRef.current.scrollWidth - window.innerWidth + 150),
      ease: "none",
      duration: 2,
    });
  }, []);

  if (isMobile) {
    return (
      <div className="w-full min-h-screen pb-[25vw] md:pb-0 bg-zinc-50 py-8">
        <div className="w-full px-4">
          <h1 className="text-[20vw] mb-8">projects</h1>
          <div className="space-y-8">
            {projects.map((item, index) => (
              <MobileCard key={`mobile-project-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>
        <div className="w-[100vw] h-[20vh] flex items-center justify-center">
          <HoverButton
            text="view all projects"
            textSize="md:text-[1vw] text-[3.5vw]"
            padding="p-[1vw]"
            width="md:w-[13vw] w-[60%]"
            height="md:h-[2.5vw] h-[12vw]"
            bgColor="bg-zinc-950"
            textColor="text-zinc-50"
            onClick={() => router.push("/work")}
          />
        </div>
      </div>
    );
  }

  return (
    <>
     <div className="w-full h-[480vh] text-[var(--text-color)]">
        <div ref={containerRef} className="w-full h-[100vh] overflow-hidden">
          <div className="w-full h-[25vh] flex items-end justify-start px-[1vw]">
            <h1 className="md:text-[10vw] text-[20vw]">projects</h1>
          </div>
          <div ref={sliderRef} className="flex gap-8 h-full p-8">
            {projects.map((item, index) => (
              <div
                style={{ backgroundColor: item.color || "#fff" }}
                key={`project-${index}`}
                ref={addProjectRef}
                className="project md:w-[25vw] w-[89vw] md:h-[60vh] h-[60vh] flex-shrink-0 flex items-center justify-center flex-col rounded-2xl shadow-2xl bg-white/60 backdrop-blur-lg border border-white/30 p-6 z-[100]"
              >
                <div className="w-full h-[60%] rounded-xl overflow-hidden mb-4">
                  <Image
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="w-full h-[40%] pt-2 grid grid-rows-1">
                  <h2 className="lowercase font-bold text-xl mb-2 relative">
                    {item.name}
                    <span className="block w-8 h-1 bg-yellow-300 rounded-full mt-1"></span>
                  </h2>
                  <p className="text-justify text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
            <div className="w-[50vw] h-[60vh] flex items-center justify-center">
              <HoverButton
                text="View all projects"
                textSize="md:text-[1vw] text-[3.5vw]"
                padding="p-[1vw]"
                width="md:w-[13vw] w-[60%]"
                height="md:h-[2.5vw] h-[12vw]"
                bgColor="bg-zinc-950"
                textColor="text-zinc-50"
                onClick={() => router.push("/work")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveProjectSlider;
