"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { teamMembers } from "@/data/teamData";
import Copy from "@/commonComponent/textEffect/Copy";

const TeamMemberCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-10%" }}
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card Container */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-white/20 hover:border-white/30 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-[380px] md:h-[420px] overflow-hidden flex-shrink-0">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            style={{ objectPosition: 'center top' }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* LinkedIn Hover Button */}
          <motion.a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:bg-[#0077B5] hover:text-white shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>
 
          {/* Role Badge */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-gray-800 text-xs font-semibold">{member.role}</span>
            </div>
          </div>
        </div>
 
        {/* Content Container */}
        <div className="p-6 bg-white flex-grow flex flex-col justify-center">
          <div className="text-center">
            <h3 className="text-gray-900 font-heading text-xl md:text-2xl font-bold mb-2">
              {member.name}
            </h3>
            <p className="text-gray-600 text-base font-medium mb-1">
              {member.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
 
export default function TeamSection() {
  // Show all team members or filter for key leadership positions
  const keyMembers = teamMembers.filter(member => 
    member.role.toLowerCase().includes('ceo') || 
    member.role.toLowerCase().includes('cto') || 
    member.role.toLowerCase().includes('coo') ||
    member.role.toLowerCase().includes('founder') ||
    member.role.toLowerCase().includes('chief') ||
    member.role.toLowerCase().includes('head') ||
    member.role.toLowerCase().includes('lead') ||
    member.role.toLowerCase().includes('senior') ||
    member.role.toLowerCase().includes('manager')
  );
 
  // If we have fewer than 4 key members, show all team members
  const displayMembers = keyMembers.length >= 4 ? keyMembers : teamMembers;
 
  return (
    <section className="w-full min-h-screen py-20 px-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 px-[2vw]">
        {/* Section Header */}
        <div className="w-full mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Copy>
              <h1 className="text-white mb-6">Meet Our Team</h1>
            </Copy>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              The talented professionals behind Autonomix AI, each bringing unique expertise 
              and passion to deliver exceptional digital experiences and innovative solutions.
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayMembers.map((member, index) => (
              <TeamMemberCard 
                key={member.id} 
                member={member} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
