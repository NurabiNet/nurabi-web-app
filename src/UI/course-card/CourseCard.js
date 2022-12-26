import Card from 'react-bootstrap/Card';
import courseImg from '../../images/courses/course-img.png'
import CourseCardLink from '../course-card-link/CourseCardLink';
import RateStars from '../rate-stars/RateStars';
import './CourseCard.css'

function CourseCard() { 
  return (
    <Card className="course-card" >
      <Card.Img variant="top" src={courseImg} />
      <Card.Body>
        <Card.Title className="course-card-title" >How To Make Your Son Hight Creatiivty</Card.Title>
        <Card.Text className="course-provider" >By Nurabi</Card.Text>
        <Card.Text>
          <RateStars />
        </Card.Text>
        <CourseCardLink />
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
