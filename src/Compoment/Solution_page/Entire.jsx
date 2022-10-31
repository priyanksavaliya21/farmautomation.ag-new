import React from "react";
import {Container} from 'react-bootstrap';  

const Entire = () =>{
   return(
        <>
           <div className="how_we_wrapper entire_wrapper">
              <div className="how_we_shep1">
                  <img src={require('../../assets/images/cow-img.png')} alt  />
              </div>
              <Container>
              <div className="row">
                  <div className="col-md-12">
                        <div className="how_we_wrap">
                            <h2>HOW WE DO IT.</h2>
                            <p>We use camera technology to score the BCS of every cow every day without making contact,</p>
                            <p>to measure collective BCS and track its progress towards the target BCS.</p>
                        </div>
                  </div>
              </div>
              </Container>
           </div> 
        </>
   )
};

export default Entire;