import { Col, Container, Row } from "react-bootstrap"
import './Lesson.css'
import CourseContent from "../../components/course-content/CourseContent"
import LessonVideo from "./components/lesson-video/LessonVideo"
import LessonTabs from "./components/lesson-tabs/LessonTabs"
import SourceViews from "../../UI/source-views/SourceViews"
import MainButton from "../../UI/main-button/MainButton"
import ActionButton from "../../UI/action-button/ActionButton"
import { FaHeart, FaPlay, FaRegHeart, FaShare, FaShareAlt, FaSlideshare } from "react-icons/fa"


const Lesson = () => {

    return (
        <div>
        
            <Container className="lessonContainer">
                <Row className="d-flex justify-content-between">
                    
                    <Col xs={8} >
                        <div className="lesson-top-header d-flex justify-content-between align-items-center">
                            <div className="lessonTitle">
                                <h4>How to make your son height levels</h4>
                            </div>

                            <div className="user-actions d-flex">
                                <div className="leave-feedback d-flex">
                                    <MainButton text="Leave Feedback" />
                                </div>
                                <ActionButton><FaRegHeart /></ActionButton>
                                <ActionButton><FaShareAlt />   </ActionButton>
                            </div>

                        </div>
                        <LessonVideo />
                        <div className="d-flex">
                        <LessonTabs />

                        </div>
                        
                    </Col>

                    <Col xs={4}  >
                        <CourseContent />
                    </Col>

                </Row>
            </Container>   
        

            

        </div>
    )
}

export default Lesson