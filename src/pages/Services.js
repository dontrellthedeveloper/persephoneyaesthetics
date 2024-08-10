// import './App.css';
// import './Responsive.css';
// import './loader';

import React, {useState, useEffect} from 'react';
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
import { Link, useParams } from 'react-router-dom';
import { FaWeightScale } from 'react-icons/fa6';
import { FaRegEye, FaRegHandshake } from 'react-icons/fa';
// import {Navbar} from '../components'

import {client, urlFor} from "../client";

const Services = () => {
    const [singleService, setSingleService] = useState(null);
    // const [services, setServices] = useState(null);
    const {slug} = useParams();

    useEffect(() => {
        client.fetch(`*[slug.current == "${slug}"]{
            name,
            _id,
            slug,
            description,
            imageUrl,
            bookingLink,
            priceName1,
            priceName2,
            priceName3,
            priceName4,
            priceName5,
            priceName6,
            priceName7,
            priceName8,
            priceName9,
            priceName10,
            price1,
            price2,
            price3,
            price4,
            price5,
            price6,
            price7,
            price8,
            price9,
            price10
            
        }`).then((data) => setSingleService(data[0]))
            .catch(console.error)
    }, [slug]);

    if(!singleService) return (
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
                            {singleService.name}
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
                                    <h1 className='styled-heading2'>{singleService.name}</h1>
                                    <hr className='styled-divider'/>
                                        <div className='text-style2'>
                                        <p className='styled-p'>{singleService.description}</p>
                                        </div>
                                    <hr className='styled-divider'/>
                                    </div>

                       

                                </div>
                            </div>
                            {/* Left Side */}
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                    <div className="portfolio-item">
                                        <img src={urlFor(singleService.imageUrl).url()} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">

                                        </div>
                                    </div>
                                </div>


                            </div>
                            

                        </div>
                    </div>
                </div>



            </section>


            <section id="about" style={{minHeight: 'calc(100vh - 300px)', display: 'table', width: '100%', paddingTop: '60px'}}>
                <div className="about-01 sectionBg1" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#f8f4f4'}}>
                    <div className="container">
                    <div className="row col-mobile-top" style={{justifyContent: 'center'}}>
                    <div className="col-md-12">
                            <div className="tech-statement text-center">
                                <h1 className='styled-heading'>{singleService.name} Pricing</h1>
                                <hr className='styled-divider'/>


                                <table id="customers">

                                    <tr>
                                        <th>Service</th>
                                        <th>Pricing</th>
                                        {/* <th>Country</th> */}
                                    </tr>

                                    {singleService.priceName1 && (
                                    <tr>
                                        <td>{singleService.priceName1}</td>
                                        <td>${singleService.price1}</td>
                                        {/* <td>Germany</td> */}
                                    </tr>
                                    )}

                                    {singleService.priceName2 && (
                                    <tr>
                                        <td>{singleService.priceName2}</td>
                                        <td>${singleService.price2}</td>
                                        {/* <td>Germany</td> */}
                                    </tr>
                                    )}

                                    {singleService.priceName3 && (
                                    <tr>
                                        <td>{singleService.priceName3}</td>
                                        <td>${singleService.price3}</td>
                                        {/* <td>Germany</td> */}
                                    </tr>
                                    )}

                                    {singleService.priceName4 && (
                                    <tr>
                                        <td>{singleService.priceName4}</td>
                                        <td>${singleService.price4}</td>
                                        {/* <td>Germany</td> */}
                                    </tr>
                                    )}

                                    {singleService.priceName5 && (
                                    <tr>
                                        <td>{singleService.priceName5}</td>
                                        <td>${singleService.price5}</td>
                                        {/* <td>Germany</td> */}
                                    </tr>
                                    )}

                                    {singleService.priceName6 && (
                                    <tr>
                                        <td>{singleService.priceName6}</td>
                                        <td>${singleService.price6}</td>
                                        {/* <td>Germany</td> */}
                                    </tr>
                                    )}

                                    {singleService.priceName7 && (
                                    <tr>
                                        <td>{singleService.priceName7}</td>
                                        <td>${singleService.price7}</td>
                                        {/* <td>Germany</td> */}
                                    </tr>
                                    )}

                                    {singleService.priceName8 && (
                                    <tr>
                                        <td>{singleService.priceName8}</td>
                                        <td>${singleService.price8}</td>
                                        {/* <td>Germany</td> */}
                                    </tr>
                                    )}

                                    {singleService.priceName9 && (
                                    <tr>
                                        <td>{singleService.priceName9}</td>
                                        <td>${singleService.price9}</td>
                                        {/* <td>Germany</td> */}
                                    </tr>
                                    )}

                                    {singleService.priceName10 && (
                                    <tr>
                                        <td>{singleService.priceName10}</td>
                                        <td>${singleService.price10}</td>
                                        {/* <td>Germany</td> */}
                                    </tr>
                                    )}
                                    
                                    
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