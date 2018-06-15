import * as React from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
import { Profile } from './Profile';

interface IEditProfileProps {
    currentProfile: Profile
}
interface IEditProfileState {
    firstName: string,
    lastName: string,
    password: string,
    cohort: string,
    office: string;
    hobbies: string[]
}



export default class EditProfile extends React.Component<IEditProfileProps, IEditProfileState>{
    constructor(props: IEditProfileProps) {
        super(props);
        this.state = {
            cohort: this.props.currentProfile.cohort,
            firstName: this.props.currentProfile.firstName,
            hobbies: this.props.currentProfile.hobbies,
            lastName: this.props.currentProfile.lastName,
            office: this.props.currentProfile.office,
            password: this.props.currentProfile.password,
        }
    }

    public listHobbies(list: string[]): string {
        let final = "";
        for ( const item of Object(list) ) {
            final += item + ", ";
        }
        final = final.substring(0,final.length-2);
        return final;
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
                        <FormControl type="text" placeholder={this.state.lastName} />
                    </FormGroup>
                    <FormGroup controlId={"formPassword"}>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="text" placeholder={this.state.password} />
                    </FormGroup>
                    <FormGroup controlId={"form.Cohort"}>
                        <ControlLabel>Cohort</ControlLabel>
                        <FormControl type="text" placeholder={this.state.cohort} />
                    </FormGroup>
                    <FormGroup controlId={"form.Office"}>
                        <ControlLabel>Office</ControlLabel>
                        <FormControl type="text" placeholder={this.state.office} />
                    </FormGroup>
                    <FormGroup controlId={"formHobbies"}>
                        <ControlLabel>Hobbies</ControlLabel>
                        <FormControl type="text" placeholder={this.listHobbies(this.state.hobbies)} />
                    </FormGroup>
                </Form>
                <Button bsStyle="success">Submit <i className="fas fa-thumbs-up"/></Button>
            </div>
        );
    }
}