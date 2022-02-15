import React from "react";
import footerlogo from './assets/white-logo.png';
import { Col, Container, Row, Footer } from 'mdbreact';


export const FooterPage = () => {
  return (
      <div className="Foter">
    <Footer color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
                <Container className="text-left">
                    <Row>
                        <Col md="3">
                            <img src={footerlogo} className="footerlogo" alt="footerlogo"/>
                            
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col className="About" md="3">
                            <h5>About Us</h5>
                            <p>We envision a future of sustainable cities and communities powered by urban farming</p>
                            <p>We build and manage urban farms to transform under-utilised areas into vibrant natural spaces, create sources of nutritious organic food, and engage and empower communities to lead a sustainable lifestyle.</p>
                        </Col>
                        <Col md="2">
                            
                        </Col>
                        <Col md="3">
         
                            <ul className="list-unstyled">
                                <li>Daxhboard</li>
                                <li>Farm Pinner</li>
                                <li>Crop Magazine</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />

                    </Row>
                </Container>
             
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></a></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Rooftop Republic Co. Limited All Rights Reserved 
                    </Container>
                </div>
            </Footer>
            </div>
  );
}

