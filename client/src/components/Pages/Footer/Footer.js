import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import GoogleTranslate from "../../features/GoogleTranslate";

import "./Footer.css"
class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="unique-color-dark" className="page-footer font-small pt-0" style={{marginTop:"100px",backgroundColor:"#333"}}>
                <div style={{backgroundColor: '#6351ce'}}>
                    <Container>
                        <Row className="py-4 d-flex align-items-center">
                            <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                            </Col>
                            <Col md="6" lg="7" className="text-center text-md-right">
                                <a className="fb-ic ml-0" href="https://www.facebook.com/tayloryao25"><i className="fa fa-facebook white-text mr-lg-4"></i></a>
                                <a className="tw-ic" href="https://twitter.com/yaotaylor"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>
                                <a className="gplus-ic" href="https://plus.google.com/u/0/112614749016373872270"><i className="fa fa-google-plus white-text mr-lg-4"> </i></a>
                                <a className="li-ic" href="https://www.linkedin.com/in/taylor-yao-a75325153/"><i className="fa fa-linkedin white-text mr-lg-4"> </i></a>
                                <a className="ins-ic" href="https://www.instagram.com/tayloryao/"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="mt-5 mb-4 text-center text-md-left">
                    <Row className="mt-3">
                        <Col md="3" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Assime-228</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p>
                                We are hier to make the besiness eazy for you and your customers.
                            </p>
                        </Col>
                        <Col md="2" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Products</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><a href="#!">Open Store</a></p>
                            <p><a href="#!">Request a deal</a></p>
                        </Col>
                        <Col md="3" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><a href="#!">Your Account</a></p>
                            <p><a href="#!">Become an Partner</a></p>
                            <p><a href="#!">Shipping Rates</a></p>
                            <p><a href="#!">Help</a></p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><i className="fa fa-home mr-3"></i> Atlanta, GA, 30324, US</p>
                            <p><i className="fa fa-envelope mr-3"></i> yaotaylor@gmail.com</p>
                            <p><i className="fa fa-phone mr-3"></i> + 01 404 862 9078</p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong><GoogleTranslate/></strong></h6>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://fast-woodland-18395.herokuapp.com/"> assime-228 </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
