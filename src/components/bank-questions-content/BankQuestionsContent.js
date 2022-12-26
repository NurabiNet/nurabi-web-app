import React, { useState } from 'react';
import { Collapse } from "react-bootstrap"
import { FaEdit, FaEye, FaLock, FaMinus, FaPlay, FaPlus, FaQuestion, FaQuestionCircle, FaRegQuestionCircle , FaArrowUp , FaArrowDown , FaHandHoldingHeart , FaHandPointDown} from 'react-icons/fa';
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
                                    {
                                        section.lessons.map( (lesson,indexs) => {
                                            return (

                                                <div className="section-item d-flex justify-content-between" key={indexs}>
                                                    <div className="d-flex">
                                                        <div className="icon-type">
                                                            { lesson.type == 'video' && <FaPlay className='icon' /> }
                                                            { lesson.type == 'quiz' && <FaEdit className='icon' /> }
                                                            
                                                        </div>

                                                        <div>
                                                            <p className="lecture-title">
                                                                {lesson.title}
                                                            </p>

                                                            <p className="lecture-type">
                                                                { lesson.type == 'video' &&  `Video , ${lesson.duration} Mins` }
                                                                { lesson.type == 'quiz' &&  `Quiz , ${lesson.quizQuestionNum} Questions` }
                                                                
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <FaLock className='lock-icon' />
                                                    </div>

                                                </div> 

                                            )
                                        } )
                                    }
                                                             
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