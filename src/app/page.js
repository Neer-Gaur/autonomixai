'use client';

import Landing from "@/components/landing/page";
import Preloader from "@/components/Preloader";
import {AnimatePresence} from "framer-motion";
import { useState ,useEffect} from "react";
import SliderProject from "@/components/SliderProject/page";
import IconsScroller from "@/components/IconScroller/page";
import AboutSection from "@/components/AboutSectionHomePage/page";
import WhyUsPage from "@/components/WhyUs/page";
import FAQ from "@/components/FAQ/page";
import ServiceSection from "@/components/ServiceSection/page";
import TeamSection from "@/components/TeamSection/page";
import Testimonials from "@/components/Testimonials/page";

// import  testimonialsData  from "@/data/testimonials";
import ScrollingText from "@/components/ScrollingText/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
      setTimeout( () => {
            setIsLoading(false);
          }, 2000)
  },[])
  return (
  <div className="">
    <AnimatePresence mode="wait">
      {isLoading && <Preloader />}
    </AnimatePresence>
    <Landing />
    
    <SliderProject />
    <ScrollingText />
    <ServiceSection />
    {/* <div className="w-full h-[80vh] bg-red-500"></div> */}
    <div className="w-full h-[50vh] md:h-[50vh]  flex flex-col justify-end items-center pb-[5vh]">
    <IconsScroller />
    </div>

    <AboutSection />
    <div 
      className="w-full h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('section.jpg')"
      }}
    ></div>
    <WhyUsPage />     
    <TeamSection />
    <Testimonials />
    <FAQ />      


    
  </div>
  
  );
}
