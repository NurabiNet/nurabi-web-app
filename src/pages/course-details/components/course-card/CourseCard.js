import Card from 'react-bootstrap/Card';
import { FaCircle, FaPlay } from 'react-icons/fa';
import MainButton from '../../../../UI/main-button/MainButton';
import courseImg from './5218235.jpg'
import './CourseCard.css'

function CourseCard() { 
  return (
    <Card className="course-details-card" >
      <div className='card-img-container'>  
        <div className="card-img-container">
          <div className="overlay">
          <div className='icon-container'>
            <FaPlay className='preview-icon' />
          </div>  
          </div>
          <img className="card-img-top" alt="courseImg" src={courseImg} />
        </div>
      </div>
      <Card.Body className="course-body">
        <h5>Price</h5>
        <p><span className='discount-price'>39$</span> <span className='real-price'>60$</span> <span className='discount-percentage'>30%</span></p>
        <h5>Include</h5>
        <div className='course-features'>
            <p><span><FaCircle color='#07b2bd' style={{fontSize : '12px'}} /> </span> 15 Total Hours</p>
            <p><span><FaCircle color='#07b2bd' style={{fontSize : '12px'}} /> </span> 3 Quiz</p>
            <p><span><FaCircle color='#07b2bd' style={{fontSize : '12px'}} /> </span> 3 Assesmsnts</p>
            <p><span><FaCircle color='#07b2bd' style={{fontSize : '12px'}} /> </span> Certificate</p>
            <p><span><FaCircle color='#07b2bd' style={{fontSize : '12px'}} /> </span> 4 Files</p>
        </div>
        <div className="mt-4 mb-2">
          <MainButton text="Enroll Course" />
        </div>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
