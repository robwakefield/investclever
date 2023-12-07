
export default function Main() {
  return (
    <section className="text-white body-font">
      <div className="max-w-7xl mx-auto flex px-5 pb-24 pt-6 sm:pt-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-2/3 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-10 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir font-semibold xl:w-2/2 text-white">
            Want to improve your Financial Literacy?
          </h1>
          <p className="mb-4 xl:w-3/4 text-white text-lg">
            Invest Clever is a brand new app to help young people improve their knowledge of the financial world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center">
            <a
              className="inline-flex items-center invisible h-0 sm:h-auto sm:visible sm:px-5 sm:py-3 sm:mt-2 font-medium text-white hover:text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg hover:bg-gray-300"
              href="#info"
            >
              <span className="justify-center">Find out more</span>
            </a>
            <a
              className="inline-flex items-center sm:mx-4 px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform border rounded-lg sm:bg-sky-700 sm:hover:bg-sky-600"
              href="#download"
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
        <h1 className="mb-8 text-6xl Avenir font-semibold text-white">
          Your Road to Success
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-white text-center">
          Here's how Invest Clever can help improve your financial knowledge
        </h1>
        <div className="flex flex-col sm:flex-row justify-between sm:mx-24">
          <div className="pb-4">
            <img
              className="w-40 md:ml-1 ml-24"
              alt="Invest Clever"
              src="/investclever/mockups/guide.png"
            ></img>
            <h3 className="Avenir font-semibold">
              Interactive Guides
            </h3>
          </div>
          <div className="pb-4">
            <img
              className="w-40 md:ml-1 ml-24"
              alt="Invest Clever"
              src="/investclever/mockups/trading.png"
            ></img>
            <h3 className="Avenir font-semibold">
              Practice Trading
            </h3>
          </div>
          <div className="pb-4">
            <img
              className="w-40 md:ml-1 ml-24"
              alt="Invest Clever"
              src="/investclever/mockups/forum.png"
            ></img>
            <h3 className="Avenir font-semibold">
              Peer to Peer Forum
            </h3>
          </div>
          <div className="pb-4">
            <img
              className="w-40 md:ml-1 ml-24"
              alt="Invest Clever"
              src="/mockups/news.png"
            ></img>
            <h3 className="Avenir font-semibold">
              Breaking News
            </h3>
          </div>
        </div>
      </div>
      <div id="info" className="grr max-w-7xl pt-20 sm:mx-auto mx-10 text-center">
        <h1 className="mb-8 text-6xl Avenir font-semibold text-white">
          The Big Three
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-white text-center">
          Can you answer these three financial questions?
        </h1>
        <div className="container flex flex-col items-center justify-center px-2 mx-auto py-2 my-4 bg-transparent border sm:border-0 rounded-lg ">
          <h3>
            Suppose you had <b>£100</b> in a savings account and the interest rate was <b>2%</b> per year. After <b>5 years</b>, how much would you have left in the account?
          </h3>
        </div>
        <div className="container flex flex-col items-center justify-center px-2 mx-auto py-2 my-4 bg-transparent border sm:border-0 rounded-lg ">
          <h3>
            If the interest rate on your savings account was <b>1%</b> per year and inflation was <b>2%</b> per year, after <b>1 year</b> would you be able to buy more or less with the money in the account than you would today?
          </h3>
        </div>
        <div className="container flex flex-col items-center justify-center px-2 mx-auto py-2 my-4 bg-transparent border sm:border-0 rounded-lg">
          <h3>
            <b>True or False</b> - Buying a single company's stock usually provides a safer return that a stock mutual fund?
          </h3>
        </div>
      </div>
      <section id="download" className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-24">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-white">
              Download Now
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-white">
              Enter your email address to receive a download link
            </h1>
            <div className="pb-2">
              <input
                placeholder="jack@example.com"
                name="email"
                type="email"
                autoComplete="email"
                className="border border-gray-600 w-1/2 sm:w-1/3 pr-2 pl-2 py-3 mt-2 rounded-md text-black font-semibold hover:border-gray-900"
              ></input>{" "}
            </div>
            <a
                className="inline-flex items-center w-1/2 sm:w-1/3 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
                href="#"
              >
              <span className="justify-center w-full">Get Link</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}