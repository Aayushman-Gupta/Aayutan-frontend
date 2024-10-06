import React from 'react'
import Header from '../../components/Header'
import CentreBody from '../../components/centreBody'
import Footer from '../../components/Footer'
import Cards from '../../components/Cardsection'
import Card from '../../components/Card' 
import cardData from '../../components/minicardData.json'
import VerticalCards from '../../components/verticalCards'
<<<<<<< HEAD
import FAQ from '../../components/FAQ'
import Consultant from '../../components/cosultant'
=======
import ConsultingBox from '../../components/ConsultingBox'
import MiniCard from '../../components/MiniCard'
import '../../App.css'
>>>>>>> fac1ed0781f946b195bb6b522b9e147c69eed3cd
function Home () {
  return (
    <>
        <div className='header'>
             <Header />
        </div>
      <div className="centrebody">
             <CentreBody/>
      </div>
<<<<<<< HEAD
      <div>
             <Consultant/>  
      </div>
              <FAQ/>
=======
              {/* <Cards/> */}
        <div className="card-section flex justify-between">
            {cardData.map((data) => {
                return <MiniCard data={data}/>
            })}
        </div>
>>>>>>> fac1ed0781f946b195bb6b522b9e147c69eed3cd
      <div>
            <VerticalCards/>
      </div>
    
      <ConsultingBox />
      
      <Footer />
    </>
  )
}

export default Home