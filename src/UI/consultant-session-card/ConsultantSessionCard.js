import Card from 'react-bootstrap/Card';
import consultantImg from './consultant.jpg'
import './ConsultantSessionCard.css'
import Language from '../language/Language';
import { useHistory } from "react-router-dom";
import { FaClock, FaDollarSign } from 'react-icons/fa';
import MainButton from '../main-button/MainButton';

function ConsultantSessionCard(props) { 
  const history = useHistory();

  function handleClick() {
      history.push("/consultants/1");
  }
  return (
    <Card className="consultant-card text-center" onClick={handleClick} >
      <Card.Img variant="top" src={consultantImg} />
      <Card.Body className='mt-3 mb-4'>
        <Card.Title className="consultant-card-title" >Ahmed Taha</Card.Title>
        <Card.Text className='mb-3 consultant-rate'>
          ( {props.type} )
        </Card.Text>
        <Card.Text>
          <Language name="Field 1" />
          <Language name="Field 2" />
        </Card.Text>
        <Card.Text>
        <div className="mt-4"
          style={{
              justifyContent: 'space-evenly',
              borderBottom : '1px solid #eee',
              paddingBottom: '20px'
          }}
          >
              <div className='mb-2'>
                  <FaClock color="#fb5465" style={{fontSize: '1.5rem'}} /> 20 Dec 2022 At 09:00 PM
              </div>

              <div>
                  <FaDollarSign color="#65c890" style={{fontSize: '1.5rem'}} /> Paid
              </div>
              
          </div>
          <div className="mt-4">
              <MainButton text="Start Session Now" />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ConsultantSessionCard;
