import React from 'react';
import './TextMedia.scss';
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import { images } from '../../constants';
import { IoIosArrowDown } from 'react-icons/io';

const Statement = () => {
    return (
        <>



            <section id="about" style={{minHeight: 'calc(100vh - 300px)', display: 'table', width: '100%'}}>
                <div className="about-01 sectionBg1" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                    <div className="container textMediaContainer">
                    <div className="row col-mobile-top" style={{justifyContent: 'center'}}>
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
                            
                            {/* Right Side */}
                            <div className="col-md-6 col-sm-12 col-mobile" style={{display: 'table'}}>
                                <div className="about-right" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                    <h1 className='styled-heading2'>The Very best In Aesthetic Care</h1>
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
                        </div>
                    </div>
                </div>

            {/*  Arrow Down */}
            <a href="#about2" className="arrow-down smooth-scroll" style={{color: '#213805'}}>
                <IoIosArrowDown icon="fa-solid fa-angle-down" />
            </a>

            </section>
            </>
    );
};

export default Statement;