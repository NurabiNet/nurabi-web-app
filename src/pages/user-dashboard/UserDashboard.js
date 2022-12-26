import { Col, Container, Row } from "react-bootstrap"
import ConsultantCard from "../../UI/consultant-card/ConsultantCard"
import CourseCard from "../../UI/CourseCard"
import PersonalityAnalysisCard from "../../UI/personality-analysis-card/PersonalityAnalysisCard"
import TrackingSystemCard from "../../UI/tracking-system-card/TrackingSystemCard"
import UserTrackingSystemCard from "../../UI/user-tracking-system-card/UserTrackingSystemCard"
const UserDashboard = () => {
    return (
        <Container>

            {/* course list     */}
            <section className="section" >
                <div className="text-center">
                    <h1 className="main-black-title">My Courses</h1>
                    <p className="mb-md-5">Check Our Top Rated Courses for the best teachers</p>
                </div>
                <Row>
                    <Col md={3}>
                        <CourseCard />
                    </Col>
                    <Col md={3}>
                        <CourseCard />
                    </Col>
                    <Col md={3}>
                        <CourseCard />
                    </Col>
                    <Col md={3}>
                        <CourseCard />
                    </Col>
                </Row>
            </section>

            {/*  Tracking System    */}
            <section className="section"> 
                <div className="text-center">
                    <h1 className="main-black-title">My Tracking System</h1>
                    <p className="mb-md-5">Check Our Top Rated Courses for the best teachers</p>
                </div>
                <Row>
                    <Col md={3}>
                        <UserTrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <UserTrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <UserTrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <UserTrackingSystemCard />
                    </Col>
                    
                </Row>
            </section>

            {/* personality analysis list     */}
            <section className="section"> 
                <div className="text-center">
                    <h1 className="main-black-title">My Latest Personality Analysis</h1>
                    <p className="mb-md-5">Check Our Top Rated Courses for the best teachers</p>
                </div>
                <Row>

                    <Col md={3}>
                        <PersonalityAnalysisCard />
                    </Col>

                    <Col md={3}>
                        <PersonalityAnalysisCard />
                    </Col>

                    <Col md={3}>
                        <PersonalityAnalysisCard />
                    </Col>

                    <Col md={3}>
                        <PersonalityAnalysisCard />
                    </Col>
                    
                        
                        
                    
                </Row>
            </section>

            {/* consultants list     */}
            <section className="section"> 
                <div className="text-center">
                    <h1 className="main-black-title">Our Top Rated Teachers</h1>
                    <p className="mb-md-5">Check Our Top Rated Courses for the best teachers</p>
                </div>
                <Row>
                    <Col md={3}>
                        <ConsultantCard />
                    </Col>
                    <Col md={3}>
                        <ConsultantCard />
                    </Col>
                    <Col md={3}>
                        <ConsultantCard />
                    </Col>
                    <Col md={3}>
                        <ConsultantCard />
                    </Col>
                </Row>
            </section>


        </Container>
    )
}

export default UserDashboard