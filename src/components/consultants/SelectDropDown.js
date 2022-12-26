import './SelectDropDown.css'
const SelectDropDown = () => {
    return (  
        <div className="select-box">
            <div className="select-box__current" tabIndex="1">
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="0" value="1" name="Ben" 
                    checked={true} onChange={e => {}}
                    />
                    <p className="select-box__input-text">Newest</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="1" value="2" name="Ben" 
                    checked={true} onChange={e => {}}
                    />
                    <p className="select-box__input-text">Oldest</p>
                </div>
            
                
                <img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden={true}/>
                
            </div>


            <ul className="select-box__list">
                <li>
                <label className="select-box__option" htmlFor="0" >Newest</label>
                </li>
                <li>
                <label className="select-box__option" htmlFor="1" >Oldest</label>
                </li>
            </ul>

        </div>
    )
}

export default SelectDropDown
