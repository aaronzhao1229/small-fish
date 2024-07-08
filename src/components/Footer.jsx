export default function Footer() {
  return (
    <footer className="footer footer-center bg-raisin-black text-white pt-10 border-t border-raisin-black">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About me</a>
        <a className="link link-hover">Services</a>
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
