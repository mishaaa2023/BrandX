"use client"
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Hero = () => {


  return (
    <motion.div className="flex flex-wrap items-center gap-8 justify-center my-3"  id="about">
      
        <motion.div 
        className="h-[20rem] lg:h-[29rem] lg:w-[29rem] w-[16rem] flex flex-col items-center gap-2 py-7 px-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
        >
            <h1 className="text-underline josefin-sans-bolder lg:text-[4rem] text-[2rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Welcome to BrandX</h1>
          <p className="poppins-regular  font-bold text-white">At BrandX, we&apos;re a team of creative thinkers, strategists, and problem-solvers dedicated to helping brands thrive. With years of experience in digital marketing, we bring a fresh perspective to every project, ensuring your brand stands out in a crowded market.
          </p>
        </motion.div>
        <motion.div
       initial={{ y: -10 }}
       animate={{ y: 10 }}
       transition={{
         duration: 2,
         ease: "easeInOut",
         repeat: Infinity,
         repeatType: "reverse",
       }}
       className="py-11 px-3"
        >
            <Image src="/IMG2.avif" alt="" className="shadow-md h-[20rem] lg:h-[29rem] lg:w-[29rem] w-[16rem]  object-cover  object-top "
            style={{borderRadius:"50%"}}
            width={"16rem"}
            height={"20rem"}
            />
        </motion.div>
    </motion.div>
  )
}



export default Hero