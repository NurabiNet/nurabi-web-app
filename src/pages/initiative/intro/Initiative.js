import { Card, Col, Container, Row } from "react-bootstrap"
import { FaPlay } from "react-icons/fa"
import MainButton from "../../../UI/main-button/MainButton"
import classes from './Initiative.module.css'


const Initiative = () => {
    return (
        <Container className="main-margin-top">
            <Row>
                <Col md={6} className="d-flex align-items-center">
                    <div className={classes.TrackingDetails}>
                        <h1 className="main-title">Parents Marathon</h1>
                        <p className={classes.mainParagraph}>Check Our Top Rated Initiatives</p>
                        <p className="text-font-muted">Our System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives Our System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives</p>
                        <Row  className={classes.ActionButtons}>
                            <Col xs={3} className={classes.Price}>Free</Col>    
                            <Col xs={8}><MainButton text="Enroll Now" /></Col>
                        </Row>
                    </div>
                </Col>
                
                <Col md={6}>
                    <Card className={classes.TrackVideo} >
                        <div className={classes.TrackImgContainer}>  
                            <div className={classes.CardImgContainer}>
                            <div className="overlay">
                            <div className='icon-container'>
                                <FaPlay className='preview-icon' />
                            </div>  
                            </div>
                            <img className="card-img-top" alt="courseImg" src="/initiative/initiative.jpg" />
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}


export default Initiative