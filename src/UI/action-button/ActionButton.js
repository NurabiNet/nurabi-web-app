import './ActionButton.css'
const ActionButton = (props) => {
    return (
        <div className="actionButtonContainer">
            <div className="actionButton">
                {props.children}
            </div>
        </div>
    )   
}

export default ActionButton