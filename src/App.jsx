import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="bg-slate-200 text-raisin-black">
      <Navbar />
      <div className="sm:mx-8 lg:mx-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
