import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-raisin-black px-4 lg:px-6 py-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <NavLink className="btn btn-ghost" to={'/home'}>
          <div className="avatar">
            <div className="w-12 h-12 overflow-hidden rounded-lg">
              <img
                src={'../LogoSmb.jpeg'}
                alt="Logo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="text-white text-lg font-extralight">small fish</p>
        </NavLink>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 mr-2 border rounded text-white border-white hover:text-white hover:border-princeton-orange hover:text-princeton-orange"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className={'text-sm text-white hidden lg:block'}>
        <a
          href="/about"
          className="block mt-4 lg:inline-block lg:mt-0  hover:text-princeton-orange mr-4"
        >
          About
        </a>
        {/* <a
          href="/acoustic"
          className="block mt-4 lg:inline-block lg:mt-0  hover:text-princeton-orange mr-4"
        >
          Acoustic Engineering
        </a>
        <a
          href="/software"
          className="block mt-4 lg:inline-block lg:mt-0  hover:text-princeton-orange mr-4"
        >
          Software Development
        </a> */}
        <ul className="menu menu-horizontal px-1 text-white mr-4">
          <li>
            <details>
              <summary className="hover:text-princeton-orange">Services</summary>
              <ul className="p-2 z-10 w-52 text-raisin-black">
                <li className="rounded-lg">
                  <a href="/acoustic">Acoustic Engineering</a>
                </li>
                <li className="rounded-lg">
                  <a href="/software">Software Development</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>

        <a
          href="/contact"
          className="block mt-4 lg:inline-block lg:mt-0  hover:text-princeton-orange mr-4"
        >
          Contact
        </a>
      </div>

      {isOpen && (
        <div className="w-full block flex-grow lg:hidden ml-6">
          <div className="text-sm lg:flex-grow">
            <a
              href="/home"
              className="block mt-1 text-white hover:text-princeton-orange hover:bg-slate-700 pr-4 rounded flex items-center"
            >
              <div className="inline-block w-10 h-10 overflow-hidden rounded-lg">
                <img
                  src={'../LogoNoBackground.png'}
                  alt="Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-2"> Home</div>
            </a>
            <a
              href="/about"
              className="block text-white hover:text-princeton-orange hover:bg-slate-700 pr-4 rounded flex items-center"
            >
              <div className="inline-block w-10 h-10 overflow-hidden rounded-lg">
                <img
                  src={'../LogoNoBackground.png'}
                  alt="Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-2">About</div>
            </a>
            <a
              href="/acoustic"
              className="block text-white hover:text-princeton-orange hover:bg-slate-700 pr-4 rounded flex items-center"
            >
              <div className="inline-block w-10 h-10 overflow-hidden rounded-lg">
                <img
                  src={'../LogoNoBackground.png'}
                  alt="Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-2">Acoustic Engineering</div>
            </a>
            <a
              href="/software"
              className="block text-white hover:text-princeton-orange hover:bg-slate-700 pr-4 rounded flex items-center"
            >
              <div className="inline-block w-10 h-10 overflow-hidden rounded-lg">
                <img
                  src={'../LogoNoBackground.png'}
                  alt="Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-2">Software Development</div>
            </a>
            <a
              href="/contact"
              className="block text-white hover:text-princeton-orange hover:bg-slate-700 pr-4 rounded flex items-center"
            >
              <div className="inline-block w-10 h-10 overflow-hidden rounded-lg">
                <img
                  src={'../LogoNoBackground.png'}
                  alt="Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-2">Contact</div>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
