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
import Chat from '../../pages/Chat/Chat.jsx'
import ChatList from '../../components/ChatList'



function Home() {
    const [isChatListVisible, setIsChatListVisible] = React.useState(false);
    
    const toggleChatListVisibility = () => {
        setIsChatListVisible(!isChatListVisible);
    };
    return (
        <>
            <div className='header'>
                <Header />
            </div>

            <div className="centrebody">
                <CentreBody />
            </div>

            {/* <Cards/> */}
            <div className="card-section flex justify-between">
                {cardData.map((data) => {
                    return <MiniCard data={data} />
                })}
            </div>

            <div>
                <Consultant />
            </div>

            <div>
                <ConsultingBox />
            </div>

            <div>
                <FAQ />
            </div>
            {/* <div>
      <VerticalCards/>
      </div> */}

            {/* <div>
        <Chat />
    </div> */}

            <div className={`fixed bottom-5 right-5 z-10 bg-white rounded-3xl ${isChatListVisible ? 'block' : 'hidden'}`}>
                <ChatList />
            </div>

            <button className="fixed bottom-5 right-5 z-10" onClick={toggleChatListVisibility}>
                <img src="../../src/assets/chat.png" alt="" className='h-20 p-5 rounded-3xl bg-blue-100' />
            </button>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default Home