import React from 'react';
import './Header.scss';
import videoBgImg from '../../assets/medical.jpg'
import videoBgMp4 from '../../assets/medical.mp4';
import {NavLink} from "react-router-dom";
// import videoBgOgv from '../../assets/KT-Management-home-screen-video-city.ogv';
// import videoBgWebm from '../../assets/KT-Management-home-screen-video-city.webm';
import {images} from "../../constants";
import {IoIosArrowDown} from "react-icons/io";

const Header = () => {
    return (
        <section id='home'>


            <video className="home-bg-video" src={videoBgMp4} autoPlay loop muted playsInline>
            </video>



            {/* Overlay */}
            <div className="home-overlay"></div>

            {/* Header Content */}
            <div className="home-content">
                <div className="home-content-inner text-center">

                    {/*<div className="home-heading">*/}
                    {/*    <h1 className="home-heading-1">Knight<span> Team</span></h1><br/>*/}
                    {/*    <h1 className="home-heading-2"><span> </span>Management</h1>*/}
                    {/*</div>*/}

                    <div className=' app__header-logo'>
                        <NavLink to='/'>
                            <img className='header__logo' src={images.logo2} alt="logo"/>
                        </NavLink>
                    </div>

                    {/* <div className="home-text">
                        <p>Social Media Branding for the Elite</p>
                    </div> */}

                    <div className="home-btn">
                        <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Book Now</a>
                    </div>
                </div>
            </div>


            {/*  Arrow Down */}
            <a href="#about" className="arrow-down smooth-scroll">
                <IoIosArrowDown icon="fa-solid fa-angle-down" />
            </a>
        </section>
    );
};

export default Header;