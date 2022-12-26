import { Col, Container, Row } from "react-bootstrap"
import classes from './TermsAndConditions.module.css'


const TermsAndConditions = () => {
    return (
        <Container className="main-margin-top">
            <Row>
                <Col md={12} className="d-flex align-items-center">
                    <div className={classes.TermsDetails}>
                        <h1 className="main-title text-center mb-5">Terms And Conditions</h1>
                        <p className={classes.mainParagraph}>User Terms</p>
                        <p className="text-font-muted">Our System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives Our System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives ur System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives Our System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives ur System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives Our System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives</p>

                        <p className={`${classes.mainParagraph} mt-5`}>Course Terms</p>
                        <p className="text-font-muted">Our System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives Our System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives ur System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives Our System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives ur System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives Our System Will Help You to set your objective and your children plans in certain time we will help you to Complete Your target objectives</p>
                        
                    </div>
                </Col>
                
            </Row>
        </Container>
    )
}


export default TermsAndConditions