import { Col, Container, Row } from "react-bootstrap"
import './CourseDetails.css'
import CourseSections from '../../components/course-sections/CourseSections'
import CourseFeedback from "../../components/course-feedback/CourseFeedback"
import Comments from "./components/comments/Comments"
import CourseCard from "./components/course-card/CourseCard"





const CourseDetails = () => {

    return (
        <div>
            <div className='header d-flex'>
            <Container className="d-flex align-items-center">
                <Row className="d-flex align-items-center">
                    <Col xs={6} className="d-flex w-100" >
                        <div className="breadcrumb d-flex justify-content-center"  >
                            <h3 className="breadcrumb-header">Courses</h3>
                            <div className="breadcrumb-details">
                                <span>Home</span> <span> - </span>
                                <span>Courses</span> <span> - </span> 
                                <span className="active-page">How to make your son Hight levels</span>
                            </div>
                            
                        </div>
                    </Col>

                </Row>
            </Container>
            </div>

           
            <Container>
                <Row className="d-flex justify-content-between">
                    
                    <Col xs={8} >
                        

                        <CourseSections />

                        
                        <CourseFeedback />

                        <Comments />

                        


                    </Col>

                    <Col xs={4} >
                        <CourseCard />
                    </Col>

                </Row>
            </Container>   
        

            

        </div>
    )
}

export default CourseDetails