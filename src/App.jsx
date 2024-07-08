import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-200 text-raisin-black">
      <Navbar />
      <div className="mx-2">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
