import React, { useEffect, useState } from 'react';
import './About.scss';
import {images} from "../../constants";
import {AiOutlineLineChart} from "react-icons/ai";
import {FaRegEye, FaRegHandshake} from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';
import { FaWeightScale } from "react-icons/fa6";


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../../client';

const About = () => {
    const [services, setServices] = useState(null);

    useEffect(() => {
        client.fetch(`*[_type == "services"]`
        ).then((data) => {
            setServices(data)
        })

    }, []);

    if(!services) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )


    return (
        <>


        <section id="imageBackground">

            

            {/* About 02 */}
            <div className="about-02" style={{backgroundColor: 'white'}}>
                <div className="content-box-main-2">
                    <div className="container">

                    <div style={{maxWidth: '700px', margin: '0 auto', textAlign: 'center'}}>
                    <h1 className='styled-heading'>Our Services</h1>
                    <hr className='styled-divider'/>
                    </div>

                        <div className="row">
                        <div className="col-md-12 col-sm-12"
                                    //   key={service.name + index}
                                    >
                        <OwlCarousel 
                            autoplay
               
                            
                            autoplayHoverPause='true'
                            autoplayTimeout='5000'
                            className="owl-theme"
                                responsive={{
                                    0: {
                                        items: 1
                                    },
                                    480: {
                                        items: 2
                                    },
                                    768: {
                                        items: 3
                                    },
                                    1000: {
                                        items: 3
                                    },
                                    1200: {
                                        items: 3
                                    },
                                }}
                            loop 
                            dots='true'
                       
                            margin={20}
                            nav
                            >
                            
                                {services.map((service, index) => (

                            
                                        <Link 
                                        key={service.name + index}
                                        // to={'/services/' + kid.slug.current}
                                        to={'/services/' + service.slug.current}

                                                            >
                                            <div className="portfolio-item">
                                                <img src={urlFor(service.imageUrl).height(180).width(300).url()} className="influencer-image-2" alt=""/>
                                                <div className="portfolio-item-overlay margin-top-g">

                                                </div>
                                            </div>
                                            <div className="about-item text-center about-h">
                                                {/* <FaWeightScale className="react-icon-about"></FaWeightScale> */}
                                                <h3>{service.name}</h3>
                                                <hr/>
                                                <p>{service.description}</p>
                                                <div className="home-btn">
                                                    <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                                                </div>
                                            </div>
                                        </Link>
                                    
                                  

                                ))}
                            
                           
                            
                        </OwlCarousel>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


            </>
    );
};

export default About;