import { useState } from 'react'

import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="bg-slate-200 text-raisin-black">
      <Navbar />
    </div>
  )
}

export default App
