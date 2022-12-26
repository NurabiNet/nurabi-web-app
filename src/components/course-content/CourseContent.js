import React, { useState } from 'react';
import { Collapse } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { FaEdit, FaLock, FaMinus, FaPlay, FaPlus } from 'react-icons/fa';
import './CourseContent.css'
import CourseContentObj from './CourseContentObj';

    const CourseContent = () => {

        const [ courseSections , setCourseSections ] = useState(CourseContentObj)

        const changeCollapeHandler = (index) => {

        let newCourseSections = [...courseSections]
        
        console.log(newCourseSections[index])

        newCourseSections[index].collapsed = ! newCourseSections[index].collapsed

            
        setCourseSections(newCourseSections)
        
    }

    const history = useHistory();

    function handleClick() {
        history.push("/lesson/1");
    }


    
    return (
        <div className="course-content">
            <div className='course-header'>
                <h5 className='mt-4'>Course Content</h5>
                <p className="m-0">3 sections, 15 lectures</p>
            </div>

            <div className="course-content-sections">

                {
                    courseSections.map( (section,index) => {

                       return (

                        <div className='section-container' key={index}>    

                            <div
                                onClick={() => changeCollapeHandler(index)}
                                aria-controls="example-collapse-text"
                                aria-expanded={section.collapsed}
                                className="d-flex justify-content-between align-items-center section-item-collapse"
                            >
                                <p className='section-title'>{section.title}</p>
                                <div>{ section.collapsed ? <FaMinus /> : <FaPlus /> }</div>
                                
                            </div>
                            <Collapse in={section.collapsed}>
                                <div id="example-collapse-text" >
                                    {
                                        section.lessons.map( (lesson,indexs) => {
                                            return (

                                                <div className="section-item d-flex justify-content-between" key={indexs} onClick={handleClick}>
                                                    <div className="d-flex">
                                                        <div className="icon-type">
                                                            { lesson.type === 'video' && <FaPlay className='icon' /> }
                                                            { lesson.type === 'quiz' && <FaEdit className='icon' /> }
                                                            
                                                        </div>

                                                        <div>
                                                            <p className="lecture-title">
                                                                {lesson.title}
                                                            </p>

                                                            <p className="lecture-type">
                                                                { lesson.type === 'video' &&  `Video , ${lesson.duration} Mins` }
                                                                { lesson.type === 'quiz' &&  `Quiz , ${lesson.quizQuestionNum} Questions` }
                                                                
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

export default CourseContent