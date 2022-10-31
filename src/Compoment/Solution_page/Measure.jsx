import React from "react";
import {Container} from 'react-bootstrap';
import { ReactComponent as  Information_icon } from '../../assets/images/Information-icon.svg';

const Measure = () => {
   return(
      <>
        <div className="greener_wrapper measure_wrapper">
            <div className="greener_wrap measure_wrap">
                 <Container>
                     <div className="greener_img">
                         <Information_icon />
                     </div>
                     <div className="testimonial_greener">
                        <h2>“Previously we would go up and down 10-15% in our daily milk volumes. <br />
                            I always knew that was a sign of underfeeding but now we’ve got great, consistent <br />
                            milk production from day one, day after day!”- Farmer Testimonial</h2>
                     </div>
                     <div className="just_sec">
                        <h2>MADE TO MEASURE.</h2>
                        <p>We collect information on the growth of your paddocks and on your herd’s Body Condition Score (BCS) daily.</p>
                        <p>With these two sets of customised data, we are able to provide you with the exact status
                         of your farm automation at all times, in an easy-to-comprehend format, on your mobile, so you’ll always stay in the know, even on the go!</p>
                     </div>
                     <div className="measure_block">
                        <div class="row">
                            <div class="col-lg-12">
                                <h6> THE ACTIONABLE INSIGHTS PROVIDED INCLUDE:</h6>
                            </div>
                        </div>
                        <div class="row measure_sec">
                            <div class="col-lg-6">
                                1. PADDOCK ROTATION<br />
                                2. PADDOCK FENCING<br />
                                3. PADDOCK OUTPUT IMPROVEMENT
                            </div>
                            <div class="col-lg-6">
                                4. COLLECTIVE BCS<br />
                                5. INDIVIDUAL BCS<br />
                                6. SEEDING OPPORTUNITIES <span>**COMING SOON!**</span>
                            </div>
                        </div>
                     </div>
                 </Container>
            </div>
        </div>
      </>
   )
};

export default Measure;