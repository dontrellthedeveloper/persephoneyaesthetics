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
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import { FaWeightScale } from 'react-icons/fa6';
import { FaRegEye, FaRegHandshake } from 'react-icons/fa';
// import {Navbar} from '../components'

const Services = () => {


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
                        <div className="horizontal-heading influencer-name">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> 
                            {/* {about.name} */}
                            Botox
                            </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <section id="about" style={{height: 'calc(100vh - 300px)', display: 'table', width: '100%', paddingTop: '60px'}}>
                <div className="about-01 sectionBg1" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: 'white'}}>
                    <div className="container">
                    <div className="row col-mobile-top" style={{justifyContent: 'center'}}>
                            {/* Right Side */}
                            <div className="col-md-6 col-sm-12 col-mobile" style={{display: 'table'}}>
                                <div className="about-right" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                    <h1 className='styled-heading2'>Botox</h1>
                                    <hr className='styled-divider'/>
                                        <div className='text-style2'>
                                        <p className='styled-p'>S&N Aesthetics is a premier reputable medical spa, specializing in laser hair removal, Botox, lip filler, teeth whitening, non surgical fat reduction, and weight loss. </p>
                                        <p className='styled-p'>Combining proven methods, quality products, advanced devices, and a highly professional and experienced team, S&N Aesthetics is your best choice for a most relaxing and rejuvenating experience.</p>
                                            <h4>Join us now, you deserve it</h4>
                                        </div>
                                    <hr className='styled-divider'/>
                                    </div>

                       

                                </div>
                            </div>
                            {/* Left Side */}
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                    <div className="portfolio-item">
                                        <img src={images.medical} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                </div>


                            </div>
                            

                        </div>
                    </div>
                </div>



            </section>


            <section id="about" style={{height: 'calc(100vh - 300px)', display: 'table', width: '100%', paddingTop: '60px'}}>
                <div className="about-01 sectionBg1" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#f8f4f4'}}>
                    <div className="container">
                    <div className="row col-mobile-top" style={{justifyContent: 'center'}}>
                    <div className="col-md-12">
                            <div className="tech-statement text-center">
                                <h1 className='styled-heading'>Botox Pricing</h1>
                                <hr className='styled-divider'/>


                                <table id="customers">
                                    <tr>
                                        <th>Service</th>
                                        <th>Pricing</th>
                                        {/* <th>Country</th> */}
                                    </tr>
                                    <tr>
                                        <td>Botox Unit</td>
                                        <td>$13</td>
                                        {/* <td>Germany</td> */}
                                    </tr>
                                    <tr>
                                        <td>Xeomin Unit</td>
                                        <td>$12</td>
                                        {/* <td>Sweden</td> */}
                                    </tr>
                                    <tr>
                                        <td>Underarm Sweating</td>
                                        <td>$1200</td>
                                        {/* <td>Mexico</td> */}
                                    </tr>
                                    <tr>
                                        <td>Lip Flip</td>
                                        <td>$100</td>
                                        {/* <td>Austria</td> */}
                                    </tr>
                                    
                                    </table>


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

            <About/>
            {/* <Stats/> */}
            {/* <TextMedia2/> */}
 
            <Statement2/>
        
            {/*<Media/>*/}
            {/*<Team/>*/}
            {/*<AddServices/>*/}


        </>
    );
}

export default Services;