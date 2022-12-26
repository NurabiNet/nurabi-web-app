import { Col, Container, Row } from "react-bootstrap"
import { FaArrowLeft } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import MainButton from "../../UI/main-button/MainButton"
import classes from './verify.module.css'

const Verify = () => {

    return (
        <div>
        
            <Container className={classes.FormContainer}>
                <Row className="d-flex justify-content-between">
                    
                    <Col xs={6} >
                        <div className={classes.FormPadding}>
                          <p style={ { 'color' : '#fb5456' , 'fontWeight' : 'bold' } }>
                            <FaArrowLeft /> Back
                          </p>
                          <h3 className={`fontWeight-bold ${classes.HeaderTitle} `}>Enter Your Verification Code</h3>
                          <p className={`${classes.HeaderPargraph}`}>We Sent Verification Code To Number 0125555555555 From 5 Digits Please Confirm This</p>
                          <div className="mt-5 mb-5 d-flex justify-content-between">
                              <input type="text" className={`form-control m-0 ${classes.VerifyInput}`} placeholder="-" name="verify-1" required="" />
                              <input type="text" className={`form-control m-0 ${classes.VerifyInput}`} placeholder="-" name="verify-2" required="" />
                              <input type="text" className={`form-control m-0 ${classes.VerifyInput}`} placeholder="-" name="verify-3" required="" />
                              <input type="text" className={`form-control m-0 ${classes.VerifyInput}`} placeholder="-" name="verify-4" required="" />
                              <input type="text" className={`form-control m-0 ${classes.VerifyInput}`} placeholder="-" name="verify-5" required="" />
                          </div>
                          <div className="mt-4 mb-2">
                            <NavLink to="/" className="m-2" ><MainButton text="Verify" /></NavLink>
                          </div>
                          <div className="col-12 text-center">
                              <p className="mb-0 mt-3 send-code">
                                  <a href="#" className={`fontWeight-bold  ${classes.SendCode}`}>Send Code Again</a>
                              </p>
                          </div>
                        </div>
                    </Col>

                    <Col xs={6}  >
                      <img src="/login.png" alt="img" className={classes.LoginBackground} />
                      
                    </Col>

                </Row>
            </Container>   
        

            

        </div>
    )
}

export default Verify