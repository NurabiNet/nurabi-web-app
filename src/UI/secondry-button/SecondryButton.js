import Button from 'react-bootstrap/Button';
import classes from './SecondryButton.module.css'
function SecondryButton(props) { 
  return (
    <Button className={classes.CardButton} variant="primary">{props.text}</Button>
  );
}

export default SecondryButton;