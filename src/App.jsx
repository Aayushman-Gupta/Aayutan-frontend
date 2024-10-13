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
<<<<<<< HEAD
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUpDoctor/>}/> 
=======
      
      <Route path="/signup" element={<SignUp/>}/>
>>>>>>> db34e2182956fe16cbd2bd726a6e161700aeb97c
      <Route path="/chat" element={<Chat/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
