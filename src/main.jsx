import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/bulma/css/bulma.css'
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
