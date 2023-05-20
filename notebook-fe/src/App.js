
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Aboutus from './Components/AboutUs';
import Notes from './Components/Notes';
import { createContext, useState } from 'react';
export const userContext = createContext(null)
function App() {
  const [userToken, setUserToken] = useState("")
  const userContextValue = { userToken: "eyJhbGciOiJIUzI1NiJ9.NjQ1YmRjNjRjMmU3NDBkNjg0ZWNiNjhh.y-aPHDkV7t1hm9KVv4UVUwKvENAOvvp7drlcwaifESY", setUserToken };

  return (
    <userContext.Provider value={userContextValue}>
      <BrowserRouter>
      <Routes>
          <Route path='/home' element={<><Navbar title="NoteBook"></Navbar> <Home /></>} />
          <Route path='/about' element={<><Navbar title="NoteBook"></Navbar><Aboutus /></>} />
          <Route path='/your-notes' element={<><Navbar title="NoteBook"></Navbar><Notes /></>} />
      </Routes>
    </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;

