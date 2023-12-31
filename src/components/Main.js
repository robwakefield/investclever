'use client'

import { useRouter } from 'next/navigation'
import { usePostHog } from 'posthog-js/react'
import { rootHREF } from '@/rootHREF'

export default function Main() {
  const posthog = usePostHog()
  const router = useRouter()

  const download_button = () => {
    var email = document.getElementById("email_input").value
    if (email){
      posthog?.identify(email)
    }
    posthog?.capture('Clicked Download Now');
    router.push('coming-soon')
  }

  const get_link_btn = <a 
      className="inline-flex items-center w-1/2 sm:w-1/3 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
      href={rootHREF + "coming-soon"}
      onClick={download_button}
    >
    <span className="justify-center w-full">Get Link</span>
    </a>

  return (
    <section className="text-white body-font">
      <div className="max-w-7xl mx-auto flex px-5 pb-24 pt-6 sm:pt-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-2/3 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-10 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl text-center md:text-start sm:text-center items-center Avenir font-semibold xl:w-2/2 text-white">
            Want to improve your Financial Literacy?
          </h1>
          <p className="mb-4 xl:w-3/4 text-center md:text-start sm:text-center text-white text-lg">
            Invest Clever is a brand new app to help young people improve their knowledge of the financial world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center">
            <a
              className="inline-flex items-center invisible h-0 sm:h-auto sm:visible sm:px-5 sm:py-3 sm:mt-2 font-medium text-white hover:text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg hover:bg-gray-300"
              href={rootHREF + "#info"}
            >
              <span className="justify-center">Find out more</span>
            </a>
            <a
              className="inline-flex items-center sm:mx-4 px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform border rounded-lg sm:bg-sky-700 sm:hover:bg-sky-600"
              href={rootHREF + "#download"}
            >
              <span className="justify-center">Download Now</span>
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
      <div id="info" className="grr max-w-7xl pt-0 sm:mx-auto mx-10 text-center">
        <h1 className="mb-8 sm:text-6xl text-5xl Avenir font-semibold text-white">
          Your Road to Success
        </h1>
        <h1 className="mb-8 sm:text-2xl text-l text-center Avenir font-semibold text-white text-center">
          Here's how Invest Clever can help improve your financial knowledge
        </h1>
        <div className="flex flex-col sm:flex-row justify-between sm:mx-24 items-center">
          <div className="pb-4">
            <img
              className="w-40"
              alt="Invest Clever"
              src="/investclever/mockups/guide.png"
            ></img>
            <h3 className="Avenir font-semibold text-center">
              Interactive Guides
            </h3>
          </div>
          <div className="pb-4">
            <img
              className="w-40"
              alt="Invest Clever"
              src="/investclever/mockups/trading.png"
            ></img>
            <h3 className="Avenir font-semibold text-center">
              Practice Trading
            </h3>
          </div>
          <div className="pb-4">
            <img
              className="w-40"
              alt="Invest Clever"
              src="/investclever/mockups/forum.png"
            ></img>
            <h3 className="Avenir font-semibold text-center">
              Peer to Peer Forum
            </h3>
          </div>
          <div className="pb-4">
            <img
              className="w-40"
              alt="Invest Clever"
              src="/investclever/mockups/news.png"
            ></img>
            <h3 className="Avenir font-semibold text-center">
              Breaking News
            </h3>
          </div>
        </div>
      </div>
      <section id="download" className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-24">
            <h1 className="mb-5 sm:text-6xl text-5xl Avenir font-semibold text-white">
              Download Now
            </h1>
            <h1 className="mb-9 sm:text-2xl text-xl font-semibold text-white">
              Enter your email address to receive a download link
            </h1>
            <div className="pb-2">
              <input
                id="email_input"
                placeholder="jack@example.com"
                name="email"
                type="email"
                autoComplete="email"
                className="border border-gray-600 w-2/2 sm:w-1/3 pr-2 pl-2 py-3 mt-2 rounded-md text-black font-semibold hover:border-gray-900"
              ></input>{" "}
            </div>
            {get_link_btn}
          </div>
        </div>
      </section>
    </section>
  );
}