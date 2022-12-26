import { Col, Container, Row } from "react-bootstrap"
import MainButton from "../../UI/main-button/MainButton"
import classes from './PersonalityTest.module.css'
import { useHistory } from "react-router-dom";
const PersonalityTest = () => {

    const history = useHistory();

    function handleClick() {
        history.push("/persinality/test/question");
    }

    return (
        <Container>

            {/* personality analysis list     */}
            <section className={`section text-center ${classes.personalityTest}`}> 
                <div>
                    <h1 className="main-black-title">Welcome to Creativity Test</h1>
                    <p className={`${classes.PersonalityTestDesc} text-muted mb-3`}>This test contain 15 question to get all data about your mind and creativity to help us to build your personality analysis</p>
                    <p className={classes.QuestionNumber}>Test 1 | 15 Questions</p>
                    <Row>
                        <Col md={2} className="m-auto" onClick={handleClick}>
                            <MainButton text="Start Test" />
                        </Col>
                    </Row>
                </div>
            </section>

        </Container>
    )
}

export default PersonalityTest