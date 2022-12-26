import { Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CourseCard from '../UI/CourseCard';
import './UserCourses.css'


function UncontrolledExample() {
  return (
  
        <Container>
            <h1 className="page-title">My Courses List</h1>
            
            {/* User Courses Tabs */} 
            <Tabs
            defaultActiveKey="new"
            id="uncontrolled-tab-example"
            className="user-courses-tabs mb-5"
            >
            <Tab eventKey="new" title="New">
                <Row>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="in-progress" title="In Progress">
                <Row>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="completed" title="Completed">
                <Row>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                    <Col lg="3">
                        <CourseCard />
                    </Col>
                </Row>
            </Tab>
            
            </Tabs>
        </Container>
    
  );
}

export default UncontrolledExample;