// import './App.css';
// import './Responsive.css';
// import './loader';

import React from 'react';
import {images} from "../constants";
import { IoIosArrowDown } from 'react-icons/io';

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
import videoBgMp4 from '../assets/medical.mp4';

// import {Navbar} from '../components'

const FAQ = () => {


    return (
        <>
            {/*<Navbar/>*/}
            {/* <Header/> */}
            <section id="home-4">
                <video className="home-bg-video" src={videoBgMp4} autoPlay loop muted playsInline>
                </video>
                <div id="home-overlay-2"></div>
            </section>

            <div className="map-color-3" >
                <div className="row" style={{marginRight: '0'}}>
                    <div className="home-headings tools-p-align">
                        <div className="horizontal-heading influencer-name main-section-title">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> 
                            {/* {about.name} */}
                            FAQ
                            </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <section id="about" className='main-section-content'  style={{height: '900px', display: 'table', width: '100%'}}>
                <div className="about-01 sectionBg1" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: 'white'}}>
                    <div className="container">
                    <div className="row col-mobile-top" style={{justifyContent: 'center'}}>
                    <div className="col-md-12">
                            <div className="tech-statement text-center">
                                <h1 className='styled-heading'>Frequently Asked Questions</h1>
                                <hr className='styled-divider'/>
                                    <div className='text-style'>
                                    <p className='styled-p' style={{fontWeight: '800'}}>What skincare products can I use while pregnant? </p>
                                    <p className='styled-p'>There are many safe products to use while pregnant. When considering a product, be sure the ingredients don’t include retinols, benzoyl peroxide, salicylic acid, and hydroquinone, to name a few.</p>

                                    </div>
                                
                                <hr className='styled-divider'/>
                                    <div className='text-style'>
                                    <p className='styled-p' style={{fontWeight: '800'}}>How much skincare is too much? </p>
                                    <p className='styled-p'>Skincare is important, but you can overdo it. The perfect balance of products should leave your skin feeling hydrated and soft to the touch. It shouldn’t feel tight, dry, or “squeaky clean.” We recommend discussing how much products to use, with your medical provider/aesthetician.</p>

                                    </div>
                                    <hr className='styled-divider'/>
                                    <div className='text-style'>
                                    <p className='styled-p' style={{fontWeight: '800'}}>Do skincare products expire? </p>
                                    <p className='styled-p'>Skincare products do not last forever. Once opened, these products have a limited shelf life. The exposure to air and bacteria over time can break them down. If used past the expiration date, the product may not be effective or could cause an adverse reaction.</p>

                                    </div>
                                    <hr className='styled-divider'/>
                                    {/* <div className='text-style'>
                                    <p className='styled-p' style={{fontWeight: '800'}}>Example Question? </p>
                                    <p className='styled-p'>Example Answer</p>

                                    </div>
                                    <hr className='styled-divider'/>
                                    <div className='text-style'>
                                    <p className='styled-p' style={{fontWeight: '800'}}>Example Question? </p>
                                    <p className='styled-p'>Example Answer</p>

                                    </div> */}
                            </div>
                        </div>
                            

                        </div>
                    </div>
                </div>



            </section>
            


            {/* <Portfolio/> */}

            {/* <Brands/> */}



            {/* <Services/> */}
            {/* <Statement/>
            <TextMedia/> */}

            {/* <About/> */}
            {/* <Stats/> */}
            {/* <TextMedia2/> */}
 
            <Statement2/>
        
            {/*<Media/>*/}
            {/*<Team/>*/}
            {/*<AddServices/>*/}


        </>
    );
}

export default FAQ;