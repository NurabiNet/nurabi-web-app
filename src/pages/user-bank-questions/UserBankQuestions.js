import { Container, Row , Col } from "react-bootstrap"
import BankQuestionsList from "../../components/bankQuestions/BankQuestionsList"
import Header from "../../components/bankQuestions/Header"
import MainButton from "../../UI/main-button/MainButton"
import classes from './UserBankQuestions.module.css'
import { useHistory } from "react-router-dom";
const UserBankQuestions = () => {

    const history = useHistory();

    function handleClick() {
        history.push("/bank-question/form");
    }

    return (
        <div>
            <Container>
                
                <Row className="d-flex justify-content-between align-items-center">
                    <Col md={6}>
                        <h1 class="page-title pb-0">My Questions</h1>
                        <p style={ { 'fontSize': '21px' } } >Check all questions that help you</p>
                    </Col>
                    <Col md={3}>
                        <button type="button" class="card-button btn btn-primary" style={ { 'padding': '15px 20px' } } onClick={handleClick} >Ask New Question</button>
                    </Col>
                </Row>

                
                        <BankQuestionsList />
                    
                
            </Container>
           
        </div>
    )
}

export default UserBankQuestions