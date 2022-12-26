
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import RateStars from '../../UI/rate-stars/RateStars'
import './CourseFeedback.css'





const CourseFeedback = () => {

    return (
        <div className='mt-4'>
            
                <h3 className="section-title mb-3">Feedback</h3>
                
                <p className='courseRate'><span style={{color:"#fb5456"}} >4.5</span> Course rate</p>
                <Row className='d-flex all-rates justify-content-between'>
                    <Col lg="8">
                        <div className="progress-bar">
                        <ProgressBar now={40}  />
                        </div>
                    </Col>

                    <Col lg="4">
                        <div className='d-flex'>
                            <div className='stars'>
                                <RateStars />
                            </div> 

                            <div className='starts-percentage'>
                                45%
                            </div> 
                        </div>
                    </Col>
                    

                    
                </Row>
                <Row className='d-flex all-rates justify-content-between'>
                    <Col lg="8">
                        <div className="progress-bar">
                        <ProgressBar now={50}  />
                        </div>
                    </Col>

                    <Col lg="4">
                        <div className='d-flex'>
                            <div className='stars'>
                                <RateStars />
                            </div> 

                            <div className='starts-percentage'>
                                45%
                            </div> 
                        </div>
                    </Col>
                    

                    
                </Row>
                <Row className='d-flex all-rates justify-content-between'>
                    <Col lg="8">
                        <div className="progress-bar">
                        <ProgressBar now={60}  />
                        </div>
                    </Col>

                    <Col lg="4">
                        <div className='d-flex'>
                            <div className='stars'>
                                <RateStars />
                            </div> 

                            <div className='starts-percentage'>
                                45%
                            </div> 
                        </div>
                    </Col>
                    

                    
                </Row>
                <Row className='d-flex all-rates justify-content-between'>
                    <Col lg="8">
                        <div className="progress-bar">
                        <ProgressBar now={70}  />
                        </div>
                    </Col>

                    <Col lg="4">
                        <div className='d-flex'>
                            <div className='stars'>
                                <RateStars />
                            </div> 

                            <div className='starts-percentage'>
                                45%
                            </div> 
                        </div>
                    </Col>
                    

                    
                </Row>
                <Row className='d-flex all-rates justify-content-between'>
                    <Col lg="8">
                        <div className="progress-bar">
                        <ProgressBar now={90}  />
                        </div>
                    </Col>

                    <Col lg="4">
                        <div className='d-flex'>
                            <div className='stars'>
                                <RateStars />
                            </div> 

                            <div className='starts-percentage'>
                                45%
                            </div> 
                        </div>
                    </Col>
                    

                    
                </Row>
           
        </div>
    )
}

export default CourseFeedback