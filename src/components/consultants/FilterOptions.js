import './FilterOptions.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const FilterOptions = () => {

    return (    
        <Col xs={3} >
            <p className="filters-title" >Filter</p>

            <div className='filter-content'>
                <div className="filter-type">
                    <p className="filter-type-title">Type</p>
                    <div className="filter-type-options">
                    <Form.Check type="checkbox" id={`course`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>Course</Form.Check.Label>  
                    </Form.Check>

                    <Form.Check type="checkbox" id={`diploma`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>Diploma</Form.Check.Label>  
                    </Form.Check>

                    </div>
                </div>
            </div>

            <div className='filter-content'>
                <div className="filter-type">
                    <p className="filter-type-title">Course Provider</p>
                    <div className="filter-type-options">
                    <Form.Check type="checkbox" id={`nurabi`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>Nurabi</Form.Check.Label>  
                    </Form.Check>

                    <Form.Check type="checkbox" id={`conultant`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>Conultant</Form.Check.Label>  
                    </Form.Check>

                    <Form.Check type="checkbox" id={`teacher`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>Teacher</Form.Check.Label>  
                    </Form.Check>

                    <Form.Check type="checkbox" id={`coach`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>Coach</Form.Check.Label>  
                    </Form.Check>

                    </div>
                </div>
            </div>

            <div className='filter-content'>
                <div className="filter-type">
                    <p className="filter-type-title">Language</p>
                    <div className="filter-type-options">
                    <Form.Check type="checkbox" id={`english`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>English</Form.Check.Label>  
                    </Form.Check>

                    <Form.Check type="checkbox" id={`arabic`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>العربية</Form.Check.Label>  
                    </Form.Check>

                    </div>
                </div>
            </div>

            <div className='filter-content'>
                <div className="filter-type">
                    <p className="filter-type-title">Rate</p>
                    <div className="filter-type-options">
                    <Form.Check type="checkbox" id={`rate`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>Top Rated</Form.Check.Label>  
                    </Form.Check>
                    </div>
                </div>
            </div>

            <div className='filter-content'>
                <div className="filter-type">
                    <p className="filter-type-title">Enrollment</p>
                    <div className="filter-type-options">
                    <Form.Check type="checkbox" id={`enrollment`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>Top Enrollment</Form.Check.Label>  
                    </Form.Check>
                    </div>
                </div>
            </div>

            <div className='filter-content'>
                <div className="filter-type">
                    <p className="filter-type-title">Categories</p>
                    <div className="filter-type-options">
                    <Form.Check type="checkbox" id={`mobile`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>Mobile</Form.Check.Label>  
                    </Form.Check>

                    <Form.Check type="checkbox" id={`educational`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>educational</Form.Check.Label>  
                    </Form.Check>

                    <Form.Check type="checkbox" id={`science`}>
                        <Form.Check.Input type='checkbox' isValid />
                        <Form.Check.Label>Science</Form.Check.Label>  
                    </Form.Check>

                    </div>
                </div>
            </div>
        </Col>
    )
}

export default FilterOptions
