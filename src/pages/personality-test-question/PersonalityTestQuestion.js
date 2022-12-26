import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import MainButton from '../../UI/main-button/MainButton'
import classes from './PersonalityTestQuestion.module.css'
const PersonalityTestQuestion = () => {
    return (
        <Fragment>

            <Container>

                {/* personality analysis list     */}
                <section className={`section ${classes.personalityTest}`}> 
                    <div>
                        <h3 className='mb-5'>How To Learn Your Son New skill he/she Hate it ?</h3>
                    </div>

                    <div className={classes.Questions}>
                        <form action="#">
                            <p className={classes.Question}>
                                <input type="radio" id="test1" name="radio-group"  />
                                <label htmlFor="test1">Apple</label>
                            </p>
                            <p className={classes.Question}>
                                <input type="radio" id="test2" name="radio-group" />
                                <label htmlFor="test2">Peach</label>
                            </p>
                            <p className={classes.Question}>
                                <input type="radio" id="test3" name="radio-group" />
                                <label htmlFor="test3">Orange</label>
                            </p>
                        </form>
                    </div>
                </section>

            </Container>

            <div className={`d-flex justify-content-between align-items-center ${classes.QuestionFooter}`}>
                <p className='m-0'>1 Of 6 Questions</p>
                <div>
                    <MainButton text="Next" />
                </div>
            </div>

        </Fragment>
    )
}

export default PersonalityTestQuestion