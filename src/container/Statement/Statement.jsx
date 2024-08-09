import React from 'react';
import './Statement.scss';
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import { images } from '../../constants';
import { IoIosArrowDown } from 'react-icons/io';

const Statement = () => {
    return (
        <>


        <section id="statement">
            <div className="content-box-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tech-statement text-center">
                                <h1 className='styled-heading'>The Very best In Aesthetic Care</h1>
                                <hr className='styled-divider'/>
                                    <div className='text-style'>
                                    <p className='styled-p'>S&N Aesthetics is a premier reputable medical spa, specializing in laser hair removal, Botox, lip filler, teeth whitening, non surgical fat reduction, and weight loss. </p>
                                    <p className='styled-p'>Combining proven methods, quality products, advanced devices, and a highly professional and experienced team, S&N Aesthetics is your best choice for a most relaxing and rejuvenating experience.</p>
                                        <h4>Join us now, you deserve it</h4>
                                    </div>
                                <hr className='styled-divider'/>
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