import React from "react"

const Contact = () => {
  return (
    <section className="text-white body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <img src="/c.png" alt="" className="shadow-md  object-cover  object-top"/>
     
    </div>
    <div className="h-full lg:w-1/3 md:w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col md:ml-auto w-full py-6 px-6 mt-8 md:mt-0">
      <h2 className="text-white text-lg mb-1 font-medium title-font">Contact Us</h2>
      <p className="leading-relaxed mb-5 text-white">Let"s discuss the project.</p>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-white">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-white">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-white">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className=" bg-purple-900 text-white border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Send</button>
     
    </div>
  </div>
</section>
  )
}

export default Contact