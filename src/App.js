import './App.scss';
import './Responsive.css';

// import {Header, About, Brands, Stats, Portfolio, Services, Media, Team, AddServices} from './container';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Homepage from "./pages/Homepage";
import { Footer } from './container';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './pages/AboutUs';



const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>} exact />
          <Route path='/about' element={<AboutUs/>} exact />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
