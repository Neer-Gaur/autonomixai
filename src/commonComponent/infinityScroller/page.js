import React from 'react'
import { motion } from 'framer-motion'
// import ParallaxImage from './parallaxImage';

const InfinityScroller = ({direction , bgColor , text}) => {
  // Array of text items
  const scrollItems = [
    "Design & Development",
    "Artificial Intelligence",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Cloud Computing",
    "Data Science",
    "Machine Learning",
    "Design & Development",
    "Artificial Intelligence",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Cloud Computing",
    "Data Science",
    "Machine Learning"
  ];

  return (
    <div className="w-full relative overflow-hidden  md:mt-2 -mt-2"  style={{ backgroundColor: `var(${bgColor})`, color: `var(${text})` }}>
      
    
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
              ease: "linear"
            }}
          >
            {[...scrollItems, ...scrollItems].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center"
              >
                <h2 className="text-xl px-[0.5vw] md:text-2xl font-medium whitespace-nowrap lowercase" style={{color: `var(${text})`}}>
                  {item}
                </h2>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>  
  )
}

export default InfinityScroller


