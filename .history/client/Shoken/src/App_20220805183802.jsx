import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Header />
      </div>
    </div>
  )
}

export default App
