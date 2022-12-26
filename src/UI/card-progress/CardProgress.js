
import { Col, ProgressBar, Row } from 'react-bootstrap'
import classes from './CardProgress.module.css'





const CardProgress = (props) => {

    let progressStatus = ''
    let progressStatusText = ''
    let statusBackground = ''
    let statusColor = ''
    
    if( props.progress >= 70 ){
        progressStatus  = 'Success'
        progressStatusText = 'Pass'
        statusBackground = 'rgba(57, 185, 112, .1)'
        statusColor = '#07b2bd'
    }else if( props.progress >= 50 && props.progress < 70 ) {
        progressStatus  = 'Improve'
        progressStatusText = 'Need To Improve'
        statusBackground = 'rgba(255, 180, 72, .1)'
        statusColor = '#07b2bd'
    }else{
        progressStatus  = 'Failed'
        progressStatusText = 'Failed'
        statusBackground = 'rgba(251, 84, 86, .1)'
        statusColor = '#07b2bd'
        
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