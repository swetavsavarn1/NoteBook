
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Aboutus from './Components/AboutUs';
import Notes from './Components/Notes';
import { createContext, useState } from 'react';
import SignupLogin from './Components/signupLogin';
export const userContext = createContext(null)
function App() {
  const [userToken, setUserToken] = useState("")
  const userContextValue = { userToken, setUserToken };

  return (
    <userContext.Provider value={userContextValue}>
      <BrowserRouter>
      <Routes>
          <Route path='/home' element={<><Navbar title="NoteBook"></Navbar> <Home /></>} />
          <Route path='/about' element={<><Navbar title="NoteBook"></Navbar><Aboutus /></>} />
          <Route path='/your-notes' element={<><Navbar title="NoteBook"></Navbar><Notes /></>} />
          <Route path='/' element={<SignupLogin />}></Route>
      </Routes>
    </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;

