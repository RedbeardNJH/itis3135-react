import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Introduction from './Introduction.jsx'
import Introductions from './Introductions.jsx'
import Contract from './Contract.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Contract" element={<Contract />} />
        <Route path="/Introductions" element={<Introductions />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)