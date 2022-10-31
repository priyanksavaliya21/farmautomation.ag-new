import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Abouthero = () => {
    var settings1 = {
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,

        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            }
          ]
    };

    return (
        <>
            <div className="about-team-one" id='about-team'>
                <Container className="text-center">
                    <h1 className="our_team_block">OUR TEAM</h1>
                </Container>
                <div className="team-one__carousel-wrap">
                    <div className="swiper-container">
                        <Slider {...settings1}>
                            <div className='text-center'>
                                <div className="swiper-slide mrl_15">
                                    <img src={require('../../assets/images/Team-Before.png')} className="img-fluid team-Before" />
                                    <div className="team-card">
                                        <div className="team-card__image">
                                            <img src={require('../../assets/images/KK-SANTHANAM.png')} alt="KK SANTHANAM" />
                                        </div>
                                        <h2>
                                            KK SANTHANAM
                                        </h2>
                                        <h5>FOUNDER</h5>
                                        <p className="text-left">
                                            KK is a technology expert today, professionally, but was born into a long line of dairy farmers. It was only a matter of time before he decided to put his two passions together, applying tech to solve nuanced problems dairy farmers face.<br /><br /> And Farm Automation was born. A critical thinker and an active learner, KK constantly looks for and finds opportunities for improvements, innovations and implementations that can truly add value to a dairy farmer’s life.
                                        </p>
                                    </div>
                                    <img src={require('../../assets/images/Team-After.png')} className="img-fluid team-After" />
                                </div>
                            </div>

                            <div className='text-center mt_60'>
                                <div className="swiper-slide mrl_15">
                                    <img src={require('../../assets/images/Team-Before.png')} class="img-fluid team-Before" />
                                    <div className="team-card">
                                        <div className="team-card__image">
                                            <img src={require('../../assets/images/ROGER-CHURCH.png')} alt="KK SANTHANAM" />
                                        </div>
                                        <h2>
                                            ROGER CHURCH
                                        </h2>
                                        <h5>CFO</h5>
                                        <p className="text-left">
                                            Roger is a CFO with a track record of effective business partnering across Retail, Institutional and International banking.
                                            <br />
                                            <br />
                                            Experienced in different geographies across different economic cycles, he is a strong strategic thinker and trusted advisor at Farm Automation.
                                        </p>
                                    </div>
                                    <img src={require('../../assets/images/Team-After.png')} className="img-fluid team-After" />
                                </div>
                            </div>

                            
                            <div className='text-center'>
                                <div className="swiper-slide mrl_15">
                                    <img src={require('../../assets/images/Team-Before.png')} className="img-fluid team-Before" />
                                    <div className="team-card">
                                        <div className="team-card__image">
                                            <img src={require('../../assets/images/XIN-ZHANG.png')} alt="KK SANTHANAM" />
                                        </div>
                                        <h2>
                                            XIN ZHANG
                                        </h2>
                                        <h5>CTO</h5>
                                        <p className="text-left">
                                            An innovative, and highly energetic member of Farm Automation, Xin has a proven ability to demonstrate value for customers in industry standard solutions.
                                            <br />
                                            <br />
                                            An individual, with excellent knowledge of system integration and machine learning, he has a knack for producing effective and robust digital solutions that can benefit an analogue world tremendously.
                                        </p>
                                    </div>
                                    <img src={require('../../assets/images/Team-After.png')} className="img-fluid team-After" />
                                </div>
                            </div>


                            <div className='text-center mt_60'>
                                <div className="swiper-slide mrl_15">
                                    <img src={require('../../assets/images/Team-Before.png')} class="img-fluid team-Before" />
                                    <div className="team-card">
                                        <div className="team-card__image">
                                            <img src={require('../../assets/images/ROGER-CHURCH.png')} alt="KK SANTHANAM" />
                                        </div>
                                        <h2>
                                            ROGER CHURCH
                                        </h2>
                                        <h5>CFO</h5>
                                        <p className="text-left">
                                            Roger is a CFO with a track record of effective business partnering across Retail, Institutional and International banking.
                                            <br />
                                            <br />
                                            Experienced in different geographies across different economic cycles, he is a strong strategic thinker and trusted advisor at Farm Automation.
                                        </p>
                                    </div>
                                    <img src={require('../../assets/images/Team-After.png')} className="img-fluid team-After" />
                                </div>
                            </div>


                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Abouthero;               