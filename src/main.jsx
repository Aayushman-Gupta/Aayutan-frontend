import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Usercontextprovider from './context/userContext/usercontextprovider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercontextprovider>
    <App />
    </Usercontextprovider>
  </StrictMode>,
)
