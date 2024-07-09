import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from './layout/About'
import Home from './layout/Home'
import AcousticEngineering from './layout/AcousticEngineering'
import SoftwareDevelopment from './layout/SoftwareDevelopment'
import Contact from './layout/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'acoustic', element: <AcousticEngineering /> },
      { path: 'software', element: <SoftwareDevelopment /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

export default router
