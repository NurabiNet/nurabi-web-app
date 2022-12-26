import { Col, Container, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import MainButton from "../../UI/main-button/MainButton"
import classes from './login.module.css'

const Login = () => {

    return (
        <div>
        
            <Container className={classes.FormContainer}>
                <Row className="d-flex justify-content-between">
                    
                    <Col xs={6} >
                        <div className={classes.FormPadding}>
                          
                          <h3 className={`fontWeight-bold ${classes.HeaderTitle} `}>Login</h3>
                          <p className={`${classes.HeaderPargraph}`}>Enter Your Phone Number and Password To Access Your Account</p>
                          
                          <div className="mt-3 mb-3">
                              <label>Mobile Number</label>  
                              <input type="text" className={`form-control m-0 ${classes.VerifyInput}`} placeholder="+(12) 635 4567 645"  required="" />
                          </div>

                          <div className="mt-3 mb-3">
                              <label>Password</label>  
                              <input type="password" className={`form-control m-0 ${classes.VerifyInput}`} placeholder="**********"  required="" />
                              <p className={classes.forgetPassword}>
                              <NavLink
                              to="/forget-password"
                              activeClassName={classes.active}
                              className="mr-auto"
                              style={{ 'color': '#08cad7'}}
                              >
                                Forget Password?
                              </NavLink>
                              </p>
                          </div>
                          <div className="mt-4 mb-2">
                            <MainButton text="Login" />
                          </div>

                          <div className="col-12 text-center">
                            <p className="mb-0 mt-3"><small className="text-dark mr-2">I Don't have an account</small>
                            <NavLink to="/register" className={`text-primary font-weight-bold ${classes.CreateOne} `}> Create One</NavLink>
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

export default Login