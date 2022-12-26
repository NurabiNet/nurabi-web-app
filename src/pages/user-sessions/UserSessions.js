import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaClock, FaDollarSign } from 'react-icons/fa';
import ConsultantSessionCard from '../../UI/consultant-session-card/ConsultantSessionCard';
import MainButton from '../../UI/main-button/MainButton';
import './UserSessions.css'


function UserSessions() {
  return (
  
        <Container>
            <h1 className="page-title">My Sessions</h1>
            
            {/* User Courses Tabs */} 
            <Tabs
            defaultActiveKey="upcomming"
            id="uncontrolled-tab-example"
            className="user-courses-tabs mb-5"
            >
            <Tab eventKey="upcomming" title="Upcomming Sessions">
                <Row>
                    <Col lg={3} >
                        <ConsultantSessionCard type="consultant" />
                    </Col>
                    <Col lg={3} >
                        <ConsultantSessionCard type="consultant" />
                    </Col>
                    <Col lg={3} >
                        <ConsultantSessionCard type="consultant" />
                    </Col>
                    <Col lg={3} >
                        <ConsultantSessionCard type="consultant" />
                    </Col>
                    <Col lg={3} >
                        <ConsultantSessionCard type="consultant" />
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="previous" title="Previous Sessions">
                <Row>
                    <Col lg={3} >
                        <ConsultantSessionCard type="consultant" />
                    </Col>
                    <Col lg={3} >
                        <ConsultantSessionCard type="consultant" />
                    </Col>
                    <Col lg={3} >
                        <ConsultantSessionCard type="consultant" />
                    </Col>
                    <Col lg={3} >
                        <ConsultantSessionCard type="consultant" />
                    </Col>
                    <Col lg={3} >
                        <ConsultantSessionCard type="consultant" />
                    </Col>
                    <Col lg={3} >
                        <ConsultantSessionCard type="consultant" />
                    </Col>
                </Row>
            </Tab>
            
            
            </Tabs>
        </Container>
    
  );
}

export default UserSessions;