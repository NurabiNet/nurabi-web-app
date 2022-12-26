import Card from 'react-bootstrap/Card';
import consultantImg from './consultant.jpg'
import RateStars from '../rate-stars/RateStars';
import './ConsultantCard.css'
import Language from '../language/Language';
import { useHistory } from "react-router-dom";

function ConsultantCard(props) { 
  const history = useHistory();

  function handleClick() {
      history.push("/consultants/1");
  }
  return (
    <Card className="consultant-card text-center" onClick={handleClick} >
      <Card.Img variant="top" src={consultantImg} />
      <Card.Body className='mt-3 mb-4'>
        <Card.Title className="consultant-card-title" >Ahmed Taher</Card.Title>
        <Card.Text className='mb-2 consultant-rate'>
          <RateStars />
        </Card.Text>
        <Card.Text>
          {props.rates}
        </Card.Text>
        <Card.Text>
          <Language name="Arabic" />
          <Language name="English" />
        </Card.Text>
        <Card.Text>
          {props.specs}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ConsultantCard;
