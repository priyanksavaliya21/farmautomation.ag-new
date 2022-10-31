import React from "react";
import {Container} from 'react-bootstrap';
import { ReactComponent as  Paddock_management} from '../../assets/images/paddock-management.svg';
import { ReactComponent as  Grazing_icon } from '../../assets/images/GRAZING-icon.svg';
import { ReactComponent as  Silage_icon } from '../../assets/images/SILAGE-icon.svg';
import { ReactComponent as  Meal_icon } from '../../assets/images/MEAL-icon.svg';
 
const Greener = () => {
   return(
      <>
        <div className="greener_wrapper">
            <div className="greener_wrap">
                 <Container>
                     <div className="greener_img">
                         <Paddock_management />
                     </div>
                     <div className="testimonial_greener">
                        <h2>“Because i know how much grass I have in my paddock, available to the cows,
                         I can use the right amount of silage and keep my grain costs down.” - Farmer Testimonial</h2>
                     </div>
                     <div className="just_sec">
                        <h2>THE GRASS JUST GOT GREENER!</h2>
                        <p>With Farm Automation, yes, the grass can get better on your farm. And help you bring down costs. Here’s how:</p>
                        <p>Of the three types of feed available to the cows, the grazing feed or grass from the paddocks
                         is the largest source. This grazing feed is “free” compared to the other two types of feed: silage and 
                         meal because it’s a part of the sunk cost or what has already been invested in, as pastoral land. By ensur
                         ing that the right percentage of this feed is optimally fed to the cows, other supplements like silage and 
                         meals which represent a significant portion of the operational cost, are also consumed in just the right quantity.</p>
                         <p>It’s in the farmer’s best interest to measure, maximize and optimize the grazing feed.</p>
                         <span> <b>Taking the guesswork out of the grazing feed therefore becomes of key importance to ensure a wholesome feed
                          that’s perfectly balanced in terms of nutrition as well as cost</b> </span>
                     </div>
                     <div className="feature_greener">
                         <div className="typical">
                             <span>TYPICAL FEED DISTRIBUTION</span>
                         </div>
                         <div className="row">
                             <div className="col-lg-4">
                                  <div className="row">
                                       <div className="col-lg-3">
                                          <Grazing_icon />
                                       </div>
                                       <div className="col-lg-9">
                                           <div className="t_b_border">
                                               GRAZING FEED
                                           </div>
                                       </div>
                                  </div>
                                    <div className="row">
                                          <div className="col-lg-12">
                                             <ul className="typical_item">
                                                <li><span>Accurately measured by us*</span></li>
                                                <li>Majority of feed</li>
                                                <li>Cheapest Feed</li>
                                                <li><b>Maximizing grass feed. Minimises cost</b></li>
                                             </ul>
                                          </div>
                                   </div>
                             </div>
                             <div className="col-lg-4">
                                  <div className="row">
                                       <div className="col-lg-3">
                                          <Silage_icon />
                                       </div>
                                       <div className="col-lg-9">
                                           <div className="t_b_border">
                                               SILAGE
                                           </div>
                                       </div>
                                  </div>
                                    <div className="row">
                                          <div className="col-lg-12">
                                             <ul className="typical_item">
                                                <li>Measured with lab report</li>
                                                <li>Secondary part of feed</li>
                                                <li>Costs based on grazed paddock</li>
                                                <li><b>Increased use erodes profit</b></li>
                                             </ul>
                                          </div>
                                   </div>
                             </div>
                             <div className="col-lg-4">
                                  <div className="row">
                                       <div className="col-lg-3">
                                          <Meal_icon />
                                       </div>
                                       <div className="col-lg-9">
                                           <div className="t_b_border">
                                               MEAL
                                           </div>
                                       </div>
                                  </div>
                                    <div className="row">
                                          <div className="col-lg-12">
                                             <ul className="typical_item">
                                                <li>Measured with label</li>
                                                <li>Smallest part of feed</li>
                                                <li>Costs based on individual cow</li>
                                                <li><b>Increased use erodes profit</b></li>
                                             </ul>
                                          </div>
                                   </div>
                             </div>
                         </div>
                     </div>
                         <div className="text_typical">
                              <p>*Previously measured by guesswork</p>  
                              <span> <b>Farm Automation's Paddock management system helps maintain optimal forage on the paddock being grazed. <br />
                               The benefits of optimal forage are twofold - it decreases the cost of the grains and helps improve paddock capacity.</b> </span>  
                         </div>
                 </Container>
            </div>
        </div>
      </>
   )
};

export default Greener;