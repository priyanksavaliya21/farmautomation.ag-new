import React from "react";
import Abouthero from "../Compoment/About_page/Abouthero";
import Aboutcontent from "../Compoment/About_page/Aboutcontent";
import Aboutteam from "../Compoment/About_page/Aboutteam";
import Interested  from "../Compoment/Interested";
import { BackButton } from "../Compoment/Backbtn";

const AboutUs = () => {
    return (
        <>
            <BackButton />
            <div className="main-content for_numbers_icrement" id="about_page">
                <Abouthero />
                <Aboutcontent />
                <Aboutteam />
                <Interested />
            </div>
        </>
    )
};

export default AboutUs;