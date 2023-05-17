
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Aboutus from './Components/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Navbar title="NoteBook"></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
