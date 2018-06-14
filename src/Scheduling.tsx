import * as React from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
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
            <h3>Name: {this.props.selectedProfile.firstName}</h3>
            <h3>Office: {this.props.selectedProfile.office}</h3>
            <h3>Hobbies: {this.props.selectedProfile.hobbies.map(item => <span key={item}>{item} </span>)} </h3>
            <form>
                <FormGroup controlId={"partner"} >
                    <FormControl type={"text"} placeholder={"Location"} /> <br />
                    <FormControl type={"text"} placeholder={"Date"} /> <br />
                    <FormControl type={"text"} placeholder={"Time"} /> <br />
                </FormGroup>
                <LunchScheduled />
            </form>
        </div>
    }
}