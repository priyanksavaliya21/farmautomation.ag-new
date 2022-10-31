import React from "react";
import {Container} from 'react-bootstrap';

const How_we = () =>{
   return(
        <>
           <div className="how_we_wrapper">
              <div className="how_we_shep1">
                  <img src={require('../../assets/images/Hand-Remote.png')} alt  />
              </div>
              <Container>
              <div className="row">
                  <div className="col-md-12">
                        <div className="how_we_wrap">
                            <h2>HOW WE DO IT.</h2>
                            <p>We use Drone Technology to scan the whole paddock and accurately measure: </p>
                            <ol>
                                <li><span>1.</span>The quantity of grass before grazing </li>
                                <li><span>2.</span>The density distribution of the paddock</li>
                                <li><span>3.</span>The grazed amount after grazing</li>
                                <li><span>4.</span>We provide this information in a comprehensible manner to help you take informed decisions.</li>
                            </ol>
                        </div>
                  </div>
              </div>
              </Container>
           </div> 
        </>
   )
};

export default How_we;