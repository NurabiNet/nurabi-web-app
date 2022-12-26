import { Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserTrackingSystemCard from '../../UI/user-tracking-system-card/UserTrackingSystemCard';
import './UserTrackingSystems.css'


function UserTrackingSystems() {
  return (
  
        <Container>
            <h1 className="page-title">My Tracking Systems</h1>
            
            {/* User Courses Tabs */} 
            <Tabs
            defaultActiveKey="userTackingSystems"
            id="uncontrolled-tab-example"
            className="user-courses-tabs mb-5"
            >
            <Tab eventKey="userTackingSystems" title="My Tacking Systems">
                <Row>
                    <Col lg={3} >
                        <UserTrackingSystemCard />
                    </Col>
                    <Col lg={3} >
                        <UserTrackingSystemCard />
                    </Col>
                    <Col lg={3} >
                        <UserTrackingSystemCard />
                    </Col>
                    <Col lg={3} >
                        <UserTrackingSystemCard />
                    </Col>
                    <Col lg={3} >
                        <UserTrackingSystemCard />
                    </Col>
                    
                </Row>
            </Tab>
            <Tab eventKey="nurabiTrackingSystems" title="Discover Systems">
                <Row>
                    
                    <Col lg={3} >
                        <UserTrackingSystemCard enrolled={true} />
                    </Col>
                    <Col lg={3} >
                        <UserTrackingSystemCard enrolled={true} />
                    </Col>
                    <Col lg={3} >
                        <UserTrackingSystemCard enrolled={true} />
                    </Col>
                    <Col lg={3} >
                        <UserTrackingSystemCard enrolled={true} />
                    </Col>
                    <Col lg={3} >
                        <UserTrackingSystemCard enrolled={true} />
                    </Col>
                    <Col lg={3} >
                        <UserTrackingSystemCard enrolled={true} />
                    </Col>
                    <Col lg={3} >
                        <UserTrackingSystemCard enrolled={true} />
                    </Col>
                    <Col lg={3} >
                        <UserTrackingSystemCard enrolled={true} />
                    </Col>
                    
                </Row>
            </Tab>
            
            
            </Tabs>
        </Container>
    
  );
}

export default UserTrackingSystems;