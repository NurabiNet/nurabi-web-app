import {  Row, Tab, Tabs } from "react-bootstrap"
import CourseFeedback from "../../../../components/course-feedback/CourseFeedback"
import SourceViews from "../../../../UI/source-views/SourceViews"
import Comments from "../../../course-details/components/comments/Comments"
import './LessonTabs.css'
const LessonTabs = () => {
    return (
        <div className="lessonTabsContainer">
        <div className="lesson-views-container">
            <SourceViews />
        </div>    
        <Tabs
            defaultActiveKey="about"
            id="uncontrolled-tab-example"
            className="lesson-tabs mb-4"
            >
            <Tab eventKey="about" title="About Course">
                <Row>
                    <p className="aboutCourse">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    
                    <CourseFeedback />
                    
                    <Comments />
                    
                    
                </Row>
            </Tab>
            <Tab eventKey="resources" title="Resources">
                <h1>Resources</h1>
            </Tab>
            <Tab eventKey="anouncements" title="Anouncements">
                <h1>Anouncements</h1>
            </Tab>
            
        </Tabs>
        </div>
    )
}

export default LessonTabs