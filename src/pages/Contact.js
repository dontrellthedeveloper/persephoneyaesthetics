// import './App.css';
// import './Responsive.css';
// import './loader';

import React from 'react';
import {images} from "../constants";
import { IoIosArrowDown } from 'react-icons/io';
import GoogleMapReact from 'google-map-react';


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
import { FaFacebookF, FaGooglePlus, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';

// import {Navbar} from 'Contact../components'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {


    const defaultProps = {
        center: {
          lat: 32.776474,
          lng: -79.931053
        },
        zoom: 11
      };

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
                            Contact
                            </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <section id="about" className='main-section-content' style={{height: 'calc(100vh - 300px)', display: 'table', width: '100%'}}>
                <div className="about-01 sectionBg1" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: 'white'}}>
                    <div className="container">
                    <div className="row col-mobile-top" style={{justifyContent: 'center'}}>
                            {/* Right Side */}
                            <div className="col-md-6 col-sm-12 col-mobile" style={{display: 'table'}}>
                                <div className="about-right" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                    <h1 className='styled-heading2'>Contact Us</h1>
                                    <hr className='styled-divider'/>
                                    <p className="form-p-c" style={{marginTop: '20px', textAlign: 'center'}}>
                                        {/* {social.linkedLink && ( */}
                                            <a 
                                            // href={social.linkedLink} 
                                            href=''
                                            target='_blank'>
                                                <button className='btn btn-social-i btn-linkedIn'>
                                                    <FaLinkedin/>
                                                </button>
                                            </a>
                                        {/* )} */}


                                        {/* {social.facebookLink && ( */}
                                            <a 
                                            // href={social.facebookLink} 
                                            href=''
                                            target='_blank'>
                                                <button className='btn btn-social-i-f2 btn-facebook2'>
                                                    <FaFacebookF/>
                                                </button>
                                            </a>
                                        {/* )} */}

                                        {/* {social.instagramLink && ( */}
                                            <a 
                                            // href={social.instagramLink} 
                                             href=''
                                            target='_blank'>
                                                <button className='btn btn-social-i btn-instagram2'>
                                                    <FaInstagram/>
                                                </button>
                                            </a>
                                        {/* )} */}

                                         {/* {social.tiktokLink && ( */}
                                            <a 
                                            // href={social.tiktokLink}
                                            href=''
                                            target='_blank'>
                                                <button className='btn btn-social-i btn-tiktok2'>
                                                    <FaTiktok/>
                                                </button>
                                            </a>
                                        {/* )}  */}


                                        {/* {social.youTubeLink && ( */}
                                            <a 
                                            // href={social.youTubeLink}
                                            href=''
                                            target='_blank'>
                                                <button className='btn btn-social-i-y btn-youtube2'>
                                                    <FaYoutube/>
                                                </button>
                                            </a>
                                        {/* )} */}

                                         {/* {social.googlePlus && ( */}
                                            {/* <a 
                                              href=''
                                 
                                            target='_blank'>
                                                <button className='btn btn-social-i-y btn-google2'>
                                                    <FaGooglePlus/>
                                                </button>
                                            </a> */}
                                        {/* )}  */}
                                        </p>
                                    <hr className='styled-divider'/>
                                    </div>

                       

                                </div>
                            </div>
                            {/* Left Side */}
                            <div className="col-md-6 col-sm-12">


                                <div style={{ height: '50vh', width: '100%' }}>
                                            <GoogleMapReact
                                                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
                                                defaultCenter={defaultProps.center}
                                                defaultZoom={defaultProps.zoom}
                                            >
                                                <AnyReactComponent
                                                lat={32.776474}
                                                lng={-79.931053}
                                                text=""
                                                />
                                            </GoogleMapReact>
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

export default Contact;