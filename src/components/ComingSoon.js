'use client'

import { rootHREF } from "@/rootHREF";

export default function Main() {

  return (
    <section className="text-white body-font">
      <div className="max-w-7xl mx-auto flex px-5 pb-24 pt-6 sm:pt-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-2/3 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-10 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl text-center md:text-start sm:text-center items-center Avenir font-semibold xl:w-2/2 text-white">
            Thank you for signing up!
          </h1>
          <p className="mb-4 xl:w-3/4 text-center md:text-start sm:text-center text-white text-lg">
            Invest Clever is still in development. We will email you when it becomes available for download!
          </p>
          <div className="flex flex-col sm:flex-row justify-center">
            <a
              className="inline-flex items-center invisible h-0 sm:h-auto sm:visible sm:px-5 sm:py-3 sm:mt-2 font-medium text-white hover:text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg hover:bg-gray-300"
              href={rootHREF}
            >
              <span className="justify-center">Find out more</span>
            </a>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
            alt="Invest Clever"
            src="/investclever/mockups/trading.png"
          ></img>
        </div>
      </div>
      </section>
  );
}