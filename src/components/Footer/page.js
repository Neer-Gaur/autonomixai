import React from "react";
import InfinityScroller from "@/commonComponent/infinityScroller/page";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <div>
      <div
        className="w-full h-[85vh] bg-zinc-950 text-zinc-300"
        style={{
          clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
        }}
      >
        <div className="w-full h-[80vh] fixed bottom-0  backdrop-blur-sm z-10 ">``
          <footer className="  h-full px-4 md:px-8 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Socials */}
            <div className="md:col-start-1 md:col-end-4 flex flex-col gap-4">
              <h1 className="text-xl md:text-3xl font-semibold">Autonomix AI</h1>
              <div className="flex gap-2">
{/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <di className="w-8 h-8 bg-zinc-50 flex items-center justify-center rounded">
                    <Image src="/footer/instagram.svg" alt="instagram" width={20} height={20} />
                  </di                v>
                </a> */}
                <a href="mailto:support@autonomixai.in" className="text-gray-400 hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-zinc-50 flex items-center justify-center rounded">
                    <Image src="/footer/email.svg" alt="email" width={20} height={20} />
                  </div>
                </a>
                <a href="https://wa.me/917496976144" className="text-gray-400 hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-zinc-50 flex items-center justify-center rounded">
                    <Image src="/footer/whatsapp.svg" alt="whatsapp" width={20} height={20} />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/adityaarya25" className="text-gray-400 hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-zinc-50 flex items-center justify-center rounded">
                    <Image src="/footer/linkedin.svg" alt="linkedin" width={20} height={20} />
                  </div>
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="md:col-start-11 md:col-end-13 flex flex-col gap-2 text-sm md:text-base">
              <h2 className="text-xl font-semibold underline">Quick Links</h2>
              <br />
              {["work", "about", "contact", "privacy-policy"].map((item, i) => (
                <h2 key={i}><Link key={i} href={`/${item}`} className="hover:underline">
                {item === "privacy-policy" ? "Privacy Policy" : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link></h2>
              ))}
            </div>

            {/* <div className="md:col-start-11 md:col-end-13 flex flex-col gap-2 text-sm md:text-base">
              {[
                "Shipping & Delivery",
                "Privacy Policy",
                "Revocation",
                "Terms & Conditions",
                "Imprint",
                "Press kit",
              ].map((item, i) => (
                <a key={i} href="#" className="hover:underline">
                  {item}
                </a>
              ))}
            </div> */}

            {/* Description */}
            <div className="md:col-start-1 md:col-end-7 mt-4 text-xs md:text-sm leading-snug">
              <p className="">
                Autonomix AI empowers businesses through cutting-edge digital services, including web and mobile development, AI/ML solutions, blockchain integration, and innovative technologies for seamless digital transformation.
              </p>
            </div>

            {/* Brands */}
            <div className="md:col-start-1 md:col-end-13 flex flex-wrap justify-center items-center gap-4 md:gap-8">
              <InfinityScroller />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
