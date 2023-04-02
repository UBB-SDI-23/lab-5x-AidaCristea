import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

export const GlobalURL="http://16.170.210.14";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
