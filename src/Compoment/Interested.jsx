import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import { Form1 } from "./Form";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

import { ReactComponent as FARMERS} from '../assets/images/Icon-FARMERS.svg';
import { ReactComponent as Left_farmers } from '../assets/images/icon-left-farmers.svg';
import { ReactComponent as Right_farmers } from '../assets/images/icon-right-farmers.svg';

import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"
 

const Interested = () => {
  const [modalShow, setModalShow] = React.useState(false);
  
 let phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ ;
 let addresRegExp = /^[a-zA-Z0-9\s,.'-]{3,}$/ ;
 let farmNameRegExp =  /^\s*([0-9a-zA-Z]*)\s*$/ ;
  const validate = Yup.object({
    name: Yup.string()
      .max(40, "Must be 40 characters or less")
      .required("Please Enter Your Name"),
    phone: Yup.string() 
      .matches(phoneRegExp, 'Phone number is not valid')
      .max(10, "Must be 10 characters or less")
      .required("Required and only enter valid Contact Number"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Please Enter Your Email"),
    farmName: Yup.string()
    .matches(farmNameRegExp , 'FarmName is not valid')
      .max(60, "Must be 60 characters or less")
      .required("Please Enter Your  FarmName"),
    address: Yup.string()
    .matches(addresRegExp, 'Address is not valid')
      .max(90, "Must be 90 characters or less")
      .required("Please Enter Your Farm Adress"),
  });

  // ----------------------------incremet numbers code--------------------------------------------------------------------------------
  window.onscroll = myScroll;
  var counter = 0;
  function myScroll(){
    if(document.querySelector(".for_numbers_icrement")){
    var hT = document.querySelector(".for_numbers_icrement").offsetTop;
      var hH = parseInt(document.querySelector(".for_numbers_icrement").offsetHeight);
      var wH =  parseInt(window.innerHeight);
   //   console.log(window.innerHeight);
  
  
     // console.log( 'heigth' + parseInt(hH-wH));
      if(counter == 0){ // if counter is 1, it will not execute
      if(window.pageYOffset > parseInt(hH-wH) ){
          scrollbottom();
          counter++; // increment the counter by 1, new value = 1
          }
      }
    }
  }
  function scrollbottom() {

      const counter = document.querySelectorAll(".counter");        
          
      counter.forEach((item) => {

          item.innerHTML = 0;

          const update = () => {
              const finalcount = +item.getAttribute("data-tag");

              const startcount = Number(item.innerHTML);
              // console.log(finalcount);
              //  console.log(startcount);
              const incr = finalcount / 18;


              if (startcount < finalcount) {
                  item.innerHTML = `${Math.round(startcount + incr)}`;
                  setTimeout(update, 100);
              } else {
                  item.innerHTML = `${finalcount}`;
                  //  console.log("jhiii");
              }

          }
          
          update();
          
      });
  
      
  };




  return (
    <>
      <section id="interested">
        <Container>
          <Row>
            <Col col={12}>
              <div className="farmers">
                <Row className="farmers_row">
                  <Col sm={8}>
                    <Row>
                      <Col sm={12}>
                        <div className="rds-line"></div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                        <FARMERS />
                      </Col>
                      <Col sm={10}>
                        <Row className="spacer-1">
                          <Col sm={12}>
                            <Row>
                             
                                <div className="num_wrapper">
                                    <span className="counter"  data-tag="18"></span>
                                    <span className="span-txt"> FARMERS</span>
                                </div>
                               
                              
                                <div className="num_wrapper">
                                    <span className="counter"  data-tag="23"></span>
                                    <span className="span-txt">CONSULTANTS</span>
                                </div>
                            
                              
                                <div className="num_wrapper">
                                    <span className="counter"  data-tag="46"></span>
                                    <span className="span-txt"> FARMS</span>
                                </div>
                             
                            </Row>
                          </Col>
                        </Row>
                      
                        <Row className="automation_text">
                          <Col sm={12} className="Interstedauto">
                            <Row>
                              <Col sm={2} className="p-0 text-right">
                                <Left_farmers />
                              </Col>

                              <Col sm={7} className="p-0 text-center">
                                <p className="farm_aut">
                                  INTERESTED IN FARM AUTOMATION
                                </p>
                              </Col>

                              <Col sm={3} className="p-0 text-left">
                                <Right_farmers />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className="row">
                      <Col sm={12}>
                        <div className="rds-line"></div>
                      </Col>
                    </Row>
                  </Col>

                  <Col sm={4}>
                    <a href="#0" onClick={() => setModalShow(true)}>
                      <img
                        src={require('../assets/images/Map-Img.png')}
                        className="img-fluid pt-1"
                      />
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <br />
          <br />

          <Row>
            <Col sm={12} className="text-center text-white">
              {/* <p style="font-size:20px;">We are interested in partnering with you and improving the performance <br />
                            of Australian Dairy farms. Your success is our success.  We’ll be happy to share a free,<br /> 
                            customised assessment of your farm’s current performance with you.</p> */}

              <p className="interested_in_partnering">
                We are interested in partnering with you and improving the
                performance <br />
                of Australian Dairy farms. Your success is our success. We’ll be
                happy to share a free,
                <br />
                customised assessment of your farm’s current performance with
                you.
              </p>
            </Col>
          </Row>

          <Row id="Intersted_wrap">
            <Col sm={12}>
              <div className="contact-one__form contact-form-validated">
              <span className="form-messege">Your Form has been submitted successfully  <><ThumbUpAltIcon className="iconx" /></> </span>
                <h2 className="text-center contact-one__form_title">
                  INTERESTED?
                </h2>
                <p className="text-center text-white">
                  Please fill in these details and we’ll get back to you
                </p>
                <br />
                <Formik
                  initialValues={{
                    name: "",
                    phone: "",
                    email: "",
                    farmName: "",
                    address: "",
                  }}
                  validationSchema={validate}
                  onSubmit={async (values, {resetForm}) => {
                  //  console.log(values);
                        
                    let id = new Date().getTime().toString();
                    const { name, phone, email, farmName, address } = values;
                    //add your firebase here
                    await addDoc(collection(db,'contacts'),{
                      id,
                      name,
                      phone,
                      email,
                      farmName,
                      address,
                }).then((res)=>{

                      if(res.status == 200){
                        
                            resetForm({values:''})
                            const messege = document.querySelector(".form-messege"); 
                            messege.classList.add("show");  
                            setTimeout(function () {
                              messege.classList.remove("show");
                            }, 4000); 

                      }
                  })
                }}
                >
                  {(formik) => (
                    <Form>
                      <Row className="input_gp_wrap">
                        <Form1 type="text" name="name" placeholder="Name" />
                        <Form1
                          type="number"
                          name="phone"
                          placeholder="Mobile Number"
                        />
                        <Form1
                          type="email"
                          name="email"
                          placeholder="Email ID"
                        />
                        <Form1
                          type="text"
                          name="farmName"
                          placeholder="Farm Name"
                        />
                        <Form1
                          type="text"
                          name="address"
                          placeholder="Farm Address"
                        />
                        <Col lg={4}>
                          <div className="form_btn">
                            <button type="submit" className="thm-btn btn-block">
                              SUBMIT
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="chapel_street">
          <Row>
            <Col sm={12}>
              <div className="bottom-footer__links">
                <Row>
                  <Col sm={9} className="pt-7">
                    <div className="location_wrap">
                      <p>
                        <img
                          src={require('../assets/images/place.png')}
                          alt=""
                        />
                        Farm Automation | Suite 1, 1st Floor 457 Chapel Street
                        South Yarra Vic 3141 Australia |
                      </p>
                      <a href="#" className="">
                        &nbsp;support@farmautomation.au
                      </a>
                    </div>
                  </Col>
                  <Col sm={3}>
                    <div className="footer__social">
                      <a href="#" className="fa-facebook-square">
                        <img
                          src={require('../assets/images/facebook_icon.png')}
                          alt=""
                        />
                      </a>
                      <a href="#" className="fa-twitter">
                        <img
                          src={require('../assets/images/twitter_icon.png')}
                          alt=""
                        />
                      </a>
                      <a href="#" className="fa-instagram">
                        <img
                          src={require('../assets/images/instagram_icon.png')}
                          alt=""
                        />
                      </a>
                      <a href="#" className="fa-whatsapp">
                        <img
                          src={require('../assets/images/whatsapp_icon.png')}
                          alt=""
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={require('../assets/images/Map.jpg')}
          alt=""
        />
      </Modal.Body>
    </Modal>
  );
}
export default Interested;
