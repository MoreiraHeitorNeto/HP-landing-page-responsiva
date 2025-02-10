import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './components/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='App'>
      <Header />
      <MainContent />
      <Footer />
    </div>
    
  </StrictMode>,
)
