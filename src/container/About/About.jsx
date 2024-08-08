import React from 'react';
import './About.scss';
import {images} from "../../constants";
import {AiOutlineLineChart} from "react-icons/ai";
import {FaRegEye, FaRegHandshake} from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';

const About = () => {
    return (
        <>


        <section id="about">

            

            {/* About 02 */}
            <div className="about-02">
                <div className="content-box-main-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="about-item text-center about-h">
                                    <AiOutlineLineChart className="react-icon-about"></AiOutlineLineChart>
                                    <h3>Mission</h3>
                                    <hr/>
                                        <p>Create a partnership with brands that provide increased profits and long lasting business relationships. Brands grow and Influencers share in the success of branding.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="about-item text-center about-h">
                                    <FaRegEye className="react-icon-about"></FaRegEye>
                                    <h3>Vision</h3>
                                    <hr/>
                                        <p>We believe that Influencers are the key to successful business growth.  We pair elite influencers with brands that they love so that the experience is organic. </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="about-item text-center about-h">
                                    <FaRegHandshake className="react-icon-about"></FaRegHandshake>
                                    <h3>Passion</h3>
                                    <hr/>
                                        <p>Our passion is to make a difference and lead by example.  Brands can count on our team to deliver an organic product integration experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
<section id="history" style={{height: 'calc(100vh - 140px)', display: 'table', width: '100%'}}>
                <div className="about-01" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                    <div className="container">
                    <div className="row col-mobile-top" style={{justifyContent: 'center'}}>
                            {/* Left Side */}
                            {/* <div className="col-md-6 col-sm-6">
                                <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                    <div className="portfolio-item">

                                    <img src={urlFor(history.imageUrl).width(800).height(800).url()} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">
                                            <div className="portfolio-item-details text-center">

                                                <div className='show-button'>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            
                            {/* Right Side */}
                            <div className="col-md-6 col-sm-12" style={{display: 'table'}}>
                                <div className="about-right" style={{display: 'table-cell'}}>
                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                        <h5 style={{color: '#000', fontWeight: '700',}}>
                                        {/* {history.preheading} */}
                                        preheading
                                        </h5>
                                        <h2> <strong ></strong>
                                        {/* {history.heading} */}
                                        heading
                                        </h2>
                                    </div>

                                    <hr style={{margin: '2rem', border: '2px solid #213805'}}/>



                                    <p className="about-text" style={{fontWeight: '700', textAlign: 'left', marginLeft: '60px', marginRight: '60px'}}>
                                    {/* <ReactMarkdown 
                                                children={history.description} 
                                                remarkPlugins={[remarkGfm]}   
                                                /> */}
                    
                                        testing text
                                    </p>


                                    <hr style={{margin: '1.5rem', border: '2px solid #213805'}}/>

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12" style={{display: 'table'}}>
                                <div className="about-right" style={{display: 'table-cell'}}>
                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                        <h5 style={{color: '#000',fontWeight: '700',}}>
                                        {/* {history.preheading2} */}
                                        preheading
                                        </h5>
                                        <h2> <strong ></strong>
                                        {/* {history.heading2} */}
                                        heading
                                        </h2>
                                    </div>

                                    <hr style={{margin: '2rem', border: '2px solid #213805'}}/>

                                    <p className="about-text" style={{fontWeight: '700',textAlign: 'left', marginLeft: '60px', marginRight: '60px'}}>
                                    {/* <ReactMarkdown 
                                                children={history.description2} 
                                                remarkPlugins={[remarkGfm]}   
                                                />       */}
                                                testing text      
                                    </p>

                                    
                                    

                                    <hr style={{margin: '1.5rem', border: '2px solid #213805'}}/>
                                                                        
                                                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                            {/*  Arrow Down */}
                {/* <a href="#about2" className="arrow-down smooth-scroll" style={{color: '#213805'}}>
                    <IoIosArrowDown icon="fa-solid fa-angle-down" />
                </a> */}
            </section>


            <section id="about" style={{height: 'calc(100vh - 140px)', display: 'table', width: '100%'}}>
                <div className="about-01" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                    <div className="container">
                    <div className="row col-mobile-top" style={{justifyContent: 'center'}}>
                            {/* Left Side */}
                            <div className="col-md-6 col-sm-6">
                                <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                    <div className="portfolio-item">
                                        <img 
                                        // src={urlFor(extras.imageUrl).width(800).height(800).url()} 
                                        src={images.logo2}
                                        className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">
                                            <div className="portfolio-item-details text-center">


                                                <div className='show-button'>
                                                    {/* {extras.gameLink && (
                                                        <a href={extras.gameLink} target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                <AiOutlineStock/>
                                                            </button>
                                                        </a>
                                                    )} */}

                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            
                            {/* Right Side */}
                            <div className="col-md-6 col-sm-12 col-mobile" style={{display: 'table'}}>
                                <div className="about-right" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                        <h5 style={{color: '#000'}}>
                                        {/* {extras.preheading} */}
                                        preheading
                                        </h5>
                                        <h2> <strong ></strong>
                                        {/* {extras.heading} */}
                                        heading
                                        </h2>
                                    </div>

                                    <hr style={{margin: '2rem', border: '2px solid #213805'}}/>

                                    <p className="about-text" style={{marginLeft: '80px', marginRight: '80px'}}>
                                
                                    {/* <ReactMarkdown 
                                                children= {extras.description}  
                                                remarkPlugins={[remarkGfm]}   
                                                /> */}
                                                text example
                                    </p>

                                    

                                    <div className='show-button-page'>

                                        <hr style={{margin: '1rem'}}/>
                                    
                                        <div class="basic-card basic-card-aqua " style={{margin: '0 auto'}}>
                                        <div class="card-link-b" style={{padding: '7px', borderTop: '0', }}>
                                            <a 
                                            // href={extras.gameLink} 
                                            href=""
                                            target='_blank' title="Play the Stock Market Game" style={{backgroundColor: 'none'}}><span>
                                            {/* {extras.gameText} */}
                                            </span></a>
                                        </div>
                                    </div>

                                        <hr style={{margin: '1rem'}}/>

                                    </div>
                                                               
                                                                        

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                            {/*  Arrow Down */}
                <a href="#about" className="arrow-down smooth-scroll" style={{color: '#213805'}}>
                    <IoIosArrowDown icon="fa-solid fa-angle-down" />
                </a>
            </section>

            </>
    );
};

export default About;