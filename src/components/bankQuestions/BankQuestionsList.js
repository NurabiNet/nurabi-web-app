import './BankQuestionsList.css'
import { Fragment } from 'react';

import { Col, Row } from 'react-bootstrap';
import BankQuestionsContent from '../bank-questions-content/BankQuestionsContent';
const BankQuestionsList = () => {
    return (
            <Fragment>
                <div className="row courses-top-head mb-md-3 align-items-center">
                
                    
                </div>

                <div className="courses-list">
                <Row>
                    <BankQuestionsContent />
                    
                    
                    
                </Row>
                </div>
            </Fragment>
        
    )
}

export default BankQuestionsList
