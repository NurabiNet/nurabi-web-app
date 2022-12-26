import { Col, Container, Row } from "react-bootstrap"
import { FaArrowLeft } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import MainButton from "../../UI/main-button/MainButton"
import classes from './ForgetPassword.module.css'

const ForgetPassword = () => {

    return (
        <div>
        
            <Container className={classes.FormContainer}>
                <Row className="d-flex justify-content-between">
                    
                    <Col xs={6} >
                        <div className={classes.FormPadding}>
                          
                          <h3 className={`fontWeight-bold ${classes.HeaderTitle} `}>Forget Password</h3>
                          <p className={`${classes.HeaderPargraph}`}>Enter Your Email Address To Confirm</p>
                          
                          <div className="mt-3 mb-3">
                              <label className="mb-2">Email</label>  
                              <input type="text" className={`form-control m-0 ${classes.Input}`}   required="" />
                          </div>

                          
                          <div className="mt-4 mb-2">
                            <MainButton text="Confirm" />
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

export default ForgetPassword