import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './components/Footer'


import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)
  console.log("im gay");
  return (

    <div className="App">
      <div>
        <button>hlloDFL dfjskdjfks dfjsldjfklsd</button>
        <Footer />

        <Header />

      </div>
    </div>
  )
}

export default App
