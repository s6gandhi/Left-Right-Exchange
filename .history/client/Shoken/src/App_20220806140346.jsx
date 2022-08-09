import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './components/Footer'


import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Services from './components/Services'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
          <Services />

        </div>
      </div>
    </div>
  )
}

export default App
