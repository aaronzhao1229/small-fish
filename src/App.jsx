import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="bg-slate-200 text-raisin-black">
      <Navbar />
      <div className="mx-2">
        <Outlet />
        {/* <Home /> */}
      </div>
      <Footer />
    </div>
  )
}

export default App
