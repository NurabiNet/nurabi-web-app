import Card from 'react-bootstrap/Card';
import './UserTrackingSystemCard.css'
import { useHistory } from "react-router-dom";
import CardProgress from '../card-progress/CardProgress';
import { Badge } from 'react-bootstrap';

function UserTrackingSystemCard(props) { 
  const history = useHistory();

  function handleClick() {
      history.push("/initiative/intro");
  }

  let enrolled = null

  if(props.enrolled){
    enrolled = <Badge bg="warning" text="dark">
                  Enrolled
               </Badge>
  }else{
    enrolled = <CardProgress progress="90" />
  }
  return (
    <Card className="initiative-card text-center" onClick={handleClick} >
      <Card.Img variant="top" src="/initiative/initiative.jpg" />
      <Card.Body className='mt-3'>
        <Card.Title className="initiative-card-title" >Nurabi Marathon</Card.Title>
        <Card.Text className="initiative-provider" >By Nurabi</Card.Text>
        <Card.Text className='mb-2 initiative-rate'>
          <p className='text-muted'>lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem</p>
          {enrolled}
          
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserTrackingSystemCard;
