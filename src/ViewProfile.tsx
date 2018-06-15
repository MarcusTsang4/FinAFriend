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



                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <ScheduleLunchButton onClickScheduleLunchButton={this.routeToSchedulingPage} />
                    </Col>
                </Row>
            </div>
        );

    }
    public routeToSchedulingPage = () => {
        this.props.onProfileSelect(this.props.selectedProfile);
        this.props.onButtonClick(pages.scheduling);
    }
}