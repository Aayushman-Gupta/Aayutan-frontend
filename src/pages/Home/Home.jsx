import React from 'react'
import Header from '../../components/Header'
import TypographyContent from '../../components/typography'
import CentreBody from '../../components/centreBody'
import Footer from '../../components/Footer'
import Cards from '../../components/Cardsection'
import Consultant from '../../components/Consultant'
function Home() {
  return (
    <div>
      <>
        <div className='header'>

          <Header />
        </div>
        <div className="centrebody">
          <CentreBody />
          <Consultant/>
        </div>

        <Footer />
      </>
    </div>
  )
}

export default Home