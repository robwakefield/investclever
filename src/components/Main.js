export default function Main() {
  return (
    <section className="text-white body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-2/3 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-10 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir font-semibold xl:w-2/2 text-white">
            Want to improve your Financial Literacy?
          </h1>
          <p className="mb-4 xl:w-3/4 text-white text-lg">
            Invest Clever is a brand new app to help young people improve their knowledge of the financial world.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="#info"
            >
              <span className="justify-center">Find out more</span>
            </a>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
            alt="Invest Clever"
            src="/mockup.png"
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
        <p>Row of 3 screenshots with guides, practice trading etc...</p>
      </div>
      <div id="info" className="grr max-w-7xl pt-20 sm:mx-auto mx-10 text-center">
        <h1 className="mb-8 text-6xl Avenir font-semibold text-white">
          The Big Three
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-white text-center">
          Can you answer these three financial questions?
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto py-4 rounded-lg ">
          <h3>
            Suppose you had £100 in a savings account and the interest rate was 2% per year. After 5 years, how much would you have left in the account?
          </h3>
        </div>
        <div lassName="container flex flex-col items-center justify-center mx-auto py-4 rounded-lg ">
          <h3>
            If the interest rate on your savings account was 1% per year and inflation was 2% per year, after 1 year would you be able to buy more or less with the money in the account than you would today?
          </h3>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto py-4 rounded-lg ">
          <h3>
            True or False - Buying a single company's stock usually provides a safer return that a stock mutual fund?
          </h3>
        </div>
      </div>
      <section id="download-now" className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-24">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-white">
              Download Now
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-white">
              Enter your email address to get the download link
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
                href="/"
              >
              <span className="justify-center w-full">Get Link</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}