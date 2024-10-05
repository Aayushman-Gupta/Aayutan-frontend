import React from 'react'
import Header from '../../components/Header'
import CentreBody from '../../components/centreBody'
import Footer from '../../components/Footer'
import Cards from '../../components/Cardsection'
import Card from '../../components/Card' 
import cardData from '../../components/cardData.json'
import VerticalCards from '../../components/verticalCards'
function Home () {
  return (
    <>
        <div className='header'>
             <Header />
        </div>
      <div className="centrebody">
             <CentreBody/>
      </div>
              {/* <Cards/> */}
      <div>
              <VerticalCards/>
      </div>
      
      {/* {cardData.map((card, index) => (
                <Card key={index} data={card} />
            ))} */}
      <Footer />
    </>
  )
}

export default Home