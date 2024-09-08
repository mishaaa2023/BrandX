"use client"
import { motion } from "framer-motion";
import Image from 'next/image';

const Projects = () => {


  return (
    <section className="py-8 px-7 flex flex-col gap-2 items-center justify-center mt-9">
    <h1 className="text-underline josefin-sans-bolder lg:text-[4rem] text-[2rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Our Projects</h1>
    <div className="mt-3 flex flex-wrap items-center gap-4 justify-center ">
        <div className="h-[15rem] w-[20rem] bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
        style={{
            backgroundImage: "url('/pr1.png')",
            backgroundSize: "cover",        // Adjusts the size of the image
            backgroundPosition: "center",   // Centers the image
            backgroundRepeat: "no-repeat",  // Prevents the image from repeating
            
            backgroundColor: "#000",        // Fallback color while the image is loading
          }}
        >
           <div className="h-[10rem] w-[15rem] bg-[rgba(0, 0, 0, 0.7)]   rounded-lg py-3 flex flex-col items-center"
           style={{height: "15rem",width: "20rem",background: "rgba(0, 0, 0, 0.7)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
           <h1 className="text-[1.5rem] font-bold text-center poppins-medium text-white">Logo Design</h1>
              
           </div>
            {/* text */}
           
        </div>
        <div className="h-[15rem] w-[20rem] bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
        style={{
            backgroundImage: "url('/pr2.avif')",
            backgroundSize: "cover",        // Adjusts the size of the image
            backgroundPosition: "center",   // Centers the image
            backgroundRepeat: "no-repeat",  // Prevents the image from repeating
            
            backgroundColor: "#000",        // Fallback color while the image is loading
          }}
        >
           <div className="h-[10rem] w-[15rem] bg-[rgba(0, 0, 0, 0.7)]   rounded-lg py-3 flex flex-col items-center"
           style={{height: "15rem",width: "20rem",background: "rgba(0, 0, 0, 0.7)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
           <h1 className="text-[1.5rem] font-bold text-center poppins-medium text-white">Website development</h1>
              
           </div>
            {/* text */}
           
        </div>
        <div className="h-[15rem] w-[20rem] bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
        style={{
            backgroundImage: "url('/pr3.avif')",
            backgroundSize: "cover",        // Adjusts the size of the image
            backgroundPosition: "center",   // Centers the image
            backgroundRepeat: "no-repeat",  // Prevents the image from repeating
            
            backgroundColor: "#000",        // Fallback color while the image is loading
          }}
        >
           <div className="h-[10rem] w-[15rem] bg-[rgba(0, 0, 0, 0.7)]   rounded-lg py-3 flex flex-col items-center"
           style={{height: "15rem",width: "20rem",background: "rgba(0, 0, 0, 0.7)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
           <h1 className="text-[1.5rem] font-bold text-center poppins-medium text-white">Digital Marketing</h1>
              
           </div>
            {/* text */}
           
        </div>
        
    </div>


</section>
  )
}



export default Projects