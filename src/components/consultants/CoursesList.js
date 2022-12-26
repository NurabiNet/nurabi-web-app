import './CoursesList.css'
import { Fragment } from 'react';
import SelectDropDown from './SelectDropDown';
import { Col, Row } from 'react-bootstrap';
import ConsultantCard from '../../UI/consultant-card/ConsultantCard';

const CoursesList = () => {
    

    return (
            <Fragment>
                <div className="row courses-top-head mb-md-3 align-items-center">
                
                    <div className='col-6'>
                        <p>Consultants (200 consultants) </p>
                    </div>

                    <div className="col-6 ml-auto">
                        <div className='row'>
                            <div className='col-3 d-flex align-items-center sort-container'>
                                <span>Sort By</span>
                            </div>
                            <div className='col-4 p-0'>
                                <SelectDropDown />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="courses-list">
                <Row>
                    <Col lg="4">
                        <ConsultantCard />
                    </Col>
                    <Col lg="4">
                        <ConsultantCard />
                    </Col>
                    <Col lg="4">
                        <ConsultantCard />
                    </Col>
                    <Col lg="4">
                        <ConsultantCard />
                    </Col>
                    <Col lg="4">
                        <ConsultantCard />
                    </Col>
                    <Col lg="4">
                        <ConsultantCard />
                    </Col>
                    <Col lg="4">
                        <ConsultantCard />
                    </Col>
                    <Col lg="4">
                        <ConsultantCard />
                    </Col>
                </Row>
                </div>
            </Fragment>
        
    )
}

export default CoursesList
