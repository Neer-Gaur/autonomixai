"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const PROJECTS_DATA = [
  {
    _id: "68b4a9a054dc19eabb55d437",
    name: "NGN Learning",
    description:
      "NGN Learning - Globally Inspired. Emotionally Grounded. A New Era in Preventive Mental Health for Children/Teens, Practitioners and Caregivers",
    liveLink: "https://www.ngnlearning.com",
    domain: "Web Development",
    sector: "Education",
    index: 2,
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1756670676309-Generated%20Image%20September%2001%2C%202025%20-%201_33AM.jpeg",
    technologies: ["HTML", "Tailwind Css", "Wordpress", "PHP"],
    features: [],
    status: "active",
  },
  {
    _id: "683e92e1783bbf7c61ad36af",
    name: "Derxo",
    description:
      "A next-gen healthcare portal built to enable users to book consultations, access health records, and connect with medical professionals - all within a secure and user-friendly interface.",
    liveLink: "https://derxo.com",
    domain: "Web Development",
    sector: "Healtcare",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748931296978-derxo.png",
    technologies: ["Next.JS", "Tailwind Css", "AWS"],
    features: [
      "Online Product Catalog",
      "Responsive Design",
      "Social Media Integration",
    ],
    status: "active",
    index: 3,
  },
  {
    _id: "683e997b783bbf7c61ad36bc",
    name: "Derxo Admin Panel",
    description:
      "An internal admin dashboard for the Derxo healthcare system to manage appointments, track patient progress, and handle analytics - providing operational visibility for medical teams.",
    liveLink:
      "https://drive.google.com/file/d/1ANbUc0I6cPkRmKqkiLrmpVRN11nEC3bb/view?usp=sharing",
    domain: "Web Development",
    sector: "CRM",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748932987149-derxo%20admin.png",
    technologies: ["React.Js", "Node.Js", "Netlify"],
    features: ["Dynamic Dashboard", "Medicine Management", "Email", "Integration"],
    status: "active",
    index: 6,
  },
  {
    _id: "683e9c0f783bbf7c61ad36c0",
    name: "TPR Admin Panel",
    description:
      "A robust CRM system developed for The Planet Reserve to manage client interactions, monitor leads, automate workflows, and provide a 360deg view of the customer lifecycle.",
    liveLink:
      "https://drive.google.com/file/d/1-SRX70Yj1QTWUQcH_VttodG_4gqNFg6l/view?usp=sharing",
    domain: "Web Development",
    sector: "CRM",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748933647282-tpr%20admin.png",
    technologies: ["React.Js", "Node.Js", "AWS"],
    features: ["Dashboard", "Analytics", "Role-Based Access", "User Management"],
    status: "active",
    index: 7,
  },
  {
    _id: "683e9e87783bbf7c61ad36c8",
    name: "NoCapsFood",
    description:
      "An e-commerce platform that brings fresh and ready-to-cook food products directly to consumers. Built for quick ordering, high performance, and a seamless checkout experience.",
    liveLink: "https://nocapfoods.com",
    domain: "Web Development",
    sector: "Shopify",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748934278356-nocaps.png",
    technologies: ["Liquid", "Storefront API", "Shiprocket"],
    features: [
      "Secure Checkout",
      "SEO Optimized",
      "Order Tracking",
      "Multiple Payment Options",
    ],
    status: "active",
    index: 8,
  },
  {
    _id: "683eac2e783bbf7c61ad36d0",
    name: "Silisoul",
    description:
      "A trendy fashion store powered by Shopify - designed for smooth shopping, modern aesthetics, and conversion-focused product pages that drive engagement.",
    liveLink: "https://www.silisoul.com",
    domain: "Web Development",
    sector: "Shopify",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748937771589-silisoul.png",
    technologies: ["Liquid", "Storefront API", "Mailchimp"],
    features: [
      "Secure Checkout",
      "Analytics & Reporting",
      "Order Tracking",
      "Wishlist & Favorites",
    ],
    status: "active",
    index: 9,
  },
  {
    _id: "683eefc0783bbf7c61ad36e9",
    name: "SFA - Store Management System",
    description:
      "A smart field automation tool for sales and inventory tracking. Enables retailers and distributors to maintain stock levels, record transactions, and access real-time reporting.",
    liveLink:
      "https://drive.google.com/file/d/1wcFYK4gJzACd-q8GI6LA4uyfYcB-7C5v/view?usp=sharing",
    domain: "App Development",
    sector: "Management Platform",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748955226294-sfa.png",
    technologies: ["React-Native", "Node.Js", "MongoDb"],
    features: [
      "Sales Tracking",
      "Transaction Recording",
      "Real-Time Reporting",
      "Automation & Smart Insights",
    ],
    status: "active",
    index: 10,
  },
  {
    _id: "683eed46783bbf7c61ad36e5",
    name: "Sikhaid - Management System",
    description:
      "A powerful backend system to support Sikhaid's operations - including content uploads, beneficiary tracking, event planning, and donor relationship management.",
    liveLink:
      "https://drive.google.com/file/d/1GV2vrEH4Oi0fFDlgirXDFzB84mVtp0wH/view?usp=sharing",
    domain: "App Development",
    sector: "Management Platform",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748954437863-sikhaid%20mobile.png",
    technologies: ["React-Native", "Node.Js", "MongoDb"],
    features: ["Donor Management", "Dashboard & Reports", "User & Role Management"],
    status: "active",
    index: 11,
  },
  {
    _id: "683eec33783bbf7c61ad36e2",
    name: "Lineup",
    description:
      "A scheduling and management solution tailored for teams and businesses. It simplifies internal planning, event coordination, and task assignments with clarity and ease.",
    liveLink:
      "https://drive.google.com/file/d/11NxlcYgF7ANz4Pq0V9QSDfBACUuon4bF/view?usp=sharing",
    domain: "App Development",
    sector: "Community Platforms",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748954163077-lineup.png",
    technologies: ["React-Native", "Node.Js", "Stripe"],
    features: ["Event Hosting", "Payments & Ticketing", "Location & Map Integration"],
    status: "active",
    index: 12,
  },
  {
    _id: "683eeaf6783bbf7c61ad36de",
    name: "GoAmigo - Admin Panel",
    description:
      "A comprehensive admin platform for a vehicle rental startup - built to manage vehicles, handle bookings, track real-time usage, and generate invoices with flexible billing logic",
    liveLink:
      "https://drive.google.com/file/d/1IvF-0Cptd6FGrzVFFltJM4fRZiqYPKij/view?usp=sharing",
    domain: "App Development",
    sector: "CRM",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748953845477-goamigo.png",
    technologies: ["React-Native", "Node.Js", "MongoDB"],
    features: [
      "Vehicle Management",
      "Booking Management",
      "Billing & Invoicing",
      "User Management",
    ],
    status: "active",
    index: 13,
  },
  {
    _id: "683eafe3783bbf7c61ad36d8",
    name: "1776 Patriots Outfits",
    description:
      "An American patriotic apparel brand, offering a Shopify-powered shopping experience with easy navigation, mobile responsiveness, and a bold theme reflecting brand values.",
    liveLink: "https://1776patriotsoutfitters.myshopify.com",
    domain: "Web Development",
    sector: "Shopify",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748938723140-1776%20patriots.png",
    technologies: ["Liquid", "Storefront API", "Easyship"],
    features: [
      "Inventory Tracking",
      "Product Variants",
      "Advanced Search & Filtering",
    ],
    status: "active",
    index: 14,
  },
  {
    _id: "683eadfe783bbf7c61ad36d4",
    name: "SimpleObjectz",
    description:
      "A niche store selling custom phone skins and accessories. Built with a clean UI and minimalistic layout to highlight product details and improve user experience.",
    liveLink: "https://www.simpleobjectz.com/",
    domain: "Web Development",
    sector: "Shopify",
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1748938236989-simpleobjectz.png",
    technologies: ["Liquid", "Storefront API", "Dawn Theme"],
    features: ["Modern UI/UX", "Clean Navigation", "SEO Optimized.Secure Checkout"],
    status: "active",
    index: 15,
  },
  {
    _id: "684d9d2054dc19eabb55c657",
    name: "360SEEL",
    description:
      "360SEEL is a comprehensive educational assessment mobile application built with React Native/Expo that facilitates holistic student evaluation through a dual-role system.",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.ybrut.android.steplnsa&pcampaignid=web_share",
    domain: "App Development",
    sector: "Management Platform",
    index: 16,
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1749916960440-Screenshot%202025-06-14%20at%209.31.25%C3%A2%C2%80%C2%AFPM.png",
    technologies: ["React Native", "NodeJs", "AWS"],
    features: [
      "Assessment Management",
      "Multi-Role Dashboard",
      "PDF report generation",
    ],
    status: "active",
  },
  {
    _id: "684da1db54dc19eabb55c671",
    name: "MarketersClique",
    description:
      "Marketers Clique is a community designed for social media marketers to connect, learn, and grow together. You can join discussions, share content, like posts, comment, upload images, and be part of a vibrant network of marketers worldwide.",
    liveLink: "https://www.marketersclique.com",
    domain: "Web Development",
    sector: "Community Platform",
    index: 17,
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1749918280825-tempImage6TuxUs.jpeg",
    technologies: ["NextJs", "NodeJs", "Supabase"],
    features: [
      "Building Real Networks",
      "Experts & Peers Together",
      "Collaboration",
    ],
    status: "active",
  },
  {
    _id: "697f8cdc54dc19eabb55e52a",
    name: "Fixacity",
    description:
      "We are building an AI-based platform focused on youth and students. The platform is designed to help users in the age group of 15-30 by providing emotional support, giving AI-based career guidance, and helping users connect with people globally (US, UK, Asia, and other regions).",
    liveLink: "https://example.com",
    domain: "App Development",
    sector: "AI Based Platform",
    index: 50,
    image:
      "https://goamigorentals-images.s3.ap-south-1.amazonaws.com/1769966812917-WhatsApp%20Image%202026-02-01%20at%2022.54.46.jpeg",
    technologies: ["React native", "Django", "Postgresql", "AWS"],
    features: [],
    status: "active",
  },
];

export default function WorkPage() {
  const projects = PROJECTS_DATA;
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSector, setActiveSector] = useState("All");
  const [sectors, setSectors] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    productGoals: ''
  });

  const filters = ["All", "Web Development", "App Development", "UI/UX Development","Blockchain Development","AI/ML"];

  // Update sectors when domain filter changes
  useEffect(() => {
    if (activeFilter === "All") {
      setSectors([]);
      setActiveSector("All");
      return;
    }

    const uniqueSectors = [...new Set(
      projects
        .filter(project => project.domain === activeFilter)
        .map(project => project.sector)
    )];
    setSectors(uniqueSectors);
    setActiveSector("All");
  }, [activeFilter, projects]);

  const filteredProjects = projects.filter(project => {
    const domainMatch = activeFilter === "All" || project.domain === activeFilter;
    const sectorMatch = activeSector === "All" || project.sector === activeSector;
    return domainMatch && sectorMatch;
  });

  const handleCardClick = (projectId) => {
    // Toggle active card for mobile
    setActiveCard(activeCard === projectId ? null : projectId);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      const projectName = selectedProject?.name || "General Project Inquiry";
      const whatsappText = [
        `*Project Quote Request - ${projectName}*`,
        `*Project Name*: ${projectName}`,
        `*Full Name*: ${formData.fullName}`,
        `*Email*: ${formData.email}`,
        `*Mobile Number*: ${formData.mobileNumber || "N/A"}`,
        ``,
        `*Product Goals*:`,
        formData.productGoals || "N/A"
      ].join("\n");

      const whatsappUrl = `https://wa.me/917496976144?text=${encodeURIComponent(whatsappText)}`;
      window.open(whatsappUrl, '_blank');
      
      // Clear form and close modal
      setFormData({
        fullName: '',
        email: '',
        mobileNumber: '',
        productGoals: ''
      });
      setIsFormModalOpen(false);
      
      alert('Opening WhatsApp to send your quote request...');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="h-[40vh] bg-zinc-900 flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
          Our Projects
        </h1>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Domain Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-zinc-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Sector Filters */}
        {sectors.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveSector("All")}
              className={`px-4 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                activeSector === "All"
                  ? "bg-zinc-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`px-4 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeSector === sector
                    ? "bg-zinc-800 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              onClick={() => handleCardClick(project._id)}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[500px] flex flex-col relative transform hover:-translate-y-2 cursor-pointer"
            >
                <div className="relative h-[250px] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay for Desktop + Active state for Mobile */}
                  <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center ${
                    activeCard === project._id 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <div className={`flex flex-col gap-3 transition-transform duration-300 ${
                      activeCard === project._id 
                        ? 'translate-y-0' 
                        : 'translate-y-4 group-hover:translate-y-0'
                    }`}>
                      {/* Live Link Button */}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 text-center flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Live
                        </a>
                      )}
                      
                      {/* Demo Booking Button */}
                      <a
                        href="https://cal.com/adityaarya"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 text-center flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Book Demo
                      </a>
                      
                      {/* Contact Form Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                          setIsFormModalOpen(true);
                        }}
                        className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 text-center flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Get Quote
                      </button>
                    </div>
                  </div>
                  
                  {/* Corner Badge for Domain */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-gray-700">{project.domain}</span>
                  </div>

                  {/* Mobile Tap Indicator */}
                  <div className={`md:hidden absolute bottom-4 left-4 right-4 text-center transition-opacity duration-300 ${
                    activeCard === project._id ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-medium">Tap for options</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-col h-full">
                    {/* Title Section */}
                    <div className="mb-4">
                      <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {project.name}
                      </h2>
                      {project.sector && (
                        <p className="text-sm text-gray-500 mt-1">{project.sector}</p>
                      )}
                    </div>

                    {/* Description Section */}
                    <div className="flex-1 mb-4">
                      <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies Section */}
                    <div className="grid grid-cols-3 gap-2 mt-auto">
                      {project.technologies?.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs text-center truncate group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies?.length > 3 && (
                        <span className="px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-xs text-center">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Modal */}
      {isFormModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setIsFormModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <textarea
                  name="productGoals"
                  placeholder="Tell us about your product and goals"
                  value={formData.productGoals}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-zinc-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-zinc-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
