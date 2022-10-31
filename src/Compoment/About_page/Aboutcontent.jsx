import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as  Icon_About }  from '../../assets/images/Icon-About.svg';

const Aboutcontent = () => {
    return (
        <>
            <div className="about_content_wrap">
                <Container>
                <div class="feature-one__summery mb-0 text-center">
                    <Icon_About />
                </div>
                <div class="feature-one__summery1">

                    <h1>WHO WE ARE</h1>
                    <p class="text-left">We at Farm Automation, are a group of technologists who put our heads together to get to the heart of the problems dairy farmers face, and help create tech solutions that truly work for them. </p><br />
                    <p class="text-left">We started working with dairy farmers to understand how they operate and employed scientific methods to measure accurately, what the farmer had been ‘guessing’ until now based on experience. </p><br />
                    <p class="text-left">
                        The more we looked into their problems, the more opportunities we’ve found for technology to play a significant role in minimising their efforts and maximising returns.<br />
                        We’ve employed vast computing resources on the cloud to analyse the data collected, to provide simple, actionable insights.
                    </p><br />
                    <p class="text-left">We believe in constantly raising the bar, pushing Farm Automation tech forward so that it can handle more and more complex functions while simplifying the lives of Dairy farmers.</p><br />
                </div>

                <Row id="OurTeam">
                    <Col lg={12} className="text-center">
                        <img src={require('../../assets/images/nouse.png')} height="2" class="mb-3" />
                    </Col>
                </Row>
                </Container>
            </div>
        </>
    )
};

export default Aboutcontent;