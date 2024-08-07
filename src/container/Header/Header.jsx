import React from 'react';
import './Header.scss';
import videoBgImg from '../../assets/medical.jpg'
import videoBgMp4 from '../../assets/medical.mp4';
// import videoBgOgv from '../../assets/KT-Management-home-screen-video-city.ogv';
// import videoBgWebm from '../../assets/KT-Management-home-screen-video-city.webm';

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

                    <div className="home-heading">
                        <h1 className="home-heading-1">Knight<span> Team</span></h1><br/>
                        <h1 className="home-heading-2"><span> </span>Management</h1>
                    </div>

                    <div className="home-text">
                        <p>Social Media Branding for the Elite</p>
                    </div>

                    <div className="home-btn">
                        <a className="btn btn-general btn-home smooth-scroll" href="#portfolio" title="Get Represented" role="button">Our Influencers</a>
                    </div>
                </div>
            </div>


            {/*  Arrow Down */}
            <a href="#about" className="arrow-down smooth-scroll">
                <i className="fa fa-angle-down"></i>
            </a>
        </section>
    );
};

export default Header;