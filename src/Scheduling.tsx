import * as React from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Row } from 'react-bootstrap';
import LunchScheduled from './LunchScheduled';
import { Profile } from './Profile';
import './Scheduling.css';

interface ISchedulingProps {
    selectedProfile: Profile
}

export default class Scheduling extends React.Component<ISchedulingProps> {
    constructor(props: ISchedulingProps) {
        super(props);
    }
    public render() {
        return <div className="container">
            <h2> Schedule Lunch with a Fin! </h2>
            <Row>
                <Col lg={2} md={6} sm={12}>
                    <img src={this.props.selectedProfile.imageUrl} width="75%" alt="profilepic" className="rounded mx-auto d-block" />
                </Col>
                <Col lg={10} md={6} sm={12}>
                    <Row>

                        <h4>
                            Name: {this.props.selectedProfile.firstName} {this.props.selectedProfile.lastName}
                        </h4>
                    </Row>
                    <Row>
                        <h4>
                            Cohort: {this.props.selectedProfile.cohort}
                        </h4>
                    </Row>
                    <Row>
                        <h4>
                            Hobbies: {this.props.selectedProfile.hobbies.map(item => <span key={item}>{item} </span>)}
                        </h4>
                    </Row>
                </Col>

            </Row>
            <br />
            <form>
                <FormGroup controlId={"partner"} >
                    <Row>
                        <Col md={6}>
                            <ControlLabel>Location</ControlLabel>
                            <FormControl type={"text"} placeholder={"Enter Location"} />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <ControlLabel>Date</ControlLabel>
                            <FormControl type={"text"} placeholder={"Enter Date"} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ControlLabel>Time</ControlLabel>
                            <FormControl type={"text"} placeholder={"Enter Time"} />
                        </Col>
                    </Row>
                </FormGroup>
                <br />
                <LunchScheduled />
            </form>
        </div>
    }
}