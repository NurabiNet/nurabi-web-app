import classes from './StatusButton.module.css'
function StatusButton(props) { 
  return (
    <span
    className={classes.Status}
    style={{ 'backgroundColor': props.background , 'color' : props.color }}
    >
      {props.status}
    </span>
  );
}

export default StatusButton;