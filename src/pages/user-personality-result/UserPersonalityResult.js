import { Col, Container, Row } from "react-bootstrap"
import MainButton from "../../UI/main-button/MainButton"
import PersonalityAnalysisCard from "../../UI/personality-analysis-card/PersonalityAnalysisCard"
import classes from './UserPersonalityResult.module.css'
const UserPersonalityResult = () => {
    return (
        <Container>

            {/* personality analysis list     */}
            <section className="section"> 
                <Row>
                    <Col md={3} className="m-auto" >
                        <PersonalityAnalysisCard />
                    </Col>
                </Row>
                <div>
                    <h1 className="main-black-title text-center">Congratulations</h1>
                    <p className="text-center">You Pass Personality Test for creativity in work</p>
                    <Row>
                        <Col md={2} className="m-auto" >
                            <MainButton text="Ask Question" />
                        </Col>
                    </Row>

                    <Row className={classes.PersonalityResults}>
                        <Col md={6}>
                            <h3 className={classes.ResultTitle}>Point of strength</h3>
                            <div className="d-flex align-items-center">
                                <img src="/personality/strength.png" alt="strength" />
                                <span>You Should Study More About Education of childernes</span>    
                            </div>
                            <div className="d-flex align-items-center">
                                <img src="/personality/strength.png" alt="strength" />
                                <span>You Should Study More About Education of childernes</span>    
                            </div>
                        </Col>

                        <Col md={6}>
                            <h3 className={classes.ResultTitle}>Point of Weakness</h3>
                            <div className="d-flex align-items-center">
                                <img src="/personality/weekness.png" alt="weekness" />
                                <span>You Should Study More About Education of childernes</span>    
                            </div>
                            <div className="d-flex align-items-center">
                                <img src="/personality/weekness.png" alt="weekness" />
                                <span>You Should Study More About Education of childernes</span>    
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>

        </Container>
    )
}

export default UserPersonalityResult