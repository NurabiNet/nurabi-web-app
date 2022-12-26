
import { Col, ProgressBar, Row } from 'react-bootstrap'
import classes from './CardProgress.module.css'





const CardProgress = (props) => {

    let progressStatus = ''
    
    if( props.progress >= 70 ){
        progressStatus  = 'Success'
    }else if( props.progress >= 50 && props.progress < 70 ) {
        progressStatus  = 'Improve'
    }else{
        progressStatus  = 'Failed'
    }

    return (
        <Row className={`${classes.CardProgress} align-items-center`}>
            <Col xs={9}>
                <ProgressBar
                now={props.progress}
                variant={ `Progress-${progressStatus} ` }
                />
            </Col>

            <Col xs={3}>
            <span>{props.progress}%</span>
            </Col>

        </Row>
    )
}

export default CardProgress