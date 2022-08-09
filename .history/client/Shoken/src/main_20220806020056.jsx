import React from 'react'
import ReactDOM from 'react-dom/client'
import { MoralisProvider } from 'react-moralis'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MoralisProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MoralisProvider>
)
