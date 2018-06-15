import * as React from 'react';
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
                <h2>Name: {this.props.selectedProfile.firstName} {this.props.selectedProfile.lastName}</h2>
                <h3>Office: {this.props.selectedProfile.office}</h3>
                <h3>Cohort: {this.props.selectedProfile.cohort} </h3>
                <h3>Hobbies: {this.props.selectedProfile.hobbies.map(item => <span key={item}>{item} </span>)} </h3>

                <ScheduleLunchButton onClickButton={this.routeToSchedulingPage} />
            </div>
        );

    }
    public routeToSchedulingPage = () => {
        this.props.onProfileSelect(this.props.selectedProfile);
        this.props.onButtonClick(pages.scheduling);
    }
}