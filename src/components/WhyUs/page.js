import React from 'react'
import SwipperScroller from "@/components/SwipperScroller/page";
import Copy from '@/commonComponent/textEffect/Copy';



export default function WhyUsPage(){
  return (
    <div>
      <div className="w-full md:h-[90vh] h-[90vh] flec items-center justify-between flex-col leading-none ">
        <div className="w-full h-[20vh] md:h-[15vh] grid grid-cols-5 p-[1vw] md:pt-[3vw] pt-[15vw]">
        <Copy><h1 className='col-start-1 col-end-5 text-zinc-950'>why us ???</h1></Copy>
         
        </div>
        <div className="w-full h-[98vh] flex items-center justify-center flex-col md:pt-[2vw] pt-[0vw]">
            
          <div className="md:w-[72%] w-[90%] h-full"><SwipperScroller /></div>
        </div>
      </div>
    </div>
  )
}





