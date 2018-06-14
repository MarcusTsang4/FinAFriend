import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Form, FormControl, Table } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { pages } from './pages';
import ScheduleLunchButton from './ScheduleLunchButton';

interface ILunchHistoryProps {
    onButtonClick: (page: pages) => void;
}

export default class LunchHistory extends React.Component<ILunchHistoryProps> {
    constructor(props: ILunchHistoryProps) {
        super(props);
    }
    public render() {
        return (
            <div className="container">
                <h2>Lunch History</h2>
                <Form inline={true}>
                    <FormGroup controlId={"LunchSearch"} >
                        <FormControl type={"text"} placeholder={"Search Lunches..."} />
                    </FormGroup>
                    <Button type={"submit"} bsStyle={"primary"} >Search</Button>
                </Form>
                <Table hover={true} responsive={true} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Available?</th>
                            <th>Request Lunch</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lane Ferrell</td>
                            <td>1/1/2010</td>
                            <td>Atlanta</td>
                            <td>Yes</td>
                            <td><ScheduleLunchButton onClickButton={this.routeToScheduling} /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
    public routeToScheduling = () => {
        this.props.onButtonClick(pages.scheduling);
    }
}