import { Col, Container, Row } from "react-bootstrap"
import TrackingSystemCard from "../../../UI/tracking-system-card/TrackingSystemCard"
const TrackingSystems = () => {
    return (
        <Container>

            {/*  Tracking System    */}
            <section className="section"> 
                <div className="">
                    <h1 className="main-black-title">My Tracking System</h1>
                    <p className="mb-md-5">Check Our Top Rated Courses for the best teachers</p>
                </div>
                <Row>
                    <Col md={3}>
                        <TrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <TrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <TrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <TrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <TrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <TrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <TrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <TrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <TrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <TrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <TrackingSystemCard />
                    </Col>
                    <Col md={3}>
                        <TrackingSystemCard />
                    </Col>
                    
                </Row>
            </section>

           

        </Container>
    )
}

export default TrackingSystems