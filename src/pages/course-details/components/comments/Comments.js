import avatarImg from './profile.png'; 
import './Comments.css'
import RateStars from '../../../../UI/rate-stars/RateStars';
import { Container } from 'react-bootstrap';
const Comments = () => {
    return (  
        <Container>
            <div className="comment-item d-flex mt-5 justify-content-between">
                <div className='d-flex align-items-center'>
                    <div className="comment-image d-flex justify-content-center align-items-center">
                        <img src={avatarImg} alt="comment-img" />
                    </div>
                    <div className="comment-details">
                        <h4>This is amazing course i have been ever learned</h4>
                        <p>
                            By Ahmed Taha
                        </p>
                        
                    </div>
                </div>
                <div className="comment-price d-flex align-items-end">
                    <RateStars />
                </div>
            </div>
            <div className="comment-item d-flex mt-5 justify-content-between">
                <div className='d-flex align-items-center'>
                    <div className="comment-image d-flex justify-content-center align-items-center">
                        <img src={avatarImg} alt="comment-img" />
                    </div>
                    <div className="comment-details">
                        <h4>This is amazing course i have been ever learned</h4>
                        <p>
                            By Ahmed Taha
                        </p>
                        
                    </div>
                </div>
                <div className="comment-price d-flex align-items-end">
                    <RateStars />
                </div>
            </div>
        </Container>
    )
}

export default Comments