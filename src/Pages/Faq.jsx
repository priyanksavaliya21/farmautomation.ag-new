import React from "react";
import Faqhero from "../Compoment/Faq_Page/Faqhero";
import Faqcontent from "../Compoment/Faq_Page/Faqcontent";
import Interested  from "../Compoment/Interested";
import { BackButton } from "../Compoment/Backbtn";

const Faq = () => {
    return (
        <>
            <BackButton />
            <div className="main-content for_numbers_icrement" id="faq_page">
                <Faqhero />
                <Faqcontent />
                <div id="intersted_section">
                    <Interested />
                </div>

            </div>
        </>
    )
};

export default Faq;