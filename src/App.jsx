import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'                                                                                            
import SignIn from './pages/Auth/Signin/SignIn'
import SignUpDoctor from './pages/Auth/Signup/SignUpDoctor'
import Chat from './pages/Chat/ChatList'
import AppointmentFilterBar from './pages/Appointment/Appointment'
import Appointment from './pages/Appointment/Appointment'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signIn" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUpDoctor/>}/>
      <Route path="/chat" element={<Chat/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
