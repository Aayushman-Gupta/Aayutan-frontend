import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import TypographyContent from './components/typography'
import CentreBody from './components/centreBody'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <div className='header'>
    
            <Header />
        </div>
      <div className="centrebody">
        <CentreBody/>
      </div>

      <Footer />
    </>
  )
}

export default App
