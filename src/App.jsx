import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";
import About from "./Pages/About/About";

function App() {
  

  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
   
    </BrowserRouter>
  )
}

export default App
