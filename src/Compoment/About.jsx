import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { ReactComponent as Tree } from '../assets/images/tree.svg';
import { ReactComponent as Accurate_icon } from '../assets/images/AccurateInformation.svg';
import { ReactComponent as Actionable_icon } from '../assets/images/ActionableInsights.svg';
import { ReactComponent as Decision_icon } from '../assets/images/DecisionMaking.svg';
import { ReactComponent as SavesTime_icon } from '../assets/images/SavesTime.svg';
import { ReactComponent as Better_icon } from '../assets/images/BetterUtilization.svg';
import { ReactComponent as Increase_icon } from '../assets/images/IncreasedEefficiency.svg';



const About = () => {  
    return(
        <>
            <section id="about-one">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='about-one__content text-center'>
                                <div className='productive'>
                                    <Tree />
                                    <h3>BE MORE PRODUCTIVE.</h3>
                                    <p>A Farmers' work is never ending! At Farm Automation we provide you some simple tools to help you see light at the <br />end of the tunnel.  <b> By automating some of the time-consuming work you carry out,<br />you can redirect your focus to more productive tasks such as herd health or pasture management.</b></p>
                                </div>
                                <div className='productive'>
                                    <img src={require('../assets/images/Drone.png')} className="about-one__bg-shape-1" alt="" />
                                    <h3>WITH LESS GUESS WORK!</h3>
                                    <p>With state-of-the-art tech: drones, sensors and comprehensive analytics,<br />we help you accurately measure and manage feed supply and monitor herd health regularly. </p>
                                    <p><b>This helps take the guesswork out of farm work, because you’re equipped with reliable information that helps<br />ensure optimal feed, healthier cows and consistently good milk production. </b> </p>
                                </div>
                                <div className='productive'>
                                    <img src={require('../assets/images/Drone-Remote.png')} className="DroneRemote" />
                                    <h2>WHY FARM AUTOMATION?</h2>
                                    <div className="about-one__icon-row">
                                        <div className="about-one__box">
                                            <Accurate_icon />
                                            <h4><a href="#">Helps you know “What exactly am I feeding my cows?”</a></h4>
                                        </div>
                                        <div className="about-one__box">
                                            <Actionable_icon />
                                            <h4><a href="#">Gives you a clearer picture of “What grass am I growing?”</a></h4>
                                        </div>
                                        <div className="about-one__box">
                                            <Decision_icon />
                                            <h4><a href="#">Gives consultants key information that helps them give you a real grazing plan</a></h4>
                                        </div>

                                        <div className="about-one__box">
                                            <SavesTime_icon />
                                            <h4><a href="#">Takes over mundane tasks</a></h4>
                                        </div>
                                        <div className="about-one__box">
                                            <Better_icon />
                                            <h4><a href="#">Helps you free up some ‘quality time’ that you can put to better use</a></h4>
                                        </div>
                                        <div className="about-one__box">
                                            <Increase_icon />
                                            <h4><a href="#">Saves you a lot of time, effort and costs!</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        
        
        </>
    );
}

export default About;