import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './components/Footer'


import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  console.log("im gay");
  return (

    <div className="App">
      <div>
        <button>hlloDFL dfjskdjfks dfjsldjfklsd</button>
        <Footer />

        <Navbar />

      </div>
    </div>
  )
}

export default App
