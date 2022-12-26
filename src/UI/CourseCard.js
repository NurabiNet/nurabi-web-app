import Card from 'react-bootstrap/Card';
import courseImg from '../images/courses/course-img.png'
import CourseCardLink from './course-card-link/CourseCardLink';
import RateStars from './rate-stars/RateStars';
import './CourseCard.css'
import { useHistory } from "react-router-dom";

function CourseCard() { 
  const history = useHistory();

  function handleClick() {
      history.push("/courses/1");
  }

  return (
    <Card className="course-card"  onClick={handleClick}>
      <Card.Img variant="top" src={courseImg} />
      <Card.Body>
        <Card.Title className="course-card-title mb-3" >How To Make Your Son Hight Creatiivty</Card.Title>
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
