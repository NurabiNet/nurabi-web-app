import { Col, Container, Row } from "react-bootstrap"
import MainButton from "../../UI/main-button/MainButton"
import PersonalityCard from "../../UI/personality-card/PersonalityCard"
import PrimaryButton from "../../UI/primary-button/PrimaryButton"
import TrackingSystemCard from "../../UI/tracking-system-card/TrackingSystemCard"
import { useHistory } from "react-router-dom";
const PersonalityAnalysis = () => {
    const history = useHistory();

    function handleClick() {
        history.push("/user/personality/result");
    }

    return (
        <Container>

            {/*  Tracking System    */}
            <section className="section"> 
                <div className="">
                    <h1 className="main-black-title">Personality Analysis</h1>
                    <p className="mb-md-5">Check Personality Analysis For You And Your Sons</p>
                </div>
                <Row className="mt-md-5">
                    <Col md={3}>
                        <TrackingSystemCard>
                            <div className="mt-4" onClick={handleClick}>
                                <PrimaryButton
                                    text="Result Details"
                                    background="#fed21a"
                                    color="#434343"
                                    
                                />
                            </div>
                        </TrackingSystemCard>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col md={6}>
                                <PersonalityCard
                                progress="90"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="60"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="10"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="60"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="10"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="90"
                                />
                            </Col>

                        </Row>
                    </Col>
                    
                    
                </Row>
                <Row className="mt-md-5">
                    <Col md={3}>
                        <TrackingSystemCard>
                            <div className="mt-4">
                                <PrimaryButton
                                    text="Result Details"
                                    background="#fed21a"
                                    color="#434343"
                                />
                            </div>
                        </TrackingSystemCard>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col md={6}>
                                <PersonalityCard
                                progress="90"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="60"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="10"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="60"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="10"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="90"
                                />
                            </Col>

                        </Row>
                    </Col>
                    
                    
                </Row>
                <Row className="mt-md-5">
                    <Col md={3}>
                        <TrackingSystemCard>
                            <div className="mt-4">
                                <PrimaryButton
                                    text="Result Details"
                                    background="#fed21a"
                                    color="#434343"
                                />
                            </div>
                        </TrackingSystemCard>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col md={6}>
                                <PersonalityCard
                                progress="90"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="60"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="10"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="60"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="10"
                                />
                            </Col>

                            <Col md={6}>
                                <PersonalityCard
                                progress="90"
                                />
                            </Col>

                        </Row>
                    </Col>
                    
                    
                </Row>
            </section>

           

        </Container>
    )
}

export default PersonalityAnalysis