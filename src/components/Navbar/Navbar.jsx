import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { images } from "../../constants";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // setting initial value to true
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <nav
      className={
        scroll
          ? "app__navbar app__navbar-scroll"
          : "app__navbar app__navbar-scroll"
      }
    >
     
      <div className="app__navbar-logo">
      <NavLink to="/">
        <img src={scroll ? images.logoDark : images.logoDark} alt="logo" />
        </NavLink>
      </div>
    
      <ul className="app__navbar-links">
        <li className="app__flex p-text">
          <div />
          <NavLink
            className={
              scroll
                ? "navbar__links-styles-scroll navbar__links-color-scroll"
                : "navbar__links-styles-scroll navbar__links-color-scroll"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="app__flex p-text dropdown">
          <div />
          <a
            href="#"
            className={
              scroll
                ? "navbar__links-styles-scroll navbar__links-color-scroll"
                : "navbar__links-styles-scroll navbar__links-color-scroll"
            }
            to=""
          >
            Our Services
            <i class="fa fa-caret-down"></i>
          </a>
          <div class="dropdown-content" >
            
            <Link 
            to={'/services/botox'}
            style={{borderTop: '2px solid #dbc7ab'}}>
            Botox
            </Link>
            <Link to={'/services/teeth-whitening'}>Teeth Whitening</Link>
            <Link to={'/services/iv-therapy'}>IV Therapy</Link>
            <Link to={'/services/facials'} >Facials</Link>
            <Link to={'/services/weight-loss'} >Weight Loss</Link>
            <Link to={'/services/chemical-peel'} style={{borderBottom: '2px solid #dbc7ab'}}>Chemical Peel</Link>

         </div>
        </li>
        <li className="app__flex p-text">
          <div />
          <NavLink
            className={
              scroll
                ? "navbar__links-styles-scroll navbar__links-color-scroll"
                : "navbar__links-styles-scroll navbar__links-color-scroll"
            }
            to="/membership"
          >
            Membership
          </NavLink>
        </li>
        <li className="app__flex p-text">
          <div />
          <NavLink
            className={
              scroll
                ? "navbar__links-styles-scroll navbar__links-color-scroll"
                : "navbar__links-styles-scroll navbar__links-color-scroll"
            }
            to="/faq"
          >
            FAQ
          </NavLink>
        </li>

        <li className="app__flex p-text">
          <div />
          <NavLink
            className={
              scroll
                ? "navbar__links-styles-scroll navbar__links-color-scroll"
                : "navbar__links-styles-scroll navbar__links-color-scroll"
            }
            to="/gallery"
          >
            Gallery
          </NavLink>
        </li>
        <li className="app__flex p-text">
          <div />
          <NavLink
            className={
              scroll
                ? "navbar__links-styles-scroll navbar__links-color-scroll"
                : "navbar__links-styles-scroll navbar__links-color-scroll"
            }
            to="/about"
          >
            About Us
          </NavLink>
        </li>

        <li className="app__flex p-text">
          <div />
          <NavLink
            className={
              scroll
                ? "navbar__links-styles-scroll navbar__links-color-scroll"
                : "navbar__links-styles-scroll navbar__links-color-scroll"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li className="app__flex p-text">
          <div />
          <a
            href="https://www.tebra.com/care/"
            target="_blank"
            className={
              scroll
                ? "navbar__links-styles-scroll navbar__links-color-scroll"
                : "navbar__links-styles-scroll navbar__links-color-scroll"
            }
            to=""
          >
            Book Now
          </a>
        </li>


        {/* <li className="app__flex p-text">
          <div />
          <NavLink
            className={
              scroll
                ? "navbar__links-styles-scroll navbar__links-color-scroll"
                : "navbar__links-styles-scroll navbar__links-color-scroll"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li> */}

        {/* {['home','Our Services','Pricing' ,'Membership','FAQ','Gallery','About Us','Contact','Book Now'].map((item)=> (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div/>
                        <a className={scroll ? 'navbar__links-color-scroll' : 'navbar__links-color-scroll'} href={`#${item}`}>{item}</a>
                    </li>
                ))} */}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <div
          // whileInView={{x: [300, 0]}}
          // transition={{duration: 0.85, ease: 'easeOut'}}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {/*{['home','about','work','skills','contact'].map((item)=> (*/}
              {/*    <li key={item}>*/}
              {/*        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>*/}
              {/*    </li>*/}
              {/*))}*/}
              <li>
                <NavLink
                  className="app__navbar-menu-links"
                  to="/"
                  onClick={() => setToggle(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="app__navbar-menu-links"
                  to="/"
                  onClick={() => setToggle(false)}
                >
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="app__navbar-menu-links"
                  to="/membership"
                  onClick={() => setToggle(false)}
                >
                  Membership
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="app__navbar-menu-links"
                  to="/faq"
                  onClick={() => setToggle(false)}
                >
                  FAQ
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="app__navbar-menu-links"
                  to="/gallery"
                  onClick={() => setToggle(false)}
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="app__navbar-menu-links"
                  to="/about"
                  onClick={() => setToggle(false)}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="app__navbar-menu-links"
                  to="/contact"
                  onClick={() => setToggle(false)}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="app__navbar-menu-links"
                  to="/"
                  onClick={() => setToggle(false)}
                >
                  Book Now
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className="app__navbar-menu-links"
                  to="/contact"
                  onClick={() => setToggle(false)}
                >
                  Contact
                </NavLink>
              </li> */}
              {/*<li>*/}
              {/*    <a href={`#`} onClick={() => setToggle(false)}>About</a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*    <a href={`#`} onClick={() => setToggle(false)}>Influencers</a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*    <a href={`#`} onClick={() => setToggle(false)}>KTM Kids</a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*    <a href={`#`} onClick={() => setToggle(false)}>Services</a>*/}
              {/*</li>*/}
            </ul>
          </div>
        )}
      </div>
    </nav>

    // <header>
    //     <nav className={scroll ? "navbar navbar-fixed-top mobile-nav-top" : "navbar navbar-fixed-top mobile-nav-top white-nav-top"}>
    //         <div className="container-fluid">
    //             <div className="site-nav-wrapper">
    //                 <div className="navbar-header">
    //                     <span id="mobile-nav-open-btn">&#9776;</span>
    //
    //                     <a className="navbar-brand smooth-scroll logo-rsz" href="#home">
    //                         <img src="img/kt_logo/new_logo/knight-team-management-logo-dark.png" className={scroll ? "img-rsz" : "img-rsz"}
    //                              alt="logo"/>
    //                     </a>
    //                 </div>
    //                 <div className="container">
    //                     <div className="collapse navbar-collapse">
    //                         <ul className="nav navbar-nav pull-right">
    //                             <li><a className="smooth-scroll ipad-m" href="#home">Home</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#about">About</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#brands">Brands</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#portfolio">Influencers</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#offers">What We Offer</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#services">Video/Media</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#team">Team</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#portfolio-2">Addl. Services</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#contact">Contact</a></li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //
    //                 <div id="mobile-nav">
    //                     <span id="mobile-nav-close-btn">&times;</span>
    //                     <div id="mobile-nav-content">
    //                         <ul className="nav">
    //                             <li><a className="smooth-scroll ipad-m" href="#home">Home</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#about">About</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#brands">Brands</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#portfolio">Influencers</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#offers">What We Offer</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#services">Video/Media</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#team">Team</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#portfolio-2">Addl. Services</a></li>
    //                             <li><a className="smooth-scroll ipad-m" href="#contact">Contact</a></li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </nav>
    // </header>
  );
};

export default Navbar;
