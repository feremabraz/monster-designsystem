import { Story } from '@ladle/react'

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 relative">
      <a className="text-lg font-bold" href="#">
        <img
          className="rounded-lg"
          src="logo-long.png"
          alt="Logo"
          width="auto"
        />
      </a>
      <div className="xl:hidden">
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
      </div>
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
    </nav>
  )
}
