import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { ReactComponent as  Paddock_icon } from '../assets/images/paddock-management.svg';
import { ReactComponent as Nuture_icon } from '../assets/images/nuture-icon.svg';
import { ReactComponent as  Information_icon } from '../assets/images/Information-icon.svg';


const Service = () => {  

    return(
        <>
            <section id="service">
                <Container>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                        <a  href="/Solution#paddock_section">
                            <div className='service_detail'>
                                <img src={require('../assets/images/Herd-tt.png')} width="70%" className="service-two-top" />
                                <div className="service-two__card cursor-pointer Paddock-link">

                                    <div className="service-two__card-image"><Paddock_icon /> </div>

                                    <div className="service-two__card-content">
                                        <h3>PADDOCK MANAGEMENT</h3>
                                        <p>Farmers often eyeball paddocks to know how much grass is available. </p>
                                        <p> But using drones you can: </p>
                                        <ol>
                                            <li> Measure your paddocks accurately + consistently</li>
                                            <li> Graze your paddock with precision</li>
                                            <li> Use the forage available. And keep the silage and grain cost optimal </li>
                                            <li> Ensure your herd is fed optimally without overspending</li>
                                            <li> Enable consistently good milk production</li>
                                        </ol>
                                        <a  href="/Solution#paddock_section">LEARN MORE &gt;</a>
                                    </div>
                                    <div className="service-two__card-image"> <img src={require('../assets/images/paddock-1.jpg')} alt="PADDOCK MANAGEMENT" /> </div>

                                </div>
                                <img src={require('../assets/images/Herd-Bt.png')} width="70%" className="service-two-bottom"></img>
                            </div>
                            </a>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="mt_120">
                        <a href="/Solution#nutrition_section">
                            <div className='service_detail'>
                            <img src={require('../assets/images/Herd-tt.png')} width="70%" className="service-two-top" />
                                <div className="service-two__card cursor-pointer Paddock-link">

                                    <div className="service-two__card-image"> <Nuture_icon /> </div>

                                    <div className="service-two__card-content">
                                        <h3>PADDOCK MANAGEMENT</h3>
                                        <p>Farmers often eyeball paddocks to know how much grass is available. </p>
                                        <p> But using drones you can: </p>
                                        <ol>
                                            <li> Measure your paddocks accurately + consistently</li>
                                            <li> Graze your paddock with precision</li>
                                            <li> Use the forage available. And keep the silage and grain cost optimal </li>
                                            <li> Ensure your herd is fed optimally without overspending</li>
                                            <li> Enable consistently good milk production</li>
                                        </ol>
                                        <a href="/Solution#nutrition_section">LEARN MORE &gt;</a>
                                    </div>
                                    <div className="service-two__card-image"> <img src={require('../assets/images/NUTRTION-icon.jpg')} alt="PADDOCK MANAGEMENT" /> </div>

                                </div>
                                <img src={require('../assets/images/Herd-Bt.png')} width="70%" className="service-two-bottom"></img>
                            </div>
                            </a>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="service-two-mt-120">
                        <a href="/Solution#management_section">
                            <div className='service_detail'>
                                <img src={require('../assets/images/Herd-tt.png')} width="70%" className="service-two-top" />
                                <div className="service-two__card cursor-pointer Paddock-link">

                                    <div className="service-two__card-image"> <Information_icon /> </div>

                                    <div className="service-two__card-content">
                                        <h3>PADDOCK MANAGEMENT</h3>
                                        <p>Farmers often eyeball paddocks to know how much grass is available. </p>
                                        <p> But using drones you can: </p>
                                        <ol>
                                            <li> Measure your paddocks accurately + consistently</li>
                                            <li> Graze your paddock with precision</li>
                                            <li> Use the forage available. And keep the silage and grain cost optimal </li>
                                            <li> Ensure your herd is fed optimally without overspending</li>
                                            <li> Enable consistently good milk production</li>
                                        </ol>
                                        <a href="/Solution#management_section">LEARN MORE &gt;</a>
                                    </div>
                                    <div className="service-two__card-image"> 
                                    <img src={require('../assets/images/information-icon2-.jpg')} alt="PADDOCK MANAGEMENT" />
                                    </div>

                                </div>
                                <img src={require('../assets/images/Herd-Bt.png')} width="70%" className="service-two-bottom"></img>
                            </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Service;