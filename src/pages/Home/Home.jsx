import React from 'react'
import Header from '../../components/Header'
import TypographyContent from '../../components/typography'
import CentreBody from '../../components/centreBody'
import Footer from '../../components/Footer'
import Cards from '../../components/Cardsection'
import Card from '../../components/Card' 
import cardData from '../../components/cardData.json'
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
      {cardData.map((card, index) => (
                <Card key={index} data={card} />
            ))}
      <Footer />
    </>
    </div>
  )
}

export default Home