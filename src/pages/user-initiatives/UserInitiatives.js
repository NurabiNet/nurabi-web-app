import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaClock, FaDollarSign } from 'react-icons/fa';
import CourseItem from '../../components/courses/CourseItem';
import ConsultantSessionCard from '../../UI/consultant-session-card/ConsultantSessionCard';
import MainButton from '../../UI/main-button/MainButton';
import UserInitiativeCard from '../../UI/user-initiative-card/UserInitiativeCard';
import UserTrackingSystemCard from '../../UI/user-tracking-system-card/UserTrackingSystemCard';
import './UserInitiatives.css'


function UserInitiatives() {
  return (
  
        <Container>
            <h1 className="page-title">My Initiatives</h1>
            
            {/* User Courses Tabs */} 
            <Tabs
            defaultActiveKey="userTackingSystems"
            id="uncontrolled-tab-example"
            className="user-courses-tabs mb-5"
            >
            <Tab eventKey="userTackingSystems" title="My Initiatives">
                <Row>
                    <Col lg={12} >
                        <UserInitiativeCard />
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="nurabiTrackingSystems" title="Discover Systems">
                <Row>
                    
                    
                    
                </Row>
            </Tab>
            
            
            </Tabs>
        </Container>
    
  );
}

export default UserInitiatives;