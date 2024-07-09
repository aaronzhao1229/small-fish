import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Home from './components/Home'
import AcousticEngineering from './components/AcousticEngineering'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'acoustic', element: <AcousticEngineering /> },
    ],
  },
])

export default router
