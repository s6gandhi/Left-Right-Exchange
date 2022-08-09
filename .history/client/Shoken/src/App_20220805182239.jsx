import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Header } from './components';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1> Hello</h1>
        <Header />
      </div>
    </div>
  )
}

export default App
