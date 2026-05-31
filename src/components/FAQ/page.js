import Copy from "@/commonComponent/textEffect/Copy";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS_DATA = [
  {
    _id: "683d8f27787076a4b4e9b5d3",
    question: "What services does Autonomix AI offer?",
    answer:
      "We provide web and app development, UI/UX design, AI & machine learning solutions, blockchain development, and digital marketing-all under one roof.",
    order: 0,
  },
  {
    _id: "683d8f5a787076a4b4e9b5d6",
    question: "How do you handle project timelines?",
    answer:
      "We follow a clear, milestone-based approach with regular updates, so you always know where things stand.",
    order: 1,
  },
  {
    _id: "683d8f6e787076a4b4e9b5d9",
    question: "Will I get support after the project is completed?",
    answer:
      "Absolutely! We offer ongoing support for updates, improvements, or anything else you need post-launch.",
    order: 2,
  },
  {
    _id: "683d8f7e787076a4b4e9b5dc",
    question: "How do you price your projects?",
    answer:
      "Our pricing depends on the scope, features, and timeline. After understanding your needs, we'll share a transparent, no-surprises quote.",
    order: 3,
  },
  {
    _id: "68546a7654dc19eabb55c942",
    question: "How do I get started with Autonomix AI?",
    answer:
      "Just drop us a message or fill out the contact form on our website. We'll set up a quick chat to understand what you need and take it from there. No pressure, no salesy pitch-just a real conversation.",
    order: 4,
  },
];

export default function FAQ() {
  const faqs = [...FAQS_DATA].sort((a, b) => a.order - b.order);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto px-4 md:px-6 lg:px-8 mx-auto flex justify-center flex-col items-center relative overflow-hidden py-12 bg-zinc-50 text-zinc-950">
      {/* <div className="absolute top-[30vh] -right-[10vw] rounded-full z-0 opacity-50 md:opacity-75 lg:opacity-100">
        <Image
          src="/Rectangle98.svg"
          width={800}
          height={500}
          className="w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] lg:w-[40vw] lg:h-[40vw] object-cover"
          alt="background decoration"
        />
      </div> */}

      <Copy>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">FAQ</h1>
      </Copy>

      <div className="w-full max-w-7xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq._id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h5 className="text-lg font-medium text-gray-900  w-full">{faq.question}</h5>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-4  text-gray-600 ">
                <h5 className="text-lg mt-2">{faq.answer}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        @media (max-width: 640px) {
          .perspective-1000 {
            perspective: 800px;
          }
        }
      `}</style>
    </div>
  );
}
