import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './components/Footer'

//import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Services from './components/Services'
import Transactions from '/components/transactions'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      {/* <div className="min-h-screen"> */}
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Services />
        <Transactions />
        <Footer />
      </div>
      {/* </div> */}
    </div>

  )
}

export default App
