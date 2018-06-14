import * as React from 'react';
import { ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
import { Profile } from './Profile';

interface IEditProfileProps {
    currentProfile: Profile
}
interface IEditProfileState {
    firstName: string,
    lastName: string
}

export default class EditProfile extends React.Component<IEditProfileProps, IEditProfileState>{
    constructor(props: IEditProfileProps) {
        super(props);
        this.state = {
            firstName: this.props.currentProfile.firstName,
            lastName: this.props.currentProfile.lastName
        }
    }
    public render() {
        return (
            <div className="container">
                <Form>
                    <FormGroup controlId={"formFirstName"}>
                        <ControlLabel>First Name</ControlLabel>
                        <FormControl type="text" placeholder={this.state.firstName} />
                    </FormGroup>
                    <FormGroup controlId={"formLastName"}>
                        <ControlLabel>Last Name</ControlLabel>
                        <FormControl type="text" value={this.state.lastName} />
                    </FormGroup>
                </Form>
            </div>
        );
    }
}