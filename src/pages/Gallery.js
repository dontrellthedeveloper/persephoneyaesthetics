// import './App.css';
// import './Responsive.css';
// import './loader';

import React from 'react';
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

// import {Navbar} from '../components'

const Gallery = () => {


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
                        <div className="horizontal-heading influencer-name main-section-title">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> 
                            {/* {about.name} */}
                            Gallery
                            </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <section id="portfolio">

<div className="isotope-filters">
    <div className="container" style={{display: 'none'}}>
        <div className="row">
            <div className="col-md-12" style={{display: 'none'}}>
                <div className="vertical-heading">
                    <h5>Find Branding</h5>
                    <h2>Our <br/>Amazing <strong>Influencers</strong></h2>
                </div>
            </div>

            <div className="col-md-12">

                <div id="isotope-filters" className="margin-bottom-g">

                    <button className="btn btn-red btn-grey active-item gallery-list-item"
                            data-filter="all"><span>All</span></button>
                    <button className="btn btn-red gallery-list-item" data-filter="women"><span>Women</span>
                    </button>
                    <button className="btn btn-red active-item gallery-list-item" data-filter="men">
                        <span>Men</span></button>
                </div>

            </div>
            <div className="col-md-12" style={{display: 'none'}}>
                <p className="client-show-instructions">Click on photo for details</p>
            </div>

        </div>
    </div>

     {/* Portfolio items Wrapper */}
    <section id="portfolio-wrapper">

        <div className="container-fluid center-pics">

            <div className="row no-gutters">

                <div className="isotope-filters" style={{paddingLeft: '0', paddingRight: '0'}}>

                    {/* {influencers.map((influencer, index) => ( */}


                        <div 
                        // key={influencer.name + index} 
                        className="col-lg-3 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom" style={{display: 'inline-block'}}>

                            <div className="portfolio-item portfolio-pic no-underline">



                                <a 
                                // href={urlFor(influencer.imageUrl)}
                                href={images.gallery1}
                                   data-title="
<div class='show-button'><a href='mailto:shawn@ktmanagers.com?subject=I am interested in Mimi promoting my brand' target='_blank'><button class='btn btn-client-book btn-red'>Book Mimi to promote your brand!</button></a><hr><a href='https://www.instagram.com/mimifaust' target='_blank'><button class='btn btn-social-i btn-instagram'><i class='fa fa-instagram'></i></button></a><a href='https://www.facebook.com/officialmimifaust' target='_blank'><button class='btn btn-social-i-f btn-facebook'><i class='fa fa-facebook'></i></button></a><a href='https://twitter.com/mimifaust' target='_blank'><button class='btn btn-social-i-t btn-twitter'><i class='fa fa-twitter'></i></button></a></div><hr>
"

                                >
                                    <img 
                                    // src={urlFor(influencer.imageUrl)} 
                                    src={images.gallery1} 
                                    className="img-responsive"
                                         alt="portfolio 01"/>

                                        <div className="portfolio-item-overlay margin-top-g">
                                            <div className="portfolio-item-details text-center">
                                                {/*Item Header*/}
                                                {/* <h3>{influencer.name}</h3> */}
                                                <h3>Name</h3>
                                                {/*Item Strips*/}
                                                <span></span>

                                                 {/*Item Description */}
                                                <p>Description</p>

                                            </div>
                                        </div>

                                </a>
                            </div>
                        </div>

                        <div 
                        // key={influencer.name + index} 
                        className="col-lg-3 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom" style={{display: 'inline-block'}}>

                            <div className="portfolio-item portfolio-pic no-underline">



                                <a 
                                // href={urlFor(influencer.imageUrl)}
                                href={images.gallery2}
                                   data-title="
<div class='show-button'><a href='mailto:shawn@ktmanagers.com?subject=I am interested in Mimi promoting my brand' target='_blank'><button class='btn btn-client-book btn-red'>Book Mimi to promote your brand!</button></a><hr><a href='https://www.instagram.com/mimifaust' target='_blank'><button class='btn btn-social-i btn-instagram'><i class='fa fa-instagram'></i></button></a><a href='https://www.facebook.com/officialmimifaust' target='_blank'><button class='btn btn-social-i-f btn-facebook'><i class='fa fa-facebook'></i></button></a><a href='https://twitter.com/mimifaust' target='_blank'><button class='btn btn-social-i-t btn-twitter'><i class='fa fa-twitter'></i></button></a></div><hr>
"

                                >
                                    <img 
                                    // src={urlFor(influencer.imageUrl)} 
                                    src={images.gallery2} 
                                    className="img-responsive"
                                         alt="portfolio 01"/>

                                        <div className="portfolio-item-overlay margin-top-g">
                                            <div className="portfolio-item-details text-center">
                                                {/*Item Header*/}
                                                {/* <h3>{influencer.name}</h3> */}
                                                <h3>Name</h3>
                                                {/*Item Strips*/}
                                                <span></span>

                                                 {/*Item Description */}
                                                <p>Description</p>

                                            </div>
                                        </div>

                                </a>
                            </div>
                        </div>    


                        <div 
                        // key={influencer.name + index} 
                        className="col-lg-3 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom" style={{display: 'inline-block'}}>

                            <div className="portfolio-item portfolio-pic no-underline">



                                <a 
                                // href={urlFor(influencer.imageUrl)}
                                href={images.gallery3}
                                   data-title="
<div class='show-button'><a href='mailto:shawn@ktmanagers.com?subject=I am interested in Mimi promoting my brand' target='_blank'><button class='btn btn-client-book btn-red'>Book Mimi to promote your brand!</button></a><hr><a href='https://www.instagram.com/mimifaust' target='_blank'><button class='btn btn-social-i btn-instagram'><i class='fa fa-instagram'></i></button></a><a href='https://www.facebook.com/officialmimifaust' target='_blank'><button class='btn btn-social-i-f btn-facebook'><i class='fa fa-facebook'></i></button></a><a href='https://twitter.com/mimifaust' target='_blank'><button class='btn btn-social-i-t btn-twitter'><i class='fa fa-twitter'></i></button></a></div><hr>
"

                                >
                                    <img 
                                    // src={urlFor(influencer.imageUrl)} 
                                    src={images.gallery3} 
                                    className="img-responsive"
                                         alt="portfolio 01"/>

                                        <div className="portfolio-item-overlay margin-top-g">
                                            <div className="portfolio-item-details text-center">
                                                {/*Item Header*/}
                                                {/* <h3>{influencer.name}</h3> */}
                                                <h3>Name</h3>
                                                {/*Item Strips*/}
                                                <span></span>

                                                 {/*Item Description */}
                                                <p>Description</p>

                                            </div>
                                        </div>

                                </a>
                            </div>
                        </div>



                        <div 
                        // key={influencer.name + index} 
                        className="col-lg-3 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom" style={{display: 'inline-block'}}>

                            <div className="portfolio-item portfolio-pic no-underline">



                                <a 
                                // href={urlFor(influencer.imageUrl)}
                                href={images.gallery4}
                                   data-title="
<div class='show-button'><a href='mailto:shawn@ktmanagers.com?subject=I am interested in Mimi promoting my brand' target='_blank'><button class='btn btn-client-book btn-red'>Book Mimi to promote your brand!</button></a><hr><a href='https://www.instagram.com/mimifaust' target='_blank'><button class='btn btn-social-i btn-instagram'><i class='fa fa-instagram'></i></button></a><a href='https://www.facebook.com/officialmimifaust' target='_blank'><button class='btn btn-social-i-f btn-facebook'><i class='fa fa-facebook'></i></button></a><a href='https://twitter.com/mimifaust' target='_blank'><button class='btn btn-social-i-t btn-twitter'><i class='fa fa-twitter'></i></button></a></div><hr>
"

                                >
                                    <img 
                                    // src={urlFor(influencer.imageUrl)} 
                                    src={images.gallery4} 
                                    className="img-responsive"
                                         alt="portfolio 01"/>

                                        <div className="portfolio-item-overlay margin-top-g">
                                            <div className="portfolio-item-details text-center">
                                                {/*Item Header*/}
                                                {/* <h3>{influencer.name}</h3> */}
                                                <h3>Name</h3>
                                                {/*Item Strips*/}
                                                <span></span>

                                                 {/*Item Description */}
                                                <p>Description</p>

                                            </div>
                                        </div>

                                </a>
                            </div>
                        </div>



                        <div 
                        // key={influencer.name + index} 
                        className="col-lg-3 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom" style={{display: 'inline-block'}}>

                            <div className="portfolio-item portfolio-pic no-underline">



                                <a 
                                // href={urlFor(influencer.imageUrl)}
                                href={images.gallery5}
                                   data-title="
<div class='show-button'><a href='mailto:shawn@ktmanagers.com?subject=I am interested in Mimi promoting my brand' target='_blank'><button class='btn btn-client-book btn-red'>Book Mimi to promote your brand!</button></a><hr><a href='https://www.instagram.com/mimifaust' target='_blank'><button class='btn btn-social-i btn-instagram'><i class='fa fa-instagram'></i></button></a><a href='https://www.facebook.com/officialmimifaust' target='_blank'><button class='btn btn-social-i-f btn-facebook'><i class='fa fa-facebook'></i></button></a><a href='https://twitter.com/mimifaust' target='_blank'><button class='btn btn-social-i-t btn-twitter'><i class='fa fa-twitter'></i></button></a></div><hr>
"

                                >
                                    <img 
                                    // src={urlFor(influencer.imageUrl)} 
                                    src={images.gallery5} 
                                    className="img-responsive"
                                         alt="portfolio 01"/>

                                        <div className="portfolio-item-overlay margin-top-g">
                                            <div className="portfolio-item-details text-center">
                                                {/*Item Header*/}
                                                {/* <h3>{influencer.name}</h3> */}
                                                <h3>Name</h3>
                                                {/*Item Strips*/}
                                                <span></span>

                                                 {/*Item Description */}
                                                <p>Description</p>

                                            </div>
                                        </div>

                                </a>
                            </div>
                        </div>



                    {/* ))} */}


                </div>
            </div>
        </div>
    </section>
</div>








{/*<div className="client-border">*/}
{/*    <div className="container">*/}
{/*        <div className="row">*/}
{/*            <div className="col-md-12">*/}
{/*                <div className="vertical-heading">*/}
{/*                    <h5>Find Branding</h5>*/}
{/*                    <h2>Our <br/>Amazing <strong>Kids</strong></h2>*/}
{/*                </div>*/}
{/*            </div>*/}
{/*            <div className="col-md-12">*/}
{/*                <p className="client-show-instructions">Click on photo for details</p>*/}
{/*            </div>*/}
{/*            <div className="col-md-12">*/}

{/*                <div className="margin-bottom-g">*/}

{/*                </div>*/}

{/*            </div>*/}

{/*        </div>*/}
{/*    </div>*/}

{/*</div>*/}
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

export default Gallery;