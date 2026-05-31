"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll, useTransform, motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import HoverButton from "@/commonComponent/button/button";
import { MdOutlineArrowOutward } from "react-icons/md";

// --- Aceternity UI Container Scroll Components (Framer Motion) ---

const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.75, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <div
      className="min-h-[70rem] md:min-h-[90rem] flex items-center justify-center relative p-2 md:p-20 overflow-hidden"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} opacity={opacity} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header = ({ translate, opacity, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        opacity: opacity,
      }}
      className="max-w-5xl mx-auto text-center z-10 relative"
    >
      {titleComponent}
    </motion.div>
  );
};

const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[22rem] sm:h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl relative z-20"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 relative">
        {children}
      </div>
    </motion.div>
  );
};

// --- Main Page Component ---

export default function Page() {
  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const videoBox = useRef(null);
  const box = useRef(null);

  // Parallax background refs
  const heroRef = useRef(null);
  const bgOrbRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;

    // Background Ambient Orbs Parallax
    if (!isMobile) {
      gsap.to(bgOrbRef.current, {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }

    // GSAP ScrollTrigger for expanding video and side app cards
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: box.current,
        start: "top 0%",
        end: "+=300",
        scrub: 1,
        pin: !isMobile,
        anticipatePin: !isMobile ? 1 : 0,
      },
    });

    t1.to(
      firstBox.current,
      {
        x: "-100%",
        duration: 1,
      },
      "a"
    );

    t1.to(
      secondBox.current,
      {
        x: "100%",
        duration: 1,
      },
      "a"
    );

    t1.to(
      videoBox.current,
      {
        width: "100vw",
        duration: 1,
        ease: "power2.inOut",
      },
      "a"
    );
  }, []);

  return (
    <>
      <div>
        <div className="w-full text-[var(--text-color)]">
          <div className="w-full h-full overflow-hidden">
            
            {/* Top section: Hero scroll animation */}
            <div ref={heroRef} className="w-full relative overflow-hidden bg-zinc-50/50">
              
              {/* Architectural Grid Background with radial mask */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:35px_35px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none z-0" />
              
              {/* Ambient Glowing Orbs */}
              <div ref={bgOrbRef} className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-emerald-500/5 to-teal-500/5 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-br from-teal-500/5 to-cyan-500/5 blur-[100px]" />
              </div>

              {/* 3D Scroll Component */}
              <ContainerScroll
                titleComponent={
                  <div className="flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto normal-case">
                    {/* Premium Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-[-0.03em] leading-[1.1] text-zinc-900 font-heading mb-6 max-w-4xl normal-case">
                      Transforming <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Offline Businesses</span> <br className="hidden md:block" />
                      into Powerful <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Online Digital Assets.</span>
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-zinc-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-[90%] font-normal font-sans mb-10 normal-case">
                      We engineer high-performance digital products, custom AI applications, and premium web ecosystems that turn operational challenges into powerful growth engines and bottom-line margins.
                    </p>

                    {/* Centered Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4 z-30 mb-8">
                      <Link href="/work">
                        <HoverButton
                          text="View Projects"
                          textSize="md:text-[0.9vw] text-[3.5vw]"
                          padding="px-6 py-3"
                          width="md:w-[10vw] w-[45vw]"
                          height="md:h-[3vw] h-[12vw]"
                          bgColor="bg-zinc-950"
                          textColor="text-zinc-50"
                        />
                      </Link>

                      <Link 
                        href="https://cal.com/adityaarya" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-zinc-300 bg-white/40 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all duration-300 font-bold text-[3.5vw] md:text-[0.9vw] text-zinc-800 group shadow-sm backdrop-blur-sm h-[12vw] md:h-[3vw]"
                      >
                        <span>Book Strategy Call</span>
                        <MdOutlineArrowOutward className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </div>
                  </div>
                }
              >
                {/* 3D Card Content (Digital Transformation Visual) */}
                <div className="relative w-full h-full group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />
                  <Image 
                    src="/digital_transformation.png"
                    alt="Digitalizing Offline Businesses Concept"
                    fill
                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                </div>
              </ContainerScroll>
            </div>

            {/* Animation section */}
            <div
              ref={box}
              className="relative w-full md:h-[100vh] h-[60vh] flex items-center justify-center z-20 mt-[2vw]"
            >
              <div className="w-full h-full sticky flex items-center justify-between">
                <div className="relative w-full h-full flex">
                  <div
                    ref={firstBox}
                    className="w-1/3 h-full absolute p-[1vw] hidden md:flex"
                  >
                    <div className="w-full h-full bg-zinc-50 object-cover overflow-hidden border-zinc-50 border-[2vw]">
                      <div className="w-full h-[5vw] py-[1vw]">
                        <h2>HealthCare App</h2>
                      </div>
                      <Image
                        className="bg-cover object-cover w-full h-full"
                        src="/coverimage1.png"
                        alt="Healthcare App Cover"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>

                  <div ref={videoBox} className="video h-full w-full object-cover p-[1vw]">
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    >
                      <source
                        src="https://framerusercontent.com/assets/7noJ6ZABGBxwSX8scPjAZOqcOhU.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  
                  <div
                    ref={secondBox}
                    className="w-1/3 h-full absolute right-0 p-[1vw] hidden md:flex"
                  >
                    <div className="w-full h-full bg-zinc-50 object-cover overflow-hidden border-zinc-50 border-[2vw] relative">
                      <div className="w-full h-[5vw] py-[1vw]">
                        <h2>Fintech App</h2>
                      </div>
                      <Image
                        className="object-cover w-full h-full"
                        src="/coverimage2.png"
                        alt="Fintech App Cover"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}