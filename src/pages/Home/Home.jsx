import React from 'react'
import Header from '../../components/Header'
import TypographyContent from '../../components/typography'
import CentreBody from '../../components/centreBody'
import Footer from '../../components/Footer'
import Cards from '../../components/Cardsection'
function Home () {
  return (
    <div>
          <>
        <div className='header'>
    
            <Header />
        </div>
      <div className="centrebody">
        <CentreBody/>
      </div>
      <Cards/>
    
      <Footer />
    </>
    </div>
  )
}

export default Home