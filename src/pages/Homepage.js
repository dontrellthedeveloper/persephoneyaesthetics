// import './App.css';
// import './Responsive.css';
// import './loader';

import React from 'react';

import {
    Header,
    About,
    // Brands,
    // Stats,
    // Portfolio,
    // Services,
    // Media,
    // Team,
    // AddServices,
    Statement,
    Stats,
    Statement2,
    TextMedia,
    TextMedia2,
    // Footer
} from '../container';
// import About from '../container/About/About';

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
            <TextMedia/>

            <About/>
            <Stats/>
            <TextMedia2/>
 
            <Statement2/>
        
            {/*<Media/>*/}
            {/*<Team/>*/}
            {/*<AddServices/>*/}


        </>
    );
}

export default Homepage;