'use client';

import { useEffect, useRef } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import gsap from 'gsap';
import { Heading } from 'lucide-react';

export default function HoverButton({
    text = "root",
    textSize = "text-[1vw]",
    padding = "1vw",
    width = "w-[10vw]",
    height = "h-[3vw]",
    bgColor = "bg-zinc-50",
    textColor = "text-zinc-900",
    onClick
  }) {
  const hoverRef = useRef(null);
  const upperTextRef = useRef(null);
  const lowerTextRef = useRef(null);
  const upperArrowRef = useRef(null);
  const lowerArrowRef = useRef(null);

  useEffect(() => {
    const hoverEl = hoverRef.current;
    const upperText = upperTextRef.current;
    const lowerText = lowerTextRef.current;

    const handleEnter = () => {
      gsap.set([upperText], { y: '0%' });
      gsap.set([lowerText], { y: '100%' });

      gsap.timeline()
        .to([upperText], { y: '-100%', duration: 0.4, ease: 'power2.out' }, 0)
        .to([lowerText], { y: '0%', duration: 0.4, ease: 'power2.out' }, 0);
    };

    const handleLeave = () => {
      gsap.set([upperText], { y: '0%' });
      gsap.set([lowerText], { y: '100%' });
    };

    hoverEl.addEventListener('mouseenter', handleEnter);
    hoverEl.addEventListener('mouseleave', handleLeave);

    return () => {
      hoverEl.removeEventListener('mouseenter', handleEnter);
      hoverEl.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={hoverRef}
      className={`${width} ${height} ${bgColor} flex items-center justify-center relative overflow-hidden ${textColor} cursor-pointer rounded border border-zinc-950/30`}
      style={{
        fontFamily: "var(--smallheading)",
        padding: padding
      }}
      onClick={onClick}
    >
      <div className="w-[70%] h-full flex items-center justify-center relative overflow-hidden">
        <span
          ref={upperTextRef}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          style={{ padding: padding }}
        >
          <h6 className={`${textSize} ${textColor}`}>{text}</h6>
        </span>
        <span
          ref={lowerTextRef}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center translate-y-full"
          style={{ padding: padding }}
        >
          <h6 className={`${textSize} ${textColor}`}>{text}</h6>
        </span>
      </div>
    </div>
  );
}
