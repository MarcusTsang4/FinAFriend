import * as React from 'react';
import { pages } from './pages';
import { Profile } from './Profile';
import ProfileGridItem from './ProfileGridItem';
interface IHomeProfileProps {
    profiles: Profile[];
    onButtonClick: (page: pages) => void;
    onProfileSelect: (profile: Profile) => void;
}
export default class Home extends React.Component<IHomeProfileProps> {
    public render() {
        return (
            <div className="container">
                <div className="bs-example">
                    <div className="panel-group" id="accordion3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">New Fin Suggestions</a>
                                </h4>
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse in">
                                <div className="panel-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Client</th>
                                                <th>Hobbies</th>
                                                <th>Office</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <ProfileGridItem profile={this.props.profiles[0]} onButtonClick={this.routeToScheduling} onProfileSelect={this.setSelectedProfile} />
                                            <ProfileGridItem profile={this.props.profiles[1]} onButtonClick={this.routeToScheduling} onProfileSelect={this.setSelectedProfile} />
                                            <ProfileGridItem profile={this.props.profiles[2]} onButtonClick={this.routeToScheduling} onProfileSelect={this.setSelectedProfile} />
                                            <ProfileGridItem profile={this.props.profiles[3]} onButtonClick={this.routeToScheduling} onProfileSelect={this.setSelectedProfile} />
                                            <ProfileGridItem profile={this.props.profiles[4]} onButtonClick={this.routeToScheduling} onProfileSelect={this.setSelectedProfile} />

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    public routeToScheduling = () => {
        this.props.onButtonClick(pages.scheduling);
    }
    public setSelectedProfile = (profile: Profile) => {
        this.props.onProfileSelect(profile);
    }
}