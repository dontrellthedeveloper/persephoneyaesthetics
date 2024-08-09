import React from 'react';
import './About.scss';
import {images} from "../../constants";
import {AiOutlineLineChart} from "react-icons/ai";
import {FaRegEye, FaRegHandshake} from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';

const About = () => {
    return (
        <>


        <section id="imageBackground">

            

            {/* About 02 */}
            <div className="about-02" style={{backgroundColor: 'white'}}>
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
        


            </>
    );
};

export default About;