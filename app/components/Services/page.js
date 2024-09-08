"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const Services  = () => {


  return (
    <section className="py-8 px-7 flex flex-col gap-2 items-center justify-center mt-9">
    <h1 className="text-underline josefin-sans-bolder lg:text-[4rem] text-[2rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Our Services </h1>
    <div className="mt-3 flex flex-wrap items-center gap-4 justify-center ">
        <div className="h-[15rem] w-[20rem] bg-gradient-to-r from-purple-500 to-pink-500 py-5 px-11 rounded-lg">
            {/* img */}
            <div className="flex items-center justify-center ">
            <Image
                  src="/s1.png"
                  width={110}
                  height={110}
                  alt="logo"
                  className="focus:border-none active:border-none text-center"
                />
            </div>
            {/* text */}
            <div className="py-3">
               <h1 className="text-[1.5rem] font-bold text-center poppins-medium">Website Development</h1>
              
            </div>
        </div>
        <div className="h-[15rem] w-[20rem] bg-gradient-to-r from-purple-500 to-pink-500 py-5 px-11 rounded-lg">
            {/* img */}
            <div className="flex items-center justify-center ">
            <Image
                  src="/s2.png"
                  width={110}
                  height={110}
                  alt="logo"
                  className="focus:border-none active:border-none text-center"
                />
            </div>
            {/* text */}
            <div className="py-3">
               <h1 className="text-[1.5rem] font-bold text-center poppins-medium">Graphic Design</h1>
              
            </div>
        </div>
        <div className="h-[15rem] w-[20rem] bg-gradient-to-r from-purple-500 to-pink-500 py-5 px-11 rounded-lg">
            {/* img */}
            <div className="flex items-center justify-center ">
            <Image
                  src="/s3.png"
                  width={110}
                  height={110}
                  alt="logo"
                  className="focus:border-none active:border-none text-center"
                />
            </div>
            {/* text */}
            <div className="py-3">
               <h1 className="text-[1.5rem] font-bold text-center poppins-medium">Ghostwriting</h1>
              
            </div>
        </div>
        
    </div>

<div className="mt-3 flex flex-wrap items-center gap-4 justify-center ">
<div className="h-[15rem] w-[20rem] bg-gradient-to-r from-purple-500 to-pink-500 py-5 px-11 rounded-lg">
            {/* img */}
            <div className="flex items-center justify-center ">
            <Image
                  src="/s4.png"
                  width={110}
                  height={110}
                  alt="logo"
                  className="focus:border-none active:border-none text-center"
                />
            </div>
            {/* text */}
            <div className="py-3">
               <h1 className="text-[1.5rem] font-bold text-center poppins-medium">SEO</h1>
              
            </div>
        </div>
        <div className="h-[15rem] w-[20rem] bg-gradient-to-r from-purple-500 to-pink-500 py-5 px-11 rounded-lg">
            {/* img */}
            <div className="flex items-center justify-center ">
            <Image
                  src="/s5.png"
                  width={110}
                  height={110}
                  alt="logo"
                  className="focus:border-none active:border-none text-center"
                />
            </div>
            {/* text */}
            <div className="py-3">
               <h1 className="text-[1.5rem] font-bold text-center poppins-medium">Digital Marketing</h1>
              
            </div>
        </div>
        <div className="h-[15rem] w-[20rem] bg-gradient-to-r from-purple-500 to-pink-500 py-5 px-11 rounded-lg">
            {/* img */}
            <div className="flex items-center justify-center ">
            <Image
                  src="/s6.png"
                  width={110}
                  height={110}
                  alt="logo"
                  className="focus:border-none active:border-none text-center"
                />
            </div>
            {/* text */}
            <div className="py-3">
               <h1 className="text-[1.5rem] font-bold text-center poppins-medium">Social Media Marketing</h1>
              
            </div>
        </div>
</div>
</section>
  )
}



export default Services 