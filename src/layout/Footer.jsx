import { Link, NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="footer footer-center bg-raisin-black text-white pt-10 border-t border-raisin-black">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover" to={`about`}>
          About me
        </Link>
        <Link to={`acoustic`}>Acoustic Engineering</Link>
        <Link to={`software`}>Software Development</Link>

        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <img src="../linkedin.svg" className="h-8 w-8 text-white" />
          </a>
          <a>
            <img src="../youtube.svg" className="h-8 w-8 text-white" />
          </a>
          <a>
            <img src="../facebook.svg" className="h-8 w-8 text-white" />
          </a>
        </div>
      </nav>
      <aside>
        <p className="p-4">
          Copyright © ${new Date().getFullYear()} - All right reserved by Jian
          Zhao
        </p>
      </aside>
    </footer>
  )
}
