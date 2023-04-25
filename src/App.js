
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import Aboutus from './components/Aboutus';
// import Contactus from './components/Contactus';
import Footer from './components/Footer';


import {
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar></Navbar>
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/aboutus' element={<Aboutus />} />
    <Route exact path='/content' element={<Content  />} />
    <Route exact path='/footer' element={<Footer  />} />
  </Routes>
    </div>
  );
}

export default App;
