import './InitiativesItem.css'
import courseImg from './course.png'; 
import RateAndPrice from './RateAndPrice/RateAndPrice';
const InitiativesItem = () => {
    return (  
        <div className="course-item d-flex row">
            <div className="course-image col-md-3">
                <img src={courseImg} alt="course-img" />
            </div>
            <div className="course-details col-md-7">
                <h4>How To Make You Son Hight Creaticity </h4>
                <p>
                    This course will increase your children with new steps from mind stories games and more ...
                </p>
                <p className="course-provider">By Nurabi</p>
                <RateAndPrice />
            </div>
            <div className="col-md-2 course-price">
                <div className="discount-price">39 $</div>
                <div className="real-price">50 $</div>
            </div>
        </div>
    )
}

export default InitiativesItem
