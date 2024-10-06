import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'                                                                                            
import SignIn from './pages/Auth/Signin/Signin'
import SignUp from './pages/Auth/Signup/SignUp'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
