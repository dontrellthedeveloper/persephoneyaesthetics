import React from 'react';
import './Statement2.scss';
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import { images } from '../../constants';
import { IoIosArrowDown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Statement = () => {
    return (
        <>


        <section id="imageBackground">
            <div className="content-box-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tech-statement text-center">
                            {/* <hr className='styled-divider' style={{border: '2px solid #fff'}}/> */}

                    <div className=' app__header-logo'>
                        <NavLink to='/'>
                            <img src={images.logo2} alt="logo"/>
                        </NavLink>
                    </div>
                                {/* <h1 className='styled-heading' style={{color: '#fff'}}>Persephoney Aesthetics</h1> */}
                                {/* <hr className='styled-divider' style={{border: '2px solid #fff'}}/> */}
                                    <div className='text-style' style={{color: '#fff'}}>
                                    {/* <p className='styled-p' style={{color: '#fff'}}>S&N Aesthetics is a premier reputable medical spa, specializing in laser hair removal, Botox, lip filler, teeth whitening, non surgical fat reduction, and weight loss. </p> */}
                                    {/* <p className='styled-p' style={{color: '#fff'}}>Combining proven methods, quality products, advanced devices, and a highly professional and experienced team, S&N Aesthetics is your best choice for a most relaxing and rejuvenating experience.</p>
                                        <h4>Join us now, you deserve it</h4> */}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




            </>
    );
};

export default Statement;