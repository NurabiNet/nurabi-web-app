import './RateStars.css'
import { FaStar } from 'react-icons/fa';
function RateStars() { 
  return (
    <span className='rate-stars'>
        <FaStar color="#fed21b" size="25" /> 
        <FaStar color="#fed21b" size="25" /> 
        <FaStar color="#fed21b" size="25" /> 
        <FaStar color="#fed21b" size="25" /> 
        <FaStar color="#fed21b" size="25" />
    </span>
  );
}

export default RateStars;
