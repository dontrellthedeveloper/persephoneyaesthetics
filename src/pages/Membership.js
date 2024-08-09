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



import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaRegEye, FaRegHandshake } from 'react-icons/fa';
import { FaWeightScale } from 'react-icons/fa6';


const Membership = () => {


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
                            Membership
                            </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <section id="about" style={{height: 'calc(100vh - 300px)', display: 'table', width: '100%'}}>
                <div className="about-01 sectionBg1" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: 'white'}}>
                    <div className="content-box-main-2">
                        <div className="container">

                        <div style={{maxWidth: '700px', margin: '0 auto', textAlign: 'center'}}>
                        <h1 className='styled-heading' style={{fontSize: '32px'}}>Persephoney Aesthetics Membership Packages</h1>
                        <hr className='styled-divider'/>
                        </div>

                            <div className="row">

                            <OwlCarousel 
                                autoplay
                
                                
                                autoplayHoverPause='true'
                                autoplayTimeout='5000'
                                className='owl-theme' 
                                loop 
                                dots='true'
                        
                                margin={20}
                                nav
                                >

                                <div className="col-md-12 col-sm-12">
                                    <div className="portfolio-item">
                                        <img src={images.medical} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                    <div className="about-item text-center about-h">
                                        <FaWeightScale className="react-icon-about"></FaWeightScale>
                                        <h3>Self-Care Package</h3>
                                        <hr/>
                                        <p>Create a partnership with brands that provide increased profits and long lasting business relationships. Brands grow and Influencers share in the success of branding.</p>
                                        <div className="home-btn">
                                            <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="portfolio-item">
                                        <img src={images.medical} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                    <div className="about-item text-center about-h">
                                        <FaRegEye className="react-icon-about"></FaRegEye>
                                        <h3>The Glam Package</h3>
                                        <hr/>
                                            <p>We believe that Influencers are the key to successful business growth.  We pair elite influencers with brands that they love so that the experience is organic. </p>
                                            <div className="home-btn">
                                            <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="portfolio-item">
                                        <img src={images.medical} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                    <div className="about-item text-center about-h">
                                        <FaRegHandshake className="react-icon-about"></FaRegHandshake>
                                        <h3>Skin Care Package</h3>
                                        <hr/>
                                            <p>Our passion is to make a difference and lead by example.  Brands can count on our team to deliver an organic product integration experience.</p>
                                            <div className="home-btn">
                                            <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="portfolio-item">
                                        <img src={images.medical} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                    <div className="about-item text-center about-h">
                                        <FaWeightScale className="react-icon-about"></FaWeightScale>
                                        <h3>Drip Package</h3>
                                        <hr/>
                                        <p>Create a partnership with brands that provide increased profits and long lasting business relationships. Brands grow and Influencers share in the success of branding.</p>
                                        <div className="home-btn">
                                            <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="portfolio-item">
                                        <img src={images.medical} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                    <div className="about-item text-center about-h">
                                        <FaRegEye className="react-icon-about"></FaRegEye>
                                        <h3>Yearly Membership</h3>
                                        <hr/>
                                            <p>We believe that Influencers are the key to successful business growth.  We pair elite influencers with brands that they love so that the experience is organic. </p>
                                            <div className="home-btn">
                                            <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="portfolio-item">
                                        <img src={images.medical} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                    <div className="about-item text-center about-h">
                                        <FaRegHandshake className="react-icon-about"></FaRegHandshake>
                                        <h3>Detox Package</h3>
                                        <hr/>
                                            <p>Our passion is to make a difference and lead by example.  Brands can count on our team to deliver an organic product integration experience.</p>
                                            <div className="home-btn">
                                            <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="portfolio-item">
                                        <img src={images.medical} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                    <div className="about-item text-center about-h">
                                        <FaWeightScale className="react-icon-about"></FaWeightScale>
                                        <h3>Hair Restoration</h3>
                                        <hr/>
                                        <p>Create a partnership with brands that provide increased profits and long lasting business relationships. Brands grow and Influencers share in the success of branding.</p>
                                        <div className="home-btn">
                                            <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="portfolio-item">
                                        <img src={images.medical} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                    <div className="about-item text-center about-h">
                                        <FaRegEye className="react-icon-about"></FaRegEye>
                                        <h3>Liquid Lipo</h3>
                                        <hr/>
                                            <p>We believe that Influencers are the key to successful business growth.  We pair elite influencers with brands that they love so that the experience is organic. </p>
                                            <div className="home-btn">
                                            <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="portfolio-item">
                                        <img src={images.medical} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                    <div className="about-item text-center about-h">
                                        <FaRegHandshake className="react-icon-about"></FaRegHandshake>
                                        <h3>Teeth Whitening</h3>
                                        <hr/>
                                            <p>Our passion is to make a difference and lead by example.  Brands can count on our team to deliver an organic product integration experience.</p>
                                            <div className="home-btn">
                                            <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="portfolio-item">
                                        <img src={images.medical} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                    <div className="about-item text-center about-h">
                                        <FaWeightScale className="react-icon-about"></FaWeightScale>
                                        <h3>Chemical Peel</h3>
                                        <hr/>
                                        <p>Create a partnership with brands that provide increased profits and long lasting business relationships. Brands grow and Influencers share in the success of branding.</p>
                                        <div className="home-btn">
                                            <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="portfolio-item">
                                        <img src={images.medical} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                    <div className="about-item text-center about-h">
                                        <FaRegEye className="react-icon-about"></FaRegEye>
                                        <h3>IV Therapy</h3>
                                        <hr/>
                                            <p>We believe that Influencers are the key to successful business growth.  We pair elite influencers with brands that they love so that the experience is organic. </p>
                                            <div className="home-btn">
                                            <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="portfolio-item">
                                        <img src={images.medical} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                    <div className="about-item text-center about-h">
                                        <FaRegHandshake className="react-icon-about"></FaRegHandshake>
                                        <h3>Facials</h3>
                                        <hr/>
                                            <p>Our passion is to make a difference and lead by example.  Brands can count on our team to deliver an organic product integration experience.</p>
                                            <div className="home-btn">
                                            <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>

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
            <Stats/>
            {/* <TextMedia2/> */}
 
            <Statement2/>
        
            {/*<Media/>*/}
            {/*<Team/>*/}
            {/*<AddServices/>*/}


        </>
    );
}

export default Membership;