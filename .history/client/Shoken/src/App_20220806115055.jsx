import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './components/Footer'


import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <button>hlloDFL dfjskdjfks dfjsldjfklsd</button>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default App