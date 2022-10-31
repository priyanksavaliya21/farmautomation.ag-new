import React from "react";
import {Container} from 'react-bootstrap';
import { ReactComponent as Nuture_icon} from '../../assets/images/nuture-icon.svg';

const Wall_Tranined = () => {
   return(
      <>
        <div className="greener_wrapper">
            <div className="greener_wrap wall_tranined">
                 <Container>
                     <div className="greener_img">
                         <Nuture_icon  />
                     </div>
                     <div className="testimonial_greener">
                        <h2>“Body Condition Scoring is telling me how well I’ve been feeding my cows <br />
                            in the last month and is also a great projector of how well <br />
                            they’re going to calve. It warns me of future problems like milk fever”- Farmer Testimonial</h2>
                     </div>
                     <div className="just_sec">
                        <h2>A WELL-TRAINED EYE ON EVERY COW <br />
                             AND ON THE ENTIRE HERD.</h2>
                        <p>With Farm Automation’s BCS System, we keep tabs at a micro and macro level on every cow and on the entire herd, 
                           every day. BCS or Body Condition Scoring is a visual assessment of the fat and muscle cover on a cow that helps determine
                           their energy and protein reserves at all times. It’s a standardised measure that
                         gives a clear idea of the cow’s current health, fertility and production capacity as well as previous and future feeding requirements.</p>
                        <p>A herd needs a certain quantity of feed at certain times in their lactation cycle. An underfed herd produces less milk on that day by 5% to 7%. And if this continues, 
                           it decreases the milk production for the whole lactation period (10 months). So it is very important to maintain a healthy level of feed daily.</p>
                         <p>An excellent way of verifying if the feed system is working is to measure the collective BCS. We measure the BCS score individually, every day, 
                         and have a formula built-in to calculate the targeted collective BCS value. A perfect feeding system will achieve the target BCS in 30 to 40 days.</p>
                         <p>When the target BCS value is not achieved, we recalibrate the drone system accordingly so that pretty soon, we achieve a perfectly calibrated, error-free feeding system.</p>
                         <p>It is important that the cow is not underfed or overfed. The underfed cow <br />
                            produces less milk and an overfed cow runs the risk of contracting milk fever.</p>
                     </div>
                 </Container>
            </div>
        </div>
      </>
   )
};

export default Wall_Tranined;