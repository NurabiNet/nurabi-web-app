import { Card, Col, Container, Row } from "react-bootstrap"
import { FaPlay } from "react-icons/fa"
import MainButton from "../../../UI/main-button/MainButton"
import SecondryButton from "../../../UI/secondry-button/SecondryButton"
import classes from './UserTrackingSystem.module.css'


const UserTrackingSystem = () => {
    return (
        <Container className="main-margin-top">
            <Row>
                <Col md={6} className="d-flex align-items-center">
                    <div className={classes.TrackingDetails}>
                        <h1 className="main-title">My Tracking System</h1>
                        <p className={classes.mainParagraph}>Check Our Top Rated Courses for the best teachers</p>
                        <p className="text-font-muted">Our System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives Our System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives</p>
                        <div  className={classes.ActionButtons}>
                        <div><MainButton text="Start Your Own System" /></div>
                        <div className={classes.SecondBottom}><SecondryButton text="Start With Nurabi Tracking" /></div>
                        </div>
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
                            <img className="card-img-top" alt="courseImg" src="https://img.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg?size=626&ext=jpg&ga=GA1.2.600747895.1651070596&semt=sph" />
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}


export default UserTrackingSystem