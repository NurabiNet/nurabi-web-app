import Card from 'react-bootstrap/Card';
import './InitiativeCard.css'
import { useHistory } from "react-router-dom";

function InitiativeCard(props) { 
  const history = useHistory();

  function handleClick() {
      history.push("/initiative/intro");
  }
  return (
    <Card className="initiative-card text-center" onClick={handleClick} >
      <Card.Img variant="top" src="/initiative/initiative.jpg" />
      <Card.Body className='mt-3'>
        <Card.Title className="initiative-card-title" >Initiative Name</Card.Title>
        <Card.Text className="initiative-provider" >By Nurabi</Card.Text>
        <Card.Text className='mb-2 initiative-rate'>
          <p className='text-muted'>lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem</p>
          <div className="Date d-flex justify-content-between pl-3 pr-3">
            <div className='Start'>
              <p className='m-0'>Start</p>
              <p>10-10-2022</p>
            </div>
            <div className='End'>
              <p className='m-0'>End</p>
              <p>10-10-2022</p>
            </div>
          </div>
          <div className="Price">Free</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InitiativeCard;
