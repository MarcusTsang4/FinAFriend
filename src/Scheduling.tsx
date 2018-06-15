import * as React from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Row } from 'react-bootstrap';
import LunchScheduled from './LunchScheduled';
import { Profile } from './Profile';

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
            <img src={this.props.selectedProfile.imageUrl} width="15%" />
            <Row>
                <Col md={6}>Name: {this.props.selectedProfile.firstName} {this.props.selectedProfile.lastName}</Col>
            </Row>
            <Row>
                <Col md={6}>Office: {this.props.selectedProfile.office}</Col>
            </Row>
            <Row>
                <Col md={6}>Hobbies: {this.props.selectedProfile.hobbies.map(item => <span key={item}>{item} </span>)} </Col>
            </Row>
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
                <LunchScheduled />
            </form>
        </div>
    }
}