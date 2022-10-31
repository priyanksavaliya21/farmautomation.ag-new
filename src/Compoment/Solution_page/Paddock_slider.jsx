import React from "react";
import {Container} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Paddock = () =>{

    var settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        arrows:true,
        
      };

   return(
    <>
        <div className="paddock_wrapper">
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <div className="paddock_inner_wrap">
                            <Slider {...settings2}>
                                <div className='paddock_wrap'>
                                    <div className="paddock_block">
                                        <div className="paddock_img">
                                            <img src={require('../../assets/images/01-PaddockRotation.gif')} alt />
                                        </div>
                                        <div class="paddock_content">
                                            <h3 class="title">INSIGHTS:</h3>
                                            <p class="description">
                                                <b> Collective BCS</b> <br />
                                                Collective BCS is measured and analysed to track the <br /> effects of the feeds.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="paddock_block">
                                        <div className="paddock_img">
                                            <img src={require('../../assets/images/02-PaddockFencing.gif')} alt />
                                        </div>
                                        <div class="paddock_content">
                                            <h3 class="title">INSIGHTS:</h3>
                                            <p class="description">
                                                <b>  Paddock Fencing</b> <br />
                                                You can mark an area on the paddock to know exactly how <br /> much forage is available there for grazing.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="paddock_block">
                                        <div className="paddock_img">
                                            <img src={require('../../assets/images/03-PaddockOutputImprovement.gif')} alt />
                                        </div>
                                        <div class="paddock_content">
                                            <h3 class="title">INSIGHTS:</h3>
                                            <p class="description">
                                                <b>Paddock Output Improvement</b> <br />
                                                The paddock’s residual is maintained at an optimal level in <br /> order to increase the forage output over time.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="paddock_block">
                                        <div className="paddock_img">
                                            <img src={require('../../assets/images/04-CollectiveBCS.gif')} alt />
                                        </div>
                                        <div class="paddock_content">
                                            <h3 class="title">INSIGHTS:</h3>
                                            <p class="description">
                                                <b> Collective BCS</b> <br />
                                                Collective BCS is measured and analysed to track the effects of the feeds.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="paddock_block">
                                        <div className="paddock_img">
                                            <img src={require('../../assets/images/05-IndividualBCS.gif')} alt />
                                        </div>
                                        <div class="paddock_content">
                                            <h3 class="title">INSIGHTS:</h3>
                                            <p class="description">
                                                <b> Individual BCS</b> <br /> Individual BCS scores are analysed to monitor <br /> the right BCS based on the lifecycle of the cow- <br />
                                                be it Pregnancy or Calving or Lactation cycle.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="paddock_block">
                                        <div className="paddock_img">
                                            <img src={require('../../assets/images/06-SeedingOpportunities.gif')} alt />
                                        </div>
                                        <div class="paddock_content">
                                            <h3 class="title">INSIGHTS:</h3>
                                            <p class="description">
                                            <b> Seeding Opportunities <span>[Coming Soon!)</span></b> <br />
                                            An Augmented Reality App that shows the low-density spots on the <br /> paddock as the mobile is moved, in real time.
                                            </p>
                                        </div>
                                    </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </>
   )
};

export default Paddock;