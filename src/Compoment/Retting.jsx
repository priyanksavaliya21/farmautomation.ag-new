import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { ReactComponent as Milk_bottle } from '../assets/images/milk-bottle.svg';




const Retting = () => {  

    return(
        <>
            <section id="retting">
                <div className='container_fluid'>
                    <Row>
                        <Col md={4} sm={12}>
                            <img src={require('../assets/images/man.png')} alt="" className="service-one__man-bg" />
                        </Col>

                        <Col md={5} sm={12} className="mob-top-pad">
                            <img src={require('../assets/images/five-star.png')} />
                            <div className="testimonials-one__icons text-white h4 mt-2"></div>
                            <p>I didn’t know for sure earlier... but now with Farm Automation</p>
                            <p>I know exactly how much grass is in the paddock.</p>
                            <p>I can feed my cows optimally and</p>
                            <p>our daily milk volumes are consistent and growing steadily! </p>
                            <br />
                            <p>
                                <b>John Gommans,</b> Farmer + Consultant,<br />
                                Caldermeade Farms<br />
                            </p>
                            <br />
                            <Milk_bottle />
                        </Col>

                        <Col md={3} sm={12} className="text-center">
                            <img src={require('../assets/images/Testimonial_Home_Page_Img.png')} className="mob-img" />
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Retting;