import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'                                                                                            
import SignIn from './pages/Auth/Signin/SignIn'
import SignUp from './pages/Auth/Signup/SignUp'
import Chat from './pages/Chat/Chat'
import AppointmentFilterBar from './pages/Appointment/Appointment'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
