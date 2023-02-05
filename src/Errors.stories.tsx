import { Story } from "@ladle/react"

export const ErrorPage: Story<{
  code: string
  aclaration: string
  description: string
  image: string
}> = ({ code, aclaration, description, image }) => {
  return (
    <section className="pt-26 lg:py-40 xl:py-52 min-h-screen bg-orange-200 relative">
      <img
        className="hidden lg:block top-0 left-0 w-2/5 border-r-3 border-b-3 border-indigo-900 shadow-lg object-cover absolute h-full"
        src={image}
        alt=""
      />
      <div className="container px-4 mx-auto">
        <div className="flex mb-14 lg:mb-0">
          <div className="w-full lg:w-1/2 ml-auto">
            <span className="inline-flex mb-4 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border border-indigo-900 bg-green-200 uppercase">
              {code}
            </span>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-heading mb-3">
              {aclaration}
            </h1>
            <p className="text-xl font-extrabold leading-7 mb-6">
              {description}
            </p>
            <div className="flex flex-wrap items-center">
              <a
                className="inline-block w-full md:w-auto py-4 px-6 mb-4 md:mb-0 md:mr-4 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                href="#"
              >
                Go back to Homepage
              </a>
              <a
                className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                href="#"
              >
                Try Again
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ErrorPage.args = {
  code: 'Error 404',
  aclaration: 'Not Found',
  description: 'The page you requested does not exist.',
  image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw1fHxlcnJvcnxlbnwwfHx8fDE2NTg3OTUzODE&ixlib=rb-1.2.1&q=80&w=1920'
}
