import { Container, Row , Col } from "react-bootstrap"
import Header from "../../components/bankQuestions/Header"
import classes from './BankQuestions.module.css'
const BankQuestions = () => {

    return (
        <div>
            <Container className="text-center">
                
                <Row>
                    <Col md={7} className="m-auto">
                        <Row className="mb-4">
                            <Col xs={12}>
                                <h1 class="page-title pb-0">Bank Questions</h1>
                                <p style={ { 'fontSize': '21px' } } >Check all questions that help you</p>
                            </Col>
                            <Col xs={9}>
                                <input type="text" placeholder="Search Key Word" class={` ${classes.bankQuestionSearch} form-control m-0 `} ></input>
                            </Col>

                            <Col xs={3}>
                                <button type="button" class="card-button btn btn-primary" style={ { 'padding': '15px 20px' } } >My Questions</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
            <Header />
        </div>
    )
}

export default BankQuestions