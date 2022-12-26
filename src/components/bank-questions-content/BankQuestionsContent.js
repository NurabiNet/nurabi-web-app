import React, { useState } from 'react';
import { Collapse } from "react-bootstrap"
import { FaEye, FaRegQuestionCircle , FaArrowUp , FaArrowDown , FaHandHoldingHeart , FaHandPointDown} from 'react-icons/fa';
import './BankQuestionsContent.css'
import BankQuestionsContentObj from './BankQuestionsContentObj';

    const BankQuestionsContent = () => {

        const [ courseSections , setCourseSections ] = useState(BankQuestionsContentObj)

        const changeCollapeHandler = (index) => {

        let newCourseSections = [...courseSections]
        
        console.log(newCourseSections[index])

        newCourseSections[index].collapsed = ! newCourseSections[index].collapsed

            
        setCourseSections(newCourseSections)
        
    }


    
    return (
        <div className="">
            
            <div className="">

                {
                    courseSections.map( (section,index) => {

                       return (

                        <div className='section-container' key={index}>    

                            <div
                                onClick={() => changeCollapeHandler(index)}
                                aria-controls="example-collapse-text"
                                aria-expanded={section.collapsed}
                                className="d-flex align-items-center section-item-collapse justify-content-between bankquestionItem"
                            >
                                <div className='d-flex align-items-center'>    
                                    <span className="icon-type">
                                        <FaRegQuestionCircle size={20} className='icon' />
                                    </span>
                                    <p className='section-title'>{section.title}</p>
                                </div>

                                <div className='d-flex'>

                                    <div className='d-flex align-items-center bankQuestionRates'>
                                        <div className='m-2'>
                                            <FaEye className='icon' />
                                            <span className='m-2'>3000</span>
                                        </div>

                                        <div className='m-2'>
                                            <FaHandHoldingHeart className='icon' />
                                            <span className='m-2'>3000</span>
                                        </div>

                                        <div className='m-2'>
                                            <FaHandPointDown className='icon' />
                                            <span className='m-2'>3000</span>
                                        </div>
                                        
                                    </div>

                                    <div className='collaped-item m-2'>{ section.collapsed ? <FaArrowUp /> : <FaArrowDown /> }</div>

                                </div>
                                
                            </div>
                            <Collapse in={section.collapsed}>
                                <div id="example-collapse-text" >
                                    <div className="section-item d-flex justify-content-between">
                                        <div style={ { 'padding' : '0 2rem' } }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                    </div> 
                                                             
                                </div>

                                

                                
                            </Collapse>
                        </div>

                       )

                    } )
                }

            </div>
        </div>
    )
}

export default BankQuestionsContent