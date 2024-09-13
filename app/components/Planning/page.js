import React from "react"
import Image from "next/image";

const Planning = () => {
  return (
    <section className="py-8 px-7 flex flex-col gap-2 items-center justify-center mt-9">
        <h1 className="text-underline josefin-sans-bolder lg:text-[4rem] text-[2rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">How we plan to take your project</h1>
        <div className="mt-3 flex flex-wrap items-center gap-9 justify-center ">
            <div className="h-[21rem] w-[20rem] bg-gradient-to-r from-purple-500 to-pink-500 py-5 px-7 rounded-lg">
                {/* img */}
                <div >
                <Image
                      src="/p-icon1.png"
                      width={110}
                      height={110}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                </div>
                {/* text */}
                <div className="">
                   <h1 className="text-[1.5rem] font-bold">Discuss your goals </h1>
                   <p>Achieving our client"s goals is our main motive.We will discuss your goals,problems your facing,your ideas and how we can help you achieve them.</p>
                </div>
            </div>
            <div className="h-[21rem] w-[20rem] bg-gradient-to-r from-purple-500 to-pink-500 py-5 px-7 rounded-lg">
                {/* img */}
                <div >
                <Image
                      src="/p-icon2.png"
                      width={110}
                      height={110}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                </div>
                {/* text */}
                <div className="">
                   <h1 className="text-[1.5rem] font-bold">Crafting your idea</h1>
                   <p>After understanding your problems and ideas our team will focus on solving your problem to help you achieve your dream goal.We will stay in touch with you throughout this process.</p>
                </div>
            </div>
            <div className="h-[21rem] w-[20rem] bg-gradient-to-r from-purple-500 to-pink-500 py-5 px-7 rounded-lg">
                {/* img */}
                <div >
                <Image
                      src="/p-icon4.png"
                      width={110}
                      height={110}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                </div>
                {/* text */}
                <div >
                   <h1 className="text-[1.5rem] font-bold">Delivering</h1>
                   <p>After you"ve approved our work we will deliver you the final outcome. Simple right?
                   </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Planning