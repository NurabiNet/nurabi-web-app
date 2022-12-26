import { Col, Container, Row } from "react-bootstrap"
import './Consultant.css'
import ActionButton from "../../UI/action-button/ActionButton"
import { FaHeart, FaPlay, FaRegHeart, FaShare, FaShareAlt, FaSlideshare ,FaClock, FaCommentDollar, FaDollarSign } from "react-icons/fa"
import CourseFeedback from "../../components/course-feedback/CourseFeedback"
import Comments from "../course-details/components/comments/Comments"
import Language from "../../UI/language/Language"
import ConsultantCard from "../../UI/consultant-card/ConsultantCard"
import { Fragment } from "react"
import MainButton from "../../UI/main-button/MainButton"
import certificateImg from './certificate.png'

const Consultant = () => {

    return (
        <div className="mt-md-5">
        
            <Container>
                <Row className="d-flex justify-content-between">

                    <Col xs={3}  >
                        <ConsultantCard
                            rates={<p className="text-muted">(4.5)200 rate this</p>}
                            specs={
                                <Fragment>
                                <div className="d-flex align-items-center mt-4"
                                style={{
                                    justifyContent: 'space-evenly',
                                    borderBottom : '1px solid #eee',
                                    paddingBottom: '20px'
                                }}
                                >
                                    <div>
                                        <FaClock color="#fb5465" style={{fontSize: '1.5rem'}} /> 30 Min
                                    </div>

                                    <div>
                                        <FaDollarSign color="#65c890" style={{fontSize: '1.5rem'}} /> 20 $
                                    </div>
                                    
                                </div>
                                <div className="mt-3">
                                    <p 
                                        style={{
                                            color: '#fb5465',
                                            fontWeight: '600'
                                        }}
                                    >
                                        Ahmed Completed 30 Successful Session
                                    </p>
                                    <MainButton text="Request Consultation" />
                                </div>
                                </Fragment>
                                
                            }
                        />

                    </Col>
                    
                    <Col xs={9} >
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                            <div className="lessonTitle">
                                <h4>About Consultant</h4>
                            </div>

                            <div className="user-actions d-flex">
                                
                                <ActionButton><FaRegHeart /></ActionButton>
                                <ActionButton><FaShareAlt />   </ActionButton>
                            </div>

                        </div>

                        <p className="mt-3 text-muted">
                            We Can Help You To Know More About Your Personality and of your sons to develop their skills . We Can Help You To Know More About Your Personality and of your sons to develop their skills . 
                        </p>

                        <div className="languages">
                            <h4 className="mb-4">Languages</h4>
                            <div>
                                <Language name="Arabic" />
                                <Language name="English" />
                            </div>
                        </div>
                        
                        
                        <CourseFeedback />

                        <Comments />

                        <div className="certificaties">
                            <div className="lessonTitle">
                                <h4>Certificaties</h4>
                                <div className="row">
                                    <div className="col-md-4 d-flex align-items-center">
                                        <div className="certificate-img"
                                        style={{
                                            paddingRight: '10px',
                                            
                                        }}
                                        >
                                            <img src={certificateImg} alt="certificate" />
                                        </div>
                                        <p className="certificate-name text-muted"
                                        style={{
                                            fontWeight: '600',
                                            
                                        }}
                                        >
                                            Complete Guide For My Son
                                        </p>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-center">
                                        <div className="certificate-img"
                                        style={{
                                            paddingRight: '10px',
                                            
                                        }}
                                        >
                                            <img src={certificateImg} alt="certificate" />
                                        </div>
                                        <p className="certificate-name text-muted"
                                        style={{
                                            fontWeight: '600',
                                            
                                        }}
                                        >
                                            Complete Guide For My Son
                                        </p>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-center">
                                        <div className="certificate-img"
                                        style={{
                                            paddingRight: '10px',
                                            
                                        }}
                                        >
                                            <img src={certificateImg} alt="certificate" />
                                        </div>
                                        <p className="certificate-name text-muted"
                                        style={{
                                            fontWeight: '600',
                                            
                                        }}
                                        >
                                            Complete Guide For My Son
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </Col>

                    

                </Row>
            </Container>   
        

            

        </div>
    )
}

export default Consultant