'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  // Smoother spring configurations
  const springConfig = { 
    stiffness: 300, 
    damping: 20,
    mass: 0.1
  };

  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Separate springs for different properties for smoother animations
  const scale = useSpring(1, { stiffness: 200, damping: 30 });
  const opacity = useSpring(0.8, { stiffness: 200, damping: 30 });
  const textOpacity = useSpring(0, { stiffness: 150, damping: 35 });
  
  // Springs for size transitions
  const cursorWidth = useSpring(12, { stiffness: 180, damping: 25 });
  const cursorHeight = useSpring(12, { stiffness: 180, damping: 25 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      cursorWidth.set(80);
      cursorHeight.set(80);
      opacity.set(0.9);
      textOpacity.set(1);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      cursorWidth.set(12);
      cursorHeight.set(12);
      opacity.set(0.8);
      textOpacity.set(0);
    };

    // Add event listeners to all FAQ elements
    const faqElements = document.querySelectorAll('.faq-container, .faq-item, [data-faq]');
    
    faqElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      faqElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
      }, [mouseX, mouseY, scale, opacity, textOpacity, cursorWidth, cursorHeight]);

  return (
    <div className="hidden md:block">
      {/* Main cursor with drag text inside */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99990000099999]  flex items-center bg-zinc-950 justify-center transition-all duration-300 ease-out"
        style={{
          translateX: springX,
          translateY: springY,
          opacity: opacity,
          width: cursorWidth,
          height: cursorHeight,
          backgroundColor: '#000',
          borderRadius: '50%',
          marginLeft: useTransform(cursorWidth, (w) => -w / 2),
          marginTop: useTransform(cursorHeight, (h) => -h / 2),
        }}
      >
        <motion.span
          className="text-white text-sm font-bold transition-opacity duration-200 ease-out"
          style={{
            opacity: textOpacity,
          }}
        >
          drag
        </motion.span>
      </motion.div>
    </div>
  );
}