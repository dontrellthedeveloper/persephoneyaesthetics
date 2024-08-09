import React, {useEffect, useState} from 'react';
import './Stats.scss';
import {FaFacebookSquare, FaInstagram, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";
import CountUp from 'react-countup';
// import {client} from "../../client";


const Stats = () => {
    // const [tiktokFollowers, setTiktokFollowers] = useState(null);
    // const [instagramFollowers, setInstagramFollowers] = useState(null);
    // const [twitterFollowers, setTwitterFollowers] = useState(null);
    // const [youtubeSubscribers, setYoutubeSubscribers] = useState(null);
    // const [facebookLikes, setFacebookLikes] = useState(null);

    // useEffect(() => {
    //     client.fetch(`*[_type == "stats" && slug.current == 'tiktok-followers']{
    //         name,
    //         stats,
    //     }`).then((data) => setTiktokFollowers(data[0]))
    //         .catch(console.error)
    // }, []);

    // useEffect(() => {
    //     client.fetch(`*[_type == "stats" && slug.current == 'youtube-subscribers']{
    //         name,
    //         stats,
    //     }`).then((data) => setYoutubeSubscribers(data[0]))
    //         .catch(console.error)
    // }, []);

    // useEffect(() => {
    //     client.fetch(`*[_type == "stats" && slug.current == 'instagram-followers']{
    //         name,
    //         stats,
    //     }`).then((data) => setInstagramFollowers(data[0]))
    //         .catch(console.error)
    // }, []);

    // useEffect(() => {
    //     client.fetch(`*[_type == "stats" && slug.current == 'facebook-likes']{
    //         name,
    //         stats,
    //     }`).then((data) => setFacebookLikes(data[0]))
    //         .catch(console.error)
    // }, []);

    // useEffect(() => {
    //     client.fetch(`*[_type == "stats" && slug.current == 'twitter-followers']{
    //         name,
    //         stats,
    //     }`).then((data) => setTwitterFollowers(data[0]))
    //         .catch(console.error)
    // }, []);


    // if(!tiktokFollowers || !youtubeSubscribers || !instagramFollowers || !twitterFollowers || !facebookLikes) return (
    //     <div className="preloader">
    //         <div className="status"></div>
    //     </div>
    // )


    return (
        <section id="stats">
            <div className="content-box-md-stats">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-md-12">
                            <div className="vertical-heading">
                                <h5>Find Branding</h5>
                                <h2>Our Clients <strong>Have</strong> <br/><strong>Amazing </strong>Influence</h2>
                            </div>
                        </div>
                    </div> */}
                    <div style={{maxWidth: '700px', margin: '0 auto', textAlign: 'center'}}>
                    <h1 className='styled-heading'>Follow Us on Social Media</h1>
                    <hr className='styled-divider'/>
                    </div>


                    <div className="row social-links-margin">
                        <div className="col-md-3 col-sm-3 col-xs-6">

                            <div className="stats-item-i stats-item text-center">
                                <div>
                                    <FaInstagram size={45} className="stats-item-icon"/>
                                </div>
                                <br/>
                                {/*<h3 className="counter">36,376,213</h3>*/}
                                <CountUp className='counter' 
                                separator="," 
                                // end={instagramFollowers.stats} 
                                end={300}
                                duration={15}/>
                                <p>
                                {/* {instagramFollowers.name} */}
                                Instagram Followers
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6">

                            <div className="stats-item-f stats-item text-center">
                                <div>
                                    <FaFacebookSquare size={45} className='stats-item-icon'/>
                                </div>
                                <br/>
                                {/*<h3 className="counter">26,109,002</h3>*/}
                                <CountUp className='counter' separator="," 
                                // end={facebookLikes.stats} 
                                end={300}
                                duration={15}/>
                                <p>
                                {/* {facebookLikes.name} */}
                                Facebook Likes
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6">
                            <div className="stats-item-tik stats-item text-center">
                                <div>
                                    <FaTiktok size={45} className='stats-item-icon'/>
                                </div>
                                <br/>
                                {/*<h3 className="counter">8,103,221</h3>*/}
                                <CountUp className='counter' separator="," 
                                // end={tiktokFollowers.stats} 
                                end={300}
                                duration={15}/>
                                <p>
                                {/* {tiktokFollowers.name} */}
                                TikTok Followers
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6">
                            <div className="stats-item-y stats-item text-center">
                                <div>
                                    <FaYoutube size={45} className='stats-item-icon'/>
                                </div>
                                <br/>
                                {/*<h3 className="counter">8,103,221</h3>*/}
                                <CountUp className='counter' separator="," 
                                // end={youtubeSubscribers.stats} 
                                end={300}
                                duration={15}/>
                                <p>
                                {/* {youtubeSubscribers.name} */}
                                Youtube Subscribers
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;