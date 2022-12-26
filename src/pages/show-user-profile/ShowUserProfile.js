import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import { FaArrowLeft } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import MainButton from "../../UI/main-button/MainButton"
import classes from './ShowUserProfile.module.css'

const ShowUserProfile = () => {

    const [ disableInputs , setdisableInputs ] = useState(true)

    const toggleDisableInputsHandler = (disableInputStatus) => {
        setdisableInputs(disableInputStatus)
    }

    return (
        <div>
        
            <Container className={classes.FormContainer}>
                <Row className="d-flex justify-content-between">
                    
                    <Col xs={6} >
                        <div className={classes.FormPadding}>
                          
                          <h3 className={`fontWeight-bold ${classes.HeaderTitle} text-center`}>Profile Page</h3>

                          <div className="mt-5 mb-5 text-center">
                            <img src="/programmer.png" alt="profile" />
                          </div>

                          <div className="mt-3 mb-3">
                              <label>Name</label>  
                              <input type="text" disabled={disableInputs} className={`form-control m-0 ${classes.FormInput}`} placeholder="Ahmed Taha"  required="" />
                          </div>

                          <div className="mt-3 mb-3">
                              <label>Email Address</label>  
                              <input type="email" disabled={disableInputs} className={`form-control m-0 ${classes.FormInput}`} placeholder="Example@mail.com"  required="" />
                          </div>

                          <div className="mt-3 mb-3">
                              <label>Date Of Birth</label>  
                              <input type="text" disabled={disableInputs} className={`form-control m-0 ${classes.FormInput}`} placeholder="DD-mm-yyyy"  required="" />
                          </div> 

                          <div className="mt-3 mb-3">
                              <label className="mb-2">Gender</label>  
                              <div className={classes.CheckBoxesContainer}>
                                <form action="#">
                                    <p className={`${classes.CheckBox} mb-1`}>
                                        <input type="radio" id="male" name="radio-group" defaultChecked disabled={disableInputs} />
                                        <label htmlFor="male">Male</label>
                                    </p>
                                    <p className={`${classes.CheckBox} mb-1`}>
                                        <input type="radio" id="female" name="radio-group" disabled={disableInputs} />
                                        <label htmlFor="female">Female</label>
                                    </p>
                                </form>
                            </div>
                          </div>

                          <div className="mt-3 mb-3">
                              <label>Referral Code</label>  
                              <input type="text"className={`form-control m-0 ${classes.FormInput}`} value="aa11ee" disabled={disableInputs} required="" />
                          </div>
                          
                          <div className="mt-4 mb-2" onClick={() => toggleDisableInputsHandler(false)}>
                            <MainButton text="Edit Profile" />
                          </div>

                          <div className="mt-4 mb-2">
                            <MainButton text="Delete Account" />
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

export default ShowUserProfile