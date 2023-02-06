export const Hero = () => {
  return (
    <section className="relative pb-24 pt-24">
      <img
        className="hidden md:block absolute top-0 right-0 w-36 sm:w-1/2 lg:w-auto lg:h-full object-contain"
        src="background-orange-right.svg"
        alt=""
      />
      <div className="container px-4 mx-auto relative">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="lg:max-w-lg">
              <span className="text-xl md:text-2xl font-extrabold text-indigo-500">
                Free &amp; Open Source
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mt-1 mb-6 lg:text-4l">
                A game is only as good as its assets.
              </h1>
              <p className="md:text-2xl font-extrabold leading-8 mb-10 text-base">
                I'm different. I'm the only commissioned Asset Store where you
                can find consistent quality content for the Unity Engine. Did I
                mention I write about game design too?
              </p>
              <div className="flex flex-wrap -mx-2 mb-6">
                <div className="w-full md:w-auto lg:w-7/12 px-2 mb-2 md:mb-0">
                  <input
                    className="block w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="w-full md:w-auto lg:w-5/12 px-2">
                  <a
                    className="inline-flex w-full md:w-auto items-center justify-center h-full py-4 px-5 leading-6 text-md text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 rounded transition duration-200"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap items-center">
                <div className="flex mr-8 items-center">
                  <img
                    className="block w-6 h-6 mr-2 object-contain"
                    src="circle-icon-green.svg"
                    alt=""
                  />
                  <span className="text-lg font-extrabold">
                    Monthly Updates
                  </span>
                </div>
                <div className="flex items-center">
                  <img
                    className="block w-6 h-6 mr-2 object-contain"
                    src="circle-icon-green.svg"
                    alt=""
                  />
                  <span className="text-lg font-extrabold">
                    Learn about Game Design
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <img
              className="block h-128 lg:h-140 w-full xl:max-w-lg object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
              src="character.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.storyName = 'Gamekaiju / Hero'
