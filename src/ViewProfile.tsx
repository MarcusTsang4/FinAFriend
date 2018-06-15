import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { pages } from './pages';
import { Profile } from './Profile';
import ScheduleLunchButton from './ScheduleLunchButton';

interface IProfileProps {
    onButtonClick: (page: pages) => void;
    selectedProfile: Profile;
    onProfileSelect: (profile: Profile) => void;
}

export default class ViewProfile extends React.Component<IProfileProps> {
    constructor(props: IProfileProps) {
        super(props);
    }
    public render() {
        return (
            <div className="container">
                <div className="img">
                    <p>
                        <img src={this.props.selectedProfile.imageUrl} width="15%" alt="profilepic" className="rounded mx-auto d-block" />
                    </p>
                </div>
                <Row>
                    <Col>Name: {this.props.selectedProfile.firstName} {this.props.selectedProfile.lastName}</Col>
                </Row>
                <Row>
                    <Col>Cohort: {this.props.selectedProfile.cohort} </Col>
                </Row>
                <Row>
                    <Col>Hobbies: {this.props.selectedProfile.hobbies.map(item => <span key={item}>{item} </span>)} </Col>
                </Row>
                <Row>
                    <ScheduleLunchButton onClickScheduleLunchButton={this.routeToSchedulingPage} />
                </Row>
            </div>
        );

    }
    public routeToSchedulingPage = () => {
        this.props.onProfileSelect(this.props.selectedProfile);
        this.props.onButtonClick(pages.scheduling);
    }
}