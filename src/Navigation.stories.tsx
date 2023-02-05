import { Story } from '@ladle/react'

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 relative">
      <Logo />
      <div className="xl:hidden">
        <Burger />
      </div>
      <NavigationItems />
      <ButtonStackLogin />
    </nav>
  )
}

export const Logo = () => {
  return (
    <a className="text-lg font-bold" href="#">
      <img className="rounded-lg" src="logo-long.png" alt="Logo" width="auto" />
    </a>
  )
}

export const Burger = () => {
  return (
    <button className="navbar-burger focus:outline-none text-indigo-900 hover:text-indigo-800">
      <svg
        className="block h-6 w-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Mobile menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </button>
  )
}

export const ButtonStackLogin = () => {
  return (
    <div className="hidden xl:flex items-center">
      <a
        className="inline-block mr-6 text-lg font-extrabold hover:text-indigo-800"
        href="#"
      >
        Log In
      </a>
      <a
        className="inline-block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
        href="#"
      >
        Sign Up
      </a>
    </div>
  )
}

export const NavigationItems = () => {
  return (
    <ul className="hidden xl:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <li>
        <a
          className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800"
          href="#"
        >
          Product
        </a>
      </li>
      <li>
        <a
          className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800"
          href="#"
        >
          Features
        </a>
      </li>
      <li>
        <a
          className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800"
          href="#"
        >
          Member Perks
        </a>
      </li>
      <li>
        <a className="text-lg font-extrabold hover:text-indigo-800" href="#">
          Roadmap
        </a>
      </li>
    </ul>
  )
}

export const MobileNavigation = () => {
  return (
    <div className="lg:hidden navbar-menu relative z-50">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <a className="mr-auto text-2xl font-bold leading-none" href="#">
            <img
              className="h-6"
              src="nigodo-assets/logo-nigodo.svg"
              alt=""
              width="auto"
            />
          </a>
          <button className="navbar-close">
            <svg
              className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="my-auto">
          <ul className="py-10">
            <li className="mb-1">
              <a
                className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                href="#"
              >
                Product
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                href="#"
              >
                Features
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                href="#"
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a
            className="block mb-6 text-center leading-6 text-lg font-extrabold hover:text-indigo-800"
            href="#"
          >
            Log In
          </a>
          <a
            className="block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
            href="#"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  )
}
