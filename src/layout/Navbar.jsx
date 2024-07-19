import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="navbar text-white bg-raisin-black py-2 border-b-2 border-slate-300 sm:px-2 lg:px-8">
      <div className="navbar-start">
        <NavLink className="btn btn-ghost sm:hidden" to={'/home'}>
          <div className="avatar">
            <div className="w-20 h-12 overflow-hidden rounded-lg">
              <img
                src={'../logo.WEBP'}
                alt="Logo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </NavLink>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle sm:hidden flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow text-raisin-black"
          >
            <li>
              <Link to={`home`}>Home</Link>
            </li>

            <li>
              <Link className="btn btn-ghost" to={`about`}>
                About
              </Link>
            </li>
            <li>
              <Link to={`acoustic`}>Acoustic Engineering</Link>
            </li>
            <li>
              <Link to={`software`}>Software Development</Link>
            </li>
            <li>
              <Link to={`contact`}>Contact</Link>
            </li>
          </ul>
        </div>
        <NavLink className="btn btn-ghost hidden sm:flex" to={'/home'}>
          <div className="avatar">
            <div className="w-20 h-12 overflow-hidden rounded-lg">
              <img
                src={'../logo.WEBP'}
                alt="Logo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="text-white">small fish</p>
        </NavLink>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 text-white hidden sm:flex">
          <li>
            <Link className="btn btn-ghost" to={`about`}>
              About
            </Link>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2 z-10 w-52 text-raisin-black">
                <li className="rounded-lg">
                  <Link to={`acoustic`}>Acoustic Engineering</Link>
                </li>
                <li className="rounded-lg">
                  <Link to={`software`}>Software Development</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to={`contact`}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
