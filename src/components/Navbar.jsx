export default function Navbar() {
  return (
    <div className="navbar text-neutral-content bg-slate-200">
      <div className="navbar-start">
        <button className="btn btn-ghost text-xl">
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
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  )
}
