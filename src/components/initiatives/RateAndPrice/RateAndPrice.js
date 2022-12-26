import RateStars from '../../../UI/rate-stars/RateStars'
import SourceViews from '../../../UI/source-views/SourceViews'
import './RateAndPrice.css'
const RateAndPrice = () => {
    return (  

        <div className='rate-content d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <RateStars />

                <div className="rate-number">
                (50 Rate) 200 Students 
                </div>
            </div>

            <SourceViews />

            
        </div>
        
    )
}

export default RateAndPrice
