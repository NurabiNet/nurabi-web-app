import { Col, Container, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import { FaArrowLeft } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import MainButton from "../../UI/main-button/MainButton"
import classes from './RequestConsultation.module.css'

const RequestConsultation = () => {

    return (
        <div>
        
            <Container className={classes.FormContainer}>
                <Row className="d-flex justify-content-between">
                    
                    <Col xs={6} >
                        <div className={classes.FormPadding}>
                          
                          <h3 className={`fontWeight-bold ${classes.HeaderTitle} `}>Consultation Request</h3>
                          <p className={`${classes.HeaderPargraph}`}>Join Our Consultation Team</p>

                          <div className="mt-3 mb-3">
                              <label className="mb-2">Trainer Type</label>  
                              <div className={classes.CheckBoxesContainer}>
                                <form action="#">
                                    <p className={`${classes.CheckBox} mb-1`}>
                                        <input type="radio" id="consultant" name="radio-group"  />
                                        <label htmlFor="consultant">Consultant</label>
                                    </p>
                                    <p className={`${classes.CheckBox} mb-1`}>
                                        <input type="radio" id="coach" name="radio-group" />
                                        <label htmlFor="coach">Coach</label>
                                    </p>
                                    <p className={`${classes.CheckBox} mb-1`}>
                                        <input type="radio" id="teacher" name="radio-group" />
                                        <label htmlFor="teacher">Teacher</label>
                                    </p>
                                </form>
                            </div>
                          </div>
                          
                          <div className="mt-3 mb-3">
                              <label>Job Title</label>  
                              <Form.Select className={`form-control m-0 ${classes.FormInput}`} aria-label="Job Title" >
                                <option>Please Select Title</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                          </div>

                          <div className="mt-3 mb-3">
                              <label>Fileds</label>  
                              <Form.Select className={`form-control m-0 ${classes.FormInput}`} aria-label="Fileds" >
                                <option>Please Select Field</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                          </div>

                          <div className="mt-3 mb-3">
                              <label>Select Learning Language</label>  
                              <Form.Select className={`form-control m-0 ${classes.FormInput}`} aria-label="Select Learning Language" >
                                <option>Select Learning Language</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                          </div>

                          <div className="mt-3 mb-3">
                              <label>About En</label>  
                              <Form.Control className={`form-control m-0 ${classes.TextArea}`} as="textarea" rows={3} />
                          </div>

                          <div className="mt-3 mb-3">
                              <label>About Ar</label>  
                              <Form.Control className={`form-control m-0 ${classes.TextArea}`} as="textarea" rows={3} />
                          </div>

                          <div className="mt-3 mb-3">
                              <label className="mb-2">Age Stages</label>  
                              <div className={classes.CheckBoxesContainer}>
                                <form action="#">
                                    <p className={`${classes.CheckBox} mb-1`}>
                                        <input type="radio" id="children" name="radio-group"  />
                                        <label htmlFor="children">Children</label>
                                    </p>
                                    <p className={`${classes.CheckBox} mb-1`}>
                                        <input type="radio" id="teenagers" name="radio-group" />
                                        <label htmlFor="teenagers">Teenagers</label>
                                    </p>
                                    <p className={`${classes.CheckBox} mb-1`}>
                                        <input type="radio" id="adults" name="radio-group" />
                                        <label htmlFor="adults">Adults</label>
                                    </p>
                                    <p className={`${classes.CheckBox} mb-1`}>
                                        <input type="radio" id="all-age-stages" name="radio-group" />
                                        <label htmlFor="all-age-stages">All Age Stages</label>
                                    </p>
                                </form>
                            </div>
                          </div>

                          
                          <div className="mt-4 mb-2">
                            <MainButton text="Login" />
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

export default RequestConsultation