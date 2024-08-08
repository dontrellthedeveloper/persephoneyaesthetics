import './App.css';
import './Responsive.css';

// import {Header, About, Brands, Stats, Portfolio, Services, Media, Team, AddServices} from './container';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Homepage from "./pages/Homepage";
import { Footer } from './container';
import Navbar from './components/Navbar/Navbar';



const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>} exact />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
