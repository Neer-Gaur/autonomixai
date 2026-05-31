"use client";

import React from "react";
import { AnimatedTestimonials } from "./infinite-moving-cards";

const TESTIMONIALS_DATA = [
  {
    _id: "68547c3054dc19eabb55ca4b",
    name: "Babulal Gupta",
    position: "Owner",
    company: "Gupta Transport Compay",
    content:
      "Autonomix AI built a clean, efficient platform that streamlined our logistics and billing workflows. Their responsive, detail-driven team understood our industry and delivered real value.",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1750367280819-babulal.jpeg",
    rating: 5,
  },
  {
    _id: "68547a7754dc19eabb55ca39",
    name: "Vishal Lohat",
    position: "Tech Lead",
    company: "NGN Learning",
    content:
      "Autonomix AI truly understood our vision for NGN Learning and turned it into a seamless, impactful app. The team was proactive, reliable, and a joy to work with.",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1750366839123-vishal.png",
    rating: 5,
  },
  {
    _id: "6854794c54dc19eabb55ca2e",
    name: "Sanjeev Tanna",
    position: "CEO & Founder",
    company: "Sanjeev Tanna Education Private Limited",
    content:
      "Autonomix AI transformed our broken codebase into a stable, scalable mental health app. Their technical skill and reliability impressed us so much, we hired them for our next project too.",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1750366540101-sanjeev.png",
    rating: 5,
  },
  {
    _id: "685473a454dc19eabb55c9d4",
    name: "Shreya Singh",
    position: "General Manager",
    company: "360 SEEL",
    content:
      "Working with Autonomix AI on the 360 Seel app was seamless-they truly understood our vision and delivered a user-friendly, feature-rich platform. Their blend of clean design and smart functionality impressed both our team and users.",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1750366347412-360seel.png",
    rating: 5,
  },
  {
    _id: "68491175267b8f854c8960ba",
    name: "Ankush Goyal",
    position: "Founder",
    company: "Derxo",
    content:
      "Working with Autonomix AI was super smooth. They really got what we were trying to build and made it even better. Great team, easy to work with, and solid results.",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1750368299627-ankush.png",
    rating: 4,
  },
];

export default function TestimonialsPage() {
  const testimonials = TESTIMONIALS_DATA;

  return (
    <div className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with us
          </p>
        </div>
        
        <AnimatedTestimonials
          items={testimonials}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="mt-8"
        />
      </div>
    </div>
  );
}
