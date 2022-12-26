import './CoursesList.css'
import CourseItem from './CourseItem';
import { Fragment } from 'react';
import SelectDropDown from './SelectDropDown';
const CoursesList = () => {
    return (
            <Fragment>
                <div className="row courses-top-head mb-md-3 align-items-center">
                
                    <div className='col-6'>
                        <p>Courses (200 course) </p>
                    </div>

                    <div className="col-6 ml-auto">
                        <div className='row'>
                            <div className='col-3 d-flex align-items-center sort-container'>
                                <span>Sort By</span>
                            </div>
                            <div className='col-4 p-0'>
                                <SelectDropDown />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="courses-list">
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                </div>
            </Fragment>
        
    )
}

export default CoursesList
