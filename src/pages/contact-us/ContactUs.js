import { Col, Container, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import MainButton from "../../UI/main-button/MainButton"
import classes from './ContactUs.module.css'

const ContactUs = () => {

    return (
        <div>
        
            <Container className={classes.FormContainer}>
                <Row className="d-flex justify-content-between">
                    
                    <Col xs={6} >
                        <div className={classes.FormPadding}>
                          
                          <h3 className={`fontWeight-bold ${classes.HeaderTitle} `}>Contact Us</h3>
                          
                         

                          <div className="mt-3 mb-3">
                              <label>Message</label>  
                              <Form.Control className={`form-control m-0 ${classes.TextArea}`} as="textarea" rows={5} />
                              <p className={classes.ValidationMessage}>Enter At Least 30 Character</p>
                          </div>


                          <div className="mt-4 mb-2">
                            <MainButton text="Send Message" />
                          </div>

                          <div className={`${classes.Contacts} text-center`}>
                            <h6>Get In Touch With Us</h6>
                            <div className={`d-flex justify-content-center`}>
                                <a href="/" target="_blank" ><img src="/social/telephone-call.png"  alt="telephone-call" /></a>
                                <a href="/" target="_blank" ><img src="/social/whatsapp.png"  alt="whatsapp" /></a>
                                <a href="/" target="_blank" ><img src="/social/gmail.png"  alt="gmail" /></a>
                                <a href="/" target="_blank" ><img src="/social/website.png"  alt="website" /></a>
                            </div>

                            <h6>Social Media</h6>
                            <div className={`d-flex justify-content-center`}>
                                <a href="/" target="_blank" ><img src="/social/twitter.png"  alt="twitter" /></a>
                                <a href="/" target="_blank" ><img src="/social/facebook.png"  alt="facebook" /></a>
                                <a href="/" target="_blank" ><img src="/social/linkedin.png"  alt="linkedin" /></a>
                            </div>

                          </div>

                          
                        </div>
                    </Col>

                    <Col xs={6}  >
                      <img src="/login.png" alt="img" className={classes.Background} />
                    </Col>

                </Row>
            </Container>   
        

            

        </div>
    )
}

export default ContactUs