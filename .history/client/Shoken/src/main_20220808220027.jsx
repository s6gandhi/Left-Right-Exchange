import React from 'react'
import ReactDOM from 'react-dom/client'
import { MoralisProvider } from 'react-moralis'
import App from './App'
import './index.css'
import TransactionContext from './context/TransactionContext'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MoralisProvider >
)
