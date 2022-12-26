import './ShoppingCartItem.css'
import courseImg from './course.png'; 
import RateStars from '../../UI/rate-stars/RateStars'
import { FaTrash } from 'react-icons/fa';
const ShoppingCartItem = () => {
    

    return (  
        
        <div className="course-item d-flex row">
            <div className="course-image col-md-3">
                <img src={courseImg} alt="course-img" />
            </div>
            <div className="course-details col-md-7">
                <h4>Shopping Cart Course Name</h4>
                <p>
                    This course will increase your children with new steps from mind stories games and more ...
                </p>
                <p className="course-provider">By Nurabi</p>
                <RateStars />
            </div>
            <div className="col-md-2 course-price d-flex flex-column justify-content-between">
                <div>
                    <div className="discount-price">39 $</div>
                </div>

                <div>
                    <FaTrash  color='#fb5456'/>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartItem
