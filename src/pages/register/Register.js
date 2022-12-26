import { Col, Container, Row } from "react-bootstrap"
import { FaArrowLeft } from "react-icons/fa"
import MainButton from "../../UI/main-button/MainButton"
import classes from './register.module.css'

const Register = () => {

    return (
        <div>
        
            <Container className={classes.FormContainer}>
                <Row className="d-flex justify-content-between">
                    
                    <Col xs={6} >
                        <div className={classes.FormPadding}>
                          <p style={ { 'color' : '#fb5456' , 'fontWeight' : 'bold' } }>
                            <FaArrowLeft /> Back
                          </p>
                          <h3 className={`fontWeight-bold ${classes.HeaderTitle} `}>Create Your Account</h3>
                          <div className="mt-3 mb-3">
                              <label>Name</label>  
                              <input type="text" className={`form-control m-0 ${classes.FormInput}`} placeholder="Ahmed Taha"  required="" />
                          </div>
                          <div className="mt-3 mb-3">
                              <label>Mobile Number</label>  
                              <input type="text" className={`form-control m-0 ${classes.FormInput}`} placeholder="+(12) 635 4567 645"  required="" />
                          </div>
                          <div className="mt-3 mb-3">
                              <label>Email Address</label>  
                              <input type="email" className={`form-control m-0 ${classes.FormInput}`} placeholder="Example@mail.com"  required="" />
                          </div>
                          <div className="mt-3 mb-3">
                              <label>Select Language</label>  
                              <input type="text" className={`form-control m-0 ${classes.FormInput}`} placeholder="Egypt"  required="" />
                          </div>
                          <div className="mt-3 mb-3">
                              <label>Date Of Birth</label>  
                              <input type="text" className={`form-control m-0 ${classes.FormInput}`} placeholder="DD-mm-yyyy"  required="" />
                          </div>
                          <div className="mt-3 mb-3">
                              <label>Password</label>  
                              <input type="password" className={`form-control m-0 ${classes.FormInput}`} placeholder="**********"  required="" />
                          </div>
                          <div className="mt-4 mb-2">
                            <MainButton text="Register" />
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

export default Register