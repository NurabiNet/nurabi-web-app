import { Col, Container, Row } from "react-bootstrap"
import MainButton from "../../UI/main-button/MainButton"
import classes from './BankQuestionForm.module.css'
const BankQuestionForm = () => {
    return (
        <Container>

            {/* personality analysis list     */}
            <section className={`section text-center ${classes.BankQuestionForm}`}> 
                <div>
                    <img
                        src="/bank-question.png"
                        alt="bank-question"
                        style={ { 'maxWidth' : '140px' } }
                        className='mb-3'
                        />
                    <h1 className="main-black-title">Ask Question</h1>
                    <p className={`${classes.BankQuestionFormDesc} text-muted mb-3`}>We Will reply your answer within 24 h</p>
                    <p>Question</p>
                    
                    <Row>
                        <Col md={4} className="m-auto" >
                            <textarea
                                placeholder="How To Work On Platform"
                                className={`${classes.QuestionTextarea} w-100 mb-3 text-center`}
                                rows="5"
                                ></textarea>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="m-auto" >
                            <MainButton text="Ask Now" />
                        </Col>
                    </Row>
                </div>
            </section>

        </Container>
    )
}

export default BankQuestionForm