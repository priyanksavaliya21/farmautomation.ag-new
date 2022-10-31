import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';




const Hero = () => {  

 
    
 

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 2000,
        autoplaySpeed: 3500,
        autoplay: true,
        arrows:false,
      };

    return(
        <>
            <section id="main-slider">
                <div className='carouselExampleFade'>
                    <div className='carousel-inner' id="video-1">
                        {/* <video  src={require('../assets/images/Hero_video.mp4')} loop={true} muted={true} autoPlay={true} className="video-1__bg">
                            <source src={require('../assets/images/Hero_video.mp4')} />
                        </video> */}
                        <ShakaPlayer src={require('../assets/images/Hero_video.mp4')} className="video-1__bg" id="video"   autoPlay loop={true} muted={true}    />

                        <div className='hero_section_wrapper'>
                            <div className='heroslider_block'> 
                                <Slider {...settings}>
                                    <div className='text-center'>
                                        <h2 className='hero_title_item'>SAY HELLO TO YOUR NEW FARM HAND! </h2>
                                        <p className='hero_title_sub_item'>Farm Automation: Your new Paddock and Herd Management Partner.</p>
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='hero_title_item'>YOUR SEARCH FOR GREENER PASTURES ENDS HERE.</h2>
                                        <p className='hero_title_sub_item'>Optimised paddocks, healthier herds and better profits are here to stay!</p>
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='hero_title_item'>THE BEST WAY TO GROW YOUR GRASS AND YOUR PROFITS</h2>
                                        <p className='hero_title_sub_item'>Measure and grow your farm, accurately, quickly, conveniently.</p>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Hero;