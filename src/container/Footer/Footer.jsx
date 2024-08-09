import React, { useEffect, useState } from 'react';
import './Footer.scss';
import {FaFacebookF, FaGooglePlus, FaInstagram, FaLinkedin, FaTiktok, FaYoutube} from "react-icons/fa";
// import { client } from '../../client';

const Footer = () => {
    const [social, setSocial] = useState(null);
    const [footer, setFooter] = useState([]);

    // useEffect(() => {
    //     client.fetch(`*[_type == "social"]{
    //         _id,
    //         linkedLink,
    //         instagramLink,
    //         facebookLink,
    //         youTubeLink,
    //         tiktokLink,
    //         googlePlus
    //     }`).then((data) => setSocial(data[0]))
    //         .catch(console.error)
    // }, []);

    // useEffect(() => {
    //     client.fetch(`*[_type == "homepage"] | order(orderRank) {
    //         tagline,
    //         _id,
    //         hpbuttonLink,
    //         hpbuttonText,
    //         boxheading,
    //         boxtext,
    //         boxLink,
    //         boxheading2,
    //         boxtext2,
    //         boxLink2,
    //         boxheading3,
    //         boxtext3,
    //         boxLink3,
    //         secPreheading,
    //         secHeading,
    //         secDescription,
    //         secLink,
    //         secLinkText,
    //         secSubheading,
    //         secSubHeading2,
    //         sec2Preheading,
    //         sec2Heading,
    //         sec2Description,
    //         sec2Link,
    //         sec2LinkText,
    //         sec2Subheading,
    //         sec2SubHeading2,
    //         sec3Preheading,
    //         sec3Heading,
    //         sec3Description,
    //         sec3Link,
    //         sec3LinkText,
    //         sec3Subheading,
    //         sec3SubHeading2,
    //         statement,
    //         footerPreheading,
    //         footerHeading,
    //         footerDescription,
    //         footerCopyriight
    //     }`).then((data) => setFooter(data[0]))
    //         .catch(console.error)
    // }, []);

    // if(!social) return (
    //     <div className="preloader">
    //         <div className="status"></div>
    //     </div>
    // )

    // if(!footer) return (
    //     <div className="preloader">
    //         <div className="status"></div>
    //     </div>
    // )


    return (
        <>
            <section id="contact">
                <div className="content-box-contact" style={{textAlign: 'center'}}>
                    <div className="container">
                        <div className="row" style={{justifyContent: 'center'}}>

                            <div className="horizontal-heading contact-main-form-h" style={{marginBottom: '50px'}}>
                                <h5>
                                {/* {footer.footerPreheading} */}
                                Connect &
                                </h5>
                                <h2 className="brand-thin"> <strong className="brand-bold">
                                {/* {footer.footerHeading}  */}
                                Get In Touch
                                </strong></h2>
                            </div>

                            <div className="col-md-9 contact-main-form-s">
                                <div className="form-styles-c" id="contact-right">
                                <h4 className="form-t-c">
                                {/* {footer.footerDescription} */}
                                {/* Test */}
                                </h4>

                                <h1 className='styled-heading' style={{fontSize: '30px'}}>Send A Message</h1>
                                <hr className='styled-divider' style={{maxWidth: '200px', margin: '5px auto'}}/>



                                        <p className="form-p-c">
                                        {/* {social.linkedLink && (
                                            <a href={social.linkedLink} target='_blank'>
                                                <button className='btn btn-social-i btn-linkedIn'>
                                                    <FaLinkedin/>
                                                </button>
                                            </a>
                                        )}


                                        {social.facebookLink && (
                                            <a href={social.facebookLink} target='_blank'>
                                                <button className='btn btn-social-i-f btn-facebook'>
                                                    <FaFacebookF/>
                                                </button>
                                            </a>
                                        )}

                                        {social.instagramLink && (
                                            <a href={social.instagramLink} target='_blank'>
                                                <button className='btn btn-social-i btn-instagram'>
                                                    <FaInstagram/>
                                                </button>
                                            </a>
                                        )}

                                        {social.tiktokLink && (
                                            <a href={social.tiktokLink}
                                            target='_blank'>
                                                <button className='btn btn-social-i btn-tiktok'>
                                                    <FaTiktok/>
                                                </button>
                                            </a>
                                        )}


                                        {social.youTubeLink && (
                                            <a href={social.youTubeLink}
                                            target='_blank'>
                                                <button className='btn btn-social-i-y btn-youtube'>
                                                    <FaYoutube/>
                                                </button>
                                            </a>
                                        )}

                                        {social.googlePlus && (
                                            <a href={social.googlePlus}
                                            target='_blank'>
                                                <button className='btn btn-social-i-y btn-google'>
                                                    <FaGooglePlus/>
                                                </button>
                                            </a>
                                        )} */}
                                        </p>
                                    <form action="https://formspree.io/f/myyqvabe" method="POST">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="name"
                                                               placeholder="Your Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" name="email"
                                                               placeholder="Email Address"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="phone"
                                                               placeholder="Phone No."/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="subject"
                                                               placeholder="Subject"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" name="message"
                                                          placeholder="Message"></textarea>
                                            </div>
                                            <div id="submit-btn" className="form-submit-b" style={{marginTop: '20px'}}>
                                                <button className="btn btn-general btn-red" type="submit" name="submit"
                                                        role="button">Submit
                                                </button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="my-auto marg-top">
                                {/* Copyright &copy; 2023 All Rights Reserved By <span>OUR STOCK IS RISING.</span> */}
                                            {/* {footer.footerCopyriight} */}
                            </p>
                        </div>
                    </div>
                </div>


                <a href="#home" id="back-to-top"
                   className="btn btn-sm btn-red btn-back-to-top smooth-scroll hidden-sm hidden-xs" title="home"
                   role="button"><i
                    className="fa fa-angle-up"></i>
                </a>


            </footer>
        </>
    );
};

export default Footer;