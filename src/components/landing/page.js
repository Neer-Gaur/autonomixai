"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";
import Image from "next/image";
import HoverButton from "@/commonComponent/button/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import Copy from "@/commonComponent/textEffect/Copy";
export default function Page() {
  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const videoBox = useRef(null);
  const box = useRef(null);

  // Parallax refs
  const heroRef = useRef(null);
  const bgOrbRef = useRef(null);
  const imageCardRef = useRef(null);
  const textContainerRef = useRef(null);

  useGSAP(() => {
    // Create a timeline for coordinated animations
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768; // Check if mobile device

    // Parallax ScrollTrigger animations
    if (!isMobile) {
      gsap.to(imageCardRef.current, {
        y: "-12%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

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

    // Fade out text container on scroll (both mobile and desktop)
    gsap.to(textContainerRef.current, {
      y: isMobile ? "-10%" : "-20%",
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom 30%",
        scrub: true,
      }
    });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: box.current,
        start: "top 0%", // Start animation when section top reaches 20% from viewport top
        end: "+=300", // End animation after scrolling 300px
        scrub: 1, // Smoother scrubbing with slight delay
        // markers: true,       // Keep markers for debugging (remove in production)
        pin: !isMobile, // Only pin on non-mobile devices
        anticipatePin: !isMobile ? 1 : 0, // Only anticipate pin on non-mobile devices
      },
    });

    // Add animations to timeline with label "a" to keep them synchronized
    t1.to(
      firstBox.current,
      {
        x: "-100%", // Move left panel completely off-screen
        duration: 1,
        // ease: "power2.inOut",
      },
      "a"
    );

    t1.to(
      secondBox.current,
      {
        x: "100%", // Move right panel completely off-screen
        duration: 1,
        // ease: "power2.inOut",
      },
      "a"
    );

    t1.to(
      videoBox.current,
      {
        width: "100vw", // Expand video box to full width
        duration: 1,
        ease: "power2.inOut",
      },
      "a"
    );
  }, []);
  // bg-[#FF4E27]
  return (
    <>
      <div>
        <div className="w-[100%] md:h-[240vh] h-[160vh] text-[var(--text-color)] ">
          {/* <Lines /> --------------------------------------
        <div className=" top-0 left-0 w-full h-full z-[1] pointer-events-none px-[1vw] absolute ">
        <div className="flex w-full h-full justify-between ">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-px bg-black/20 h-full" />
            ))}
        </div>
      </div> */}
          {/* -------------------------------------------- */}
          <div className="w-full h-full overflow-hidden">
            {/* Top section */}
            <div ref={heroRef} className="w-full min-h-[100vh] md:h-[100vh] flex relative flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-[5vw] py-16 md:py-0 overflow-hidden bg-zinc-50/50">
              
              {/* Architectural Grid Background with radial mask */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:35px_35px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none z-0" />
              
              {/* Blur Ambient Orbs */}
              <div ref={bgOrbRef} className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-emerald-500/5 to-teal-500/5 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-br from-teal-500/5 to-cyan-500/5 blur-[100px]" />
              </div>

              {/* Left Column: Typography and Action Buttons */}
              <div ref={textContainerRef} className="w-full md:w-[55%] h-full flex flex-col justify-center items-start z-10 pr-0 md:pr-12 mt-8 md:mt-0 relative">
                
                {/* Main Heading */}
                <div className="w-full mb-6">
                  <Copy animateOnScroll={false}>
                    <h1 className="text-[5vw] md:text-[1.5vw] leading-[6vw] md:leading-[2.0vw] tracking-tight text-zinc-900 font-bold font-heading">
                      Transforming <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">offline businesses</span> <br className="hidden md:block" />
                      into powerful <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">online digital assets.</span>
                    </h1>
                  </Copy>
                </div>

                {/* Subtitle / Copy */}
                <div className="w-full mb-10">
                  <Copy animateOnScroll={false} delay={0.2}>
                    <h4 className="text-zinc-505 text-justify text-[3.2vw] md:text-[0.75vw] leading-[4.8vw] md:leading-[1.15vw] max-w-[90%] font-normal font-sans normal-case">
                      We engineer high-performance digital products, custom AI applications, and premium web ecosystems that turn operational challenges into powerful growth engines and bottom-line margins.
                    </h4>
                  </Copy>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 z-20">
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

                  <Link href="https://cal.com/adityaarya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-zinc-300 bg-white/40 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all duration-300 font-bold text-[3.5vw] md:text-[0.9vw] text-zinc-800 group shadow-sm backdrop-blur-sm h-[12vw] md:h-[3vw]">
                    <span>Book Strategy Call</span>
                    <MdOutlineArrowOutward className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Dynamic Parallax Hero Image Card */}
              <div className="w-full md:w-[45%] h-full flex items-center justify-center z-10 relative mt-4 md:mt-0">
                <div ref={imageCardRef} className="w-full aspect-[4/3] md:aspect-auto md:h-[70vh] rounded-3xl overflow-hidden border border-emerald-500/10 shadow-[0_20px_50px_rgba(4,120,87,0.03)] bg-zinc-50/50 backdrop-blur-md relative group">
                  
                  {/* Subtle glass reflection effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />
                  
                  <Image 
                    src="/autonomix_emerald_hero.png"
                    alt="Autonomix AI Platform Mockup"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>

            </div>
            {/* Animation section */}
            <div
              ref={box}
              className="relative w-full md:h-[100vh] h-[60vh] flex items-center justify-center z-20 mt-[2vw]"
            >
              <div className="w-full h-full  sticky flex items-center justify-between">
                <div className="relative w-full h-full flex">
                  <div
                    ref={firstBox}
                    className="w-1/3 h-full  absolute p-[1vw] hidden md:flex"
                  >
                    {/* first box */}
                    {/* rounded-4xl */}
                    <div className="w-full h-full bg-zinc-50  object-cover overflow-hidden border-zinc-50 border-[2vw]">
                      <div className=" w-full h-[5vw]  py-[1vw]">
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

                  <div className="video h-full w-full object-cover p-[1vw] ">
                    <video
                      autoPlay
                      loop
                      muted
                      // playsInline
                      // rounded-4xl
                      className="w-full h-full object-cover "
                    >
                      <source
                        src="https://framerusercontent.com/assets/7noJ6ZABGBxwSX8scPjAZOqcOhU.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div
                    ref={secondBox}
                    className="w-1/3 h-full  absolute right-0 p-[1vw] hidden md:flex"
                  >
                    {/* <div className="w-[2vw] h-full bg-yellow-400 z-20"></div> */}
                    {/* third box */}
                    {/* rounded-4xl */}
                    <div className="w-full h-full  bg-zinc-50 object-cover overflow-hidden border-zinc-50 border-[2vw] relative">
                      <div className=" w-full h-[5vw]  py-[1vw]">
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

            {/* Bottom section for scrolling space */}
          </div>
        </div>
      </div>
    </>
  );
}












{/* <>
<div className="w-full h-[110vh] relative md:block hidden">
              <div className="absolute -top-[10vw] -right-[10vw] rounded-full">
                <Image
                  src="/Rectangle98.svg"
                  width={200}
                  height={200}
                  className="w-[50vw] h-[50vw] object-cover lg:w-[40vw] lg:h-[40vw] "
                  alt="img"
                />
              </div>
              <div className="absolute top-[55vh] -left-[6vw]  rounded-full">
                <Image
                  src="/Rectangle98.svg"
                  width={200}
                  height={200}
                  className="w-[50vw] h-[50vw] object-cover lg:w-[40vw] lg:h-[40vw] "
                  alt="img"
                />
              </div>
              <div className="w-full h-[10vh]"></div>
              <div className="w-full h-full flex flex-col">
                <div className="w-full h-[45vh]  flex ">
                  <div className="w-[50%] h-full   relative">
                    <div className="w-full h-full relative flex items-end justify-start ">
                      <h1 style={{ fontSize: "24vw", lineHeight: "22vw" }}>
                        INFRA
                      </h1>
                    </div>
                  </div>
                  <div className="w-[50%] h-full flex flex-col px-[1vw] gap-[3vw]">
                    <div className="w-full h-[80%]  flex justify-end">
                      <div className="w-[40%] h-full  flex justify-start items-end flex-col gap-[1vw] pt-[1vw]">
                        <HoverButton
                          text="see our plans"
                          textSize="text-[1.2vw]"
                          padding="p-[1vw]"
                          width="w-[13vw]"
                          height="h-[4vw]"
                          bgColor="bg-zinc-50"
                          textColor="text-zinc-900"
                        />
                        <HoverButton
                          text="work wit us"
                          textSize="text-[1.2vw]"
                          padding="p-[1vw]"
                          width="w-[13vw]"
                          height="h-[4vw]"
                          bgColor="bg-zinc-800"
                          textColor="text-zinc-50"
                        />
                      </div>
                    </div>
                    <div className="w-full h-[20%]  ">
                      <div className="w-full h-full relative flex items-start justify-end ">
                        <h4 className="text-end w-[40%]">
                          we turn customer data into margin
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[40%]  relative">
                  <div className="w-full h-full relative flex justify-between">
                    <div className="w-[30%] h-full flex flex-col relative">
                      <div className="w-full h-full relative">
                        <div className="w-full h-[90%]  px-[1vw]">
                          <div className="w-full h-[40vh] relative flex items-end justify-end ">
                            <h4 className="text-justify">
                              Autonomix AI empowers businesses with
                              cutting-edge digital services, offering web and
                              mobile app development, AI/ML solutions,
                              blockchain integration, and innovative technology
                              for seamless digital transformation.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[50%] h-full   relative">
                      <div className="w-full h-full relative flex items-end justify-end">
                        <h1 style={{ fontSize: "24vw", lineHeight: "22vw" }}>
                          WAVE
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[100vh] relative block md:hidden overflow-hidden">
              <div className="absolute top-[60vh] -left-[20vw]  rounded-full">
                <Image
                  src="/Rectangle98.svg"
                  width={200}
                  height={200}
                  className="w-[50vw] h-[50vw] object-cover lg:w-[40vw] lg:h-[40vw] "
                  alt="img"
                />
              </div>
              <div className="absolute top-[10vh] -right-[20vw]  rounded-full">
                <Image
                  src="/Rectangle98.svg"
                  width={200}
                  height={200}
                  className="w-[50vw] h-[50vw] object-cover lg:w-[40vw] lg:h-[40vw] "
                  alt="img"
                />
              </div>
              <div className="w-full h-[100%] relative flex items-start justify-start flex-col px-[2vw]">
                <div className="w-full h-[60%] relative flex flex-col justify-end">
                  <div className="w-full h-fit  flex flex-col">
                    <h1 style={{ fontSize: "40vw", lineHeight: "40vw" }}>
                      Infra
                    </h1>
                    <h1 style={{ fontSize: "45vw", lineHeight: "40vw" }}>
                      wave
                    </h1>
                  </div>
                  <div className="w-full ">
                    <h3>we turn customer data into margin</h3>
                  </div>
                </div>
                <div className="w-full h-[40%] relative gap-[10vw] flex flex-col justify-end">
                  <div className="w-full flex justify-between">
                    <HoverButton
                      text="work wit us"
                      textSize="text-[5.2vw]"
                      padding="p-[1vw]"
                      width="w-[45vw]"
                      height="h-[15vw]"
                      bgColor="bg-zinc-800"
                      textColor="text-zinc-50"
                    />

                    <HoverButton
                      text="see our plans"
                      textSize="text-[5.2vw]"
                      padding="p-[1vw]"
                      width="w-[45vw]"
                      height="h-[15vw]"
                      bgColor="bg-zinc-200"
                      textColor="text-zinc-950"
                    />
                  </div>
                  <p
                    style={{ fontSize: "5vw", lineHeight: "6vw" }}
                    className="text-[2.2vw] text-justify"
                  >
                    Autonomix AI empowers businesses with cutting-edge
                    digital services, offering web and mobile app development,
                    AI/ML solutions, blockchain integration, and innovative
                    technology for seamless digital transformation.
                  </p>
                </div>
              </div>
            </div>
</> */}