import './MainButton.css'
import Button from 'react-bootstrap/Button';
function MainButton(props) { 
  return (
    <Button className="card-button" variant="primary">{props.text}</Button>
  );
}

export default MainButton;