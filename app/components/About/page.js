"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {


  return (
    <motion.div className="flex flex-wrap items-center gap-8 justify-center py-3 my-1 px-5 mb-9"id="about">
    <motion.div
    initial={{ y: -10 }}
    animate={{ y: 10 }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }}
     >
         <Image src="/about-img.png" 
         width={"16rem"}
         height={"20rem"}
         alt="" className="shadow-md h-[20rem] lg:h-[29rem] lg:w-[29rem] w-[16rem]  object-cover  object-top"/>
     </motion.div>
        <motion.div 
        className="w-[37rem] h-[12rem] flex flex-col "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
        >
            <h1 className="text-underline josefin-sans-bolder lg:text-[4rem] text-[2rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">About Us</h1>
          <p className="poppins-regular  font-bold text-white">At BrandX, we&apos;re a team of creative thinkers, strategists, and problem-solvers dedicated to helping brands thrive. With years of experience in digital marketing, we bring a fresh perspective to every project, ensuring your brand stands out in a crowded market.Our mission is to empower businesses by crafting innovative marketing strategies that drive growth and build lasting relationships with customers.
            
          </p>
         
        </motion.div>
    </motion.div>
  )
}



export default About