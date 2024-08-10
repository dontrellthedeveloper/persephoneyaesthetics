// import './App.css';
// import './Responsive.css';
// import './loader';

import React, { useEffect, useState } from 'react';
import {images} from "../constants";
import { IoIosArrowDown } from 'react-icons/io';
import { client, urlFor } from '../client';

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
    const [membership, setMembership] = useState(null);

    useEffect(() => {
        client.fetch(`*[_type == "membership"]`
        ).then((data) => {
            setMembership(data)
        })

    }, []);

    if(!membership) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )

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
                                <div className="col-md-12 col-sm-12">
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

                                        {membership.map((member, index) => (

                                            <div className="about-item text-center about-h" style={{border: '2px solid #dbc7ab'}}>
                                                {/* <FaWeightScale className="react-icon-about"></FaWeightScale> */}
                                                {/* <h3>Self-Care Package</h3> */}
                                                <h1 className='styled-heading' style={{fontSize: '32px', marginBottom: '10px'}}>{member.name}</h1>

                                                <hr/>
                                                <h1 className='styled-heading' style={{fontSize: '26px', marginTop: '10px'}}>{member.price}</h1>

                                                <p>{member.description}</p>
                                                <div className="home-btn">
                                                    <a className="btn btn-general btn-home smooth-scroll" href="#" title="Get Represented" role="button">Join Now</a>
                                                </div>
                                            </div>

                                        ))}

                                    </OwlCarousel>
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

export default Membership;