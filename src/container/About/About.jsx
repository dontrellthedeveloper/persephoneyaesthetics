import React from 'react';
import './About.scss';
import {images} from "../../constants";
import {AiOutlineLineChart} from "react-icons/ai";
import {FaRegEye, FaRegHandshake} from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';
import { FaWeightScale } from "react-icons/fa6";


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const About = () => {
    return (
        <>


        <section id="imageBackground">

            

            {/* About 02 */}
            <div className="about-02" style={{backgroundColor: 'white'}}>
                <div className="content-box-main-2">
                    <div className="container">

                    <div style={{maxWidth: '700px', margin: '0 auto', textAlign: 'center'}}>
                    <h1 className='styled-heading'>Book Our Services</h1>
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
                                    <h3>Weight Loss</h3>
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
                                    <h3>Laser Hair Removal</h3>
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
                                    <h3>Botox</h3>
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
                                    <h3>Lip Filler</h3>
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
                                    <h3>Facial Filler</h3>
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
                                    <h3>Microneedling</h3>
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
        


            </>
    );
};

export default About;