import classes from './PrimaryButton.module.css'
function PrimaryButton(props) { 
  return (
    <button
    className={classes.Button}
    style={{ 'background' : props.background , 'color' : props.color  }}
    >
      {props.text}
    </button>
  );
}

export default PrimaryButton;