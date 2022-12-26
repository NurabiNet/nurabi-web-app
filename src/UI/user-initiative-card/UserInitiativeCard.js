import classes from './UserInitiativeCard.module.css'
import courseImg from './course.png'; 
import { useHistory } from "react-router-dom";
import { FaLongArrowAltRight , FaRegCalendarAlt } from 'react-icons/fa';
import UserInitiativeProgressCard from '../user-initiative-progress-card/UserInitiativeProgressCard';
const UserInitiativeCard = () => {
    const history = useHistory();

    function handleClick() {
        history.push("/courses/1");
    }

    return (  
        
        <div className={`${classes.InitiativeItem} d-flex row`} onClick={handleClick}>
            <div className={`${classes.InitiativeImage} col-md-3`}>
                <img src={courseImg} alt="Initiative-Img" />
            </div>
            <div className={`${classes.InitiativeDetails} col-md-7`}>
                <h4>Nurabi Marathon</h4>
                <p>
                    This Marathon will increase your children with new steps from mind stories games and more This Marathon will increase your children with new steps from mind stories games and more ...
                </p>
                <p className={`${classes.InitiativeProvider}`}>By Nurabi</p>

                <div class="Date d-flex align-items-center pl-3 pr-3">
                    <div class="Start">
                        <p class="m-0 d-flex align-items-center" style={ { 'color': '#959494' } }><FaRegCalendarAlt style={ { 'marginRight': '5px' } } /> Start </p>
                        <p>10-10-2022</p>
                    </div>
                    <div className={`${classes.ArrowDate}`}>
                        <FaLongArrowAltRight color="#07b2bd" />
                    </div>
                    <div class="End">
                        <p class="m-0 d-flex align-items-center" style={ { 'color': '#959494' } }><FaRegCalendarAlt style={ { 'marginRight': '5px' } } /> End</p>
                        <p>10-10-2022</p>
                    </div>
                </div>
                
            </div>
            <div className='col-md-12'>
                <div className='row'>
                    <div className='col-md-3'>
                        <UserInitiativeProgressCard />
                    </div>
                    <div className='col-md-3'>
                        <UserInitiativeProgressCard />
                    </div>
                    <div className='col-md-3'>
                        <UserInitiativeProgressCard />
                    </div>
                    <div className='col-md-3'>
                        <UserInitiativeProgressCard />
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default UserInitiativeCard
