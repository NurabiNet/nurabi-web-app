import './Header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fragment } from 'react';
import FilterOptions from './FilterOptions';
import BankQuestionsList from './BankQuestionsList';
const Header = () => {

    return (
            <Fragment>
            <div className='content-details'>
            <Container>
                <Row className="d-flex justify-content-between">
                    
                    <FilterOptions />

                    <Col xs={9} >
                        <BankQuestionsList />
                    </Col>

                </Row>
            </Container>   
            </div>
            
            </Fragment>


    )
}

export default Header
