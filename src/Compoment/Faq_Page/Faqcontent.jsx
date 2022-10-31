import React from "react";
import { Container } from 'react-bootstrap';
import { ReactComponent as  Icon_FAQ } from '../../assets/images/Icon-FAQ.svg';
const Faqcontent = () => {
    return (
        <>
            <div className="faq_content_wrap">
                <Container>
                    <div className="faq_details">
                        <div className="faq_logo text-center">
                            <Icon_FAQ />
                        </div>
                        <div class="contact-one__summery text-left">
                            <h5>Does this product require technological competency?</h5>
                            <p>
                                We at Farm Automation have tried to make the technology easily accessible to farmers. <br />
                                The farmer can therefore focus on what he does best, and not have to worry about handling complex technology. <br />
                                So, no, a farmer doesn’t need any special technological competency to handle this product.
                            </p>

                            <h5>Are farmers involved in the design of these products / solutions?</h5>
                            <p>Yes. All aspects of the Farm Automation solution have been designed and developed with valuable inputs from dairy farmers and subject matter experts.</p>

                            <h5>How much does it cost?</h5>
                            <p>
                                Farmers are charged a nominal ‘minimum-commitment-charge’ for the services provided per month, based on the size of their farms.<br />
                                And a ‘result-based-charge’ where an amount is charged based on the improved milk production on a monthly basis.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
};

export default Faqcontent;