import Card from 'react-bootstrap/Card';
import classes from './UserInitiativeProgressCard.module.css'
import './UserInitiativeProgressCard.css'
import { Col, Row } from 'react-bootstrap';
function UserInitiativeProgressCard(props) { 
  return (
    <Card className="text-center main-card" >
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png" className={classes.Image} />
      <Card.Body className='mb-4'>
        <Card.Title className="" >Ahmed Elsaid</Card.Title>
        <Card.Text>
          {props.rates}
        </Card.Text>
        <Card.Text>
          {props.specs}
        </Card.Text>

        <div className='d-flex justify-content-center align-items-center'>
          <div className={classes.Card}>
            <div className={classes.Percent}>
              <svg>
                <circle cx="35" cy="35" r="30"></circle>
                <circle cx="35" cy="35" r="30" style={{'--percent': '30'}}></circle>
              </svg>
              <div className={classes.Number}>
                <h3>30<span>%</span></h3>
              </div>
            </div>
          </div>
          
        </div>

        <div>
          {props.children}
        </div>
      </Card.Body>
    </Card>
  );
}

export default UserInitiativeProgressCard;
