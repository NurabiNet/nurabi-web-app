import './Header.css'
import logo from './header.png'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fragment } from 'react';
import FilterOptions from './FilterOptions';
import CoursesList from './CoursesList';
const Header = () => {

    return (
            <Fragment>
            
            <div className='header'>
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col xs={6} className="d-flex" >
                        <div className="breadcrumb d-flex justify-content-center"  >
                            <h3 className="breadcrumb-header">Courses</h3>
                            <div className="breadcrumb-details">
                                <span>Home</span> <span> - </span> <span className="active-page">Courses</span>
                            </div>
                            
                        </div>
                    </Col>

                    <Col xs={6} >
                    <img src={logo} alt="courses" />
                    </Col>

                </Row>
            </Container>
            </div>

            <div className='content-details'>
            <Container>
                <Row className="d-flex justify-content-between">
                    
                    <FilterOptions />

                    <Col xs={9} >
                        <CoursesList />
                    </Col>

                </Row>
            </Container>   
            </div>
            
            </Fragment>


    )
}

export default Header
