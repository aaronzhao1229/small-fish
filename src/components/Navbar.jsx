export default function Navbar() {
  return (
    <div className="navbar text-neutral-content bg-slate-200 py-2">
      <div className="navbar-start">
        <button className="btn btn-ghost">
          <div className="avatar">
            <div className="w-20 h-12 overflow-hidden rounded-lg">
              <img
                src={'../logo.WEBP'}
                alt="Logo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="text-raisin-black">Small Fish</p>
        </button>
      </div>

      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1 text-raisin-black">
          <li>
            <a>About</a>
          </li>
          <li>
            <details>
              <summary>What I do</summary>
              <ul className="p-2 z-10 w-52">
                <li>
                  <a>Acoustic Engineering</a>
                </li>
                <li>
                  <a>Software Development</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  )
}
