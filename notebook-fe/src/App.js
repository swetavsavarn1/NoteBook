
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Aboutus from './Components/AboutUs';
import { createContext } from 'react'
export const testcontext = createContext("abc")

function App() {
  return (
    <testcontext.Provider >
    <BrowserRouter>
      <Navbar title="NoteBook"></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
    </testcontext.Provider>
  );
}


export default App;

