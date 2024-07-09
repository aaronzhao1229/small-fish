import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="footer footer-center bg-raisin-black text-white pt-10 border-t border-raisin-black">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover" to={`about`}>
          About me
        </Link>
        <Link className="link link-hover" to={`acoustic`}>
          Acoustic Engineering
        </Link>
        <Link className="link link-hover" to={`software`}>
          Software Development
        </Link>

        <Link className="link link-hover" to={`contact`}>
          Contact
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            className="hover:cursor-pointer"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/jian-aaron-zhao-15b61b11a/'
              )
            }
          >
            <img src="../linkedin.svg" className="h-8 w-8 text-white" />
          </a>
          <a
            className="hover:cursor-pointer"
            onClick={() =>
              window.open(
                'https://www.youtube.com/channel/UCDgruhS_hmyWRDExmHbvfCg'
              )
            }
          >
            <img src="../youtube.svg" className="h-8 w-8 text-white" />
          </a>
          <a
            className="hover:cursor-pointer"
            onClick={() =>
              window.open(
                'https://www.facebook.com/profile.php?id=100009251809661'
              )
            }
          >
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
