import React from 'react';
import Hero from "../Compoment/Hero";
import About  from "../Compoment/About";
import Service  from "../Compoment/Service";
import Retting  from "../Compoment/Retting";
import Interested  from "../Compoment/Interested";
import {BackButton }from "../Compoment/Backbtn";
 
function Landing() {   
    return (
        <>
            <BackButton />
            <div className="main-content" id="landingpage">
                <div className='for_numbers_icrement'>

                <Hero /> 

                <About />
        
                <Service />

                <Retting />
                </div>
                <Interested />     
            </div>

        </>
    );
}

export default Landing;