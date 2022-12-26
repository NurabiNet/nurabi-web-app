import { Col, ProgressBar, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import StatusButton from '../status-button/StatusButton';
import classes from  './PersonalityCard.module.css'
function PersonalityCard(props) {
  let progressStatus = ''
  let progressStatusText = ''
  let statusBackground = ''
  let statusColor = ''
  
  if( props.progress >= 70 ){
    progressStatus  = 'Success'
    progressStatusText = 'Pass'
    statusBackground = 'rgba(57, 185, 112, .1)'
    statusColor = '#39b970'
  }else if( props.progress >= 50 && props.progress < 70 ) {
    progressStatus  = 'Improve'
    progressStatusText = 'Need To Improve'
    statusBackground = 'rgba(255, 180, 72, .1)'
    statusColor = '#ffb448'
  }else{
    progressStatus  = 'Failed'
    progressStatusText = 'Failed'
    statusBackground = 'rgba(251, 84, 86, .1)'
    statusColor = '#fb5456'
    
  }
  return (
    <Card className={`${classes.Card}`}>
      <Card.Body className='mt-3 mb-4'>
        <Row>
          <Col xs={2}>
            <div className={ `text-center ${classes.Icon} ` }>
              <img src="/smile.png" alt="smile" />
            </div>
          </Col>

          <Col xs={9}>
            <Row>
              <Col xs={12}>
                <h6 className={classes.TestName}>Creatiivty Test</h6>
                <Row className="align-items-center">
                  <Col xs={10}>
                    <ProgressBar
                    now={props.progress}
                    variant={ `Progress-${progressStatus} ` }
                    />
                  </Col>
                  <Col xs={2}>
                    <span>{props.progress}%</span>
                  </Col>
                </Row>
                
              </Col>
              
            </Row>
            <Row>
              <Col className='text-center mt-4'>
                <StatusButton status={progressStatusText} background={statusBackground} color={statusColor} />
              </Col>
            </Row>
          </Col>
          
          
          
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PersonalityCard;
