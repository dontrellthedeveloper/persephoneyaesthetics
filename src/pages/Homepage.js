// import './App.css';
// import './Responsive.css';
// import './loader';

import React from 'react';

import {
    Header,
    // About,
    // Brands,
    // Stats,
    // Portfolio,
    // Services,
    // Media,
    // Team,
    // AddServices,
    Statement,
    Stats,
    // Footer
} from '../container';
import About from '../container/About/About';

// import {Navbar} from '../components'

const Homepage = () => {


    return (
        <>
            {/*<Navbar/>*/}
            <Header/>

            {/* <Portfolio/> */}

            {/* <Brands/> */}



            {/* <Services/> */}
            <Statement/>
            <About/>


            <Stats/>
            {/*<Media/>*/}
            {/*<Team/>*/}
            {/*<AddServices/>*/}


        </>
    );
}

export default Homepage;