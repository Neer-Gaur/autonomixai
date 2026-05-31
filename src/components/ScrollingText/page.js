'use client'

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollingText() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize variables outside the animation frame
    let xPercent = 0;
    let direction = -1;
    
    // Create ScrollTrigger to control direction based on scroll
    ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        direction = self.direction * -1;
      }
    });
    
    // Create scroll-linked animation for the slider
    gsap.to(slider.current, {
      x: '-500px',
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.25
      }
    });
    
    // Animation function that runs every frame
    const animate = () => {
      if (xPercent <= -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      
      // Update the position of text elements
      if (firstText.current && secondText.current) {
        gsap.set(firstText.current, { xPercent });
        gsap.set(secondText.current, { xPercent });
      }
      
      // Increment position based on direction
      xPercent += 0.1 * direction;
      
      // Continue animation
      requestAnimationFrame(animate);
    };
    
    // Start animation
    requestAnimationFrame(animate);
    
    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="relative w-full md:h-[40vh] h-[20vh] flex items-center overflow-hidden bg-zinc-50">
      <div className="absolute">
        <div ref={slider} className="relative whitespace-nowrap">
          <h5 
            ref={firstText} 
            className="relative m-0  text-[100px] md:text-[230px] font-medium pr-12 inline-block"
          >
            Autonomix AI -
          </h5>
          <h5 
            ref={secondText} 
            className="absolute left-full top-0 m-0  text-[100px] md:text-[230px] font-medium pr-12"
          >
            Autonomix AI -
          </h5>
        </div>
      </div>
    </div>
  );
}