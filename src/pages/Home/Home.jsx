import React from 'react'
import Header from '../../components/Header'
import CentreBody from '../../components/centreBody'
import Footer from '../../components/Footer'
// import Cards from '../../components/Cardsection'
// import Card from '../../components/Card' 
import cardData from '../../components/minicardData.json'
import VerticalCards from '../../components/verticalCards'
import FAQ from '../../components/FAQ'
import Consultant from '../../components/cosultant'
import ConsultingBox from '../../components/ConsultingBox'
import MiniCard from '../../components/MiniCard'
import '../../App.css'

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
      <div className="card-section flex justify-between">
            {cardData.map((data) => {
                return <MiniCard data={data}/>
            })}
      </div>
     

      <div>
      <Consultant/>  
      </div>
          

      <div>
      <ConsultingBox />
      </div>

      <div>
      <FAQ/>
      </div>
      {/* <div>
      <VerticalCards/>
      </div> */}
    

      <div>
      <Footer />
      </div>
    </>
  )
}

export default Home