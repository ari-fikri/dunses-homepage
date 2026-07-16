import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactGA from 'react-ga4'

// Initialize GA4 with your Measurement ID
ReactGA.initialize('G-Z5QRT26N2D')
// Track initial pageview
ReactGA.send({ hitType: 'pageview', page: window.location.pathname })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
