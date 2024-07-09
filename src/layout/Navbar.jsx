import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="navbar text-white bg-raisin-black py-2 border-b-2 border-slate-300 sm:px-2 lg:px-8">
      <div className="navbar-start">
        <NavLink className="btn btn-ghost" to={'/home'}>
          <div className="avatar">
            <div className="w-20 h-12 overflow-hidden rounded-lg">
              <img
                src={'../logo.WEBP'}
                alt="Logo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="text-white">Small Fish</p>
        </NavLink>
      </div>

      <div className="navbar-end sm:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <Link to={`about`}>About</Link>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2 z-10 w-52 text-raisin-black">
                <li className="hover:bg-raisin-black hover:text-white rounded-lg">
                  <Link to={`acoustic`}>Acoustic Engineering</Link>
                </li>
                <li className="hover:bg-raisin-black hover:text-white rounded-lg">
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
