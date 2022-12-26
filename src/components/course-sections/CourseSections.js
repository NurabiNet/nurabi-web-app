import { Container, Row } from "react-bootstrap"
import CourseContent from '../course-content/CourseContent';
import RateAndPrice from "../courses/RateAndPrice/RateAndPrice"
import './CourseSections.css'





const CourseSections = () => {

    

    return (
        <div>
            <Container>
                <Row className="d-flex justify-content-between">
                    
                    
                        <h3 className='course-title'>How to make your son Hight levels</h3>
                        <p className='course-description'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        </p>
                        <h4 className='course-provider'>By Nurabi</h4>

                        <RateAndPrice />


                        <CourseContent />


                    

                    

                </Row>
            </Container>   
        </div>
    )
}

export default CourseSections