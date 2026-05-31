// ProjectData.js

import { color } from "framer-motion";
import tpr from "@/app/assets/tpr.png"
import sikhaid from "@/app/assets/sikhaid.png"
import derxo from "@/app/assets/derxo.png"
import fitnes from "@/app/assets/fitnes.png"
import ngn from "@/app/assets/ngn.png"
import brewbliss from "@/app/assets/brewbliss.png"
import goamigo from "@/app/assets/goamigo.png"
import simpleobjectz from "@/app/assets/simpleobjectz.png"

const projects = [
   {
    color:"#fff",
    //  color: "#3B82F6", // Blue-500
     name: "The Planet Reserve",
     description: "A full-fledged sustainable marketplace enabling vendors to list and sell eco-friendly products. The platform features smooth navigation, an intuitive UI/UX, and an integrated checkout system optimized for conversions.",
     img: tpr, // Add image URL here
   },
   {
    //  color: "#F472B6", // Pink-300
    // color:"#FF4E27",
    color:"#fff",


     name: "Sikhaid",
     description: "A powerful platform for a non-profit initiative, designed to manage educational drives, streamline volunteer coordination, accept donations, and promote social impact in underprivileged communities.",
     img: sikhaid, // Using the imported image directly
   },
   {
    //  color: "#10B981", // Green-500
    // color:"#FF4E27",

    color:"#fff",


     name: "Derxo",
     description: " A next-gen healthcare portal built to enable users to book consultations, access health records, and connect with medical professionals — all within a secure and user-friendly interface.",
     img: derxo, // Add image URL here
   },
   {
    //  color: "#8B5CF6", // Purple-400
    color:"#fff",

    // color:"#FF4E27",

     name: "Fitness Tracker",
     description: "A smart and user-friendly fitness tracker app built to simplify health monitoring. Users can track workouts, steps, heart rate, and daily goals with ease. The app offers clean navigation, real-time stats, and personalized insights to stay motivated.",
     img: fitnes, // Add image URL here
   },
   {
    //  color: "#F59E0B", // Yellow-500
    color:"#fff",


     name: "NGN Learning",
     description: " A scalable school management system that covers everything from student enrollment and classroom tracking to e-learning and fee processing — built for seamless academic operations.",
     img: ngn, // Add image URL here
   },
   {
    //  color: "#22D3EE", // Sky Blue-400
    color:"#fff",

     name: "BrewBliss",
     description: " An elegant landing page for a beverage brand, focused on bold visual storytelling, product highlighting, and smooth interaction design to maximize brand impact and lead generation.",
     img: brewbliss, // Add image URL here
   },
   {
    //  color: "#D97706", // Amber-600
    color:"#fff",

     name: "Goamigo",
     description: " A comprehensive admin platform for a vehicle rental startup — built to manage vehicles, handle bookings, track real-time usage, and generate invoices with flexible billing logic.",
     img: goamigo, // Add image URL here
   },
   {
    //  color: "#F43F5E", // Rose-600
    color:"#fff",

     name: "SimpleObjectz",
     description: "A niche store selling custom phone skins and accessories. Built with a clean UI and minimalistic layout to highlight product details and improve user experience.",
     img: simpleobjectz, // Add image URL here
   },
 ];

export default projects;
