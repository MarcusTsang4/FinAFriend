import * as React from 'react';
<<<<<<< HEAD
import './App.css';

export default class Home extends React.Component {
=======
import { pages } from './pages';
import { Profile } from './Profile';
import ProfileGridItem from './ProfileGridItem';
interface IHomeProfileProps {
    profiles: Profile[];
    onButtonClick: (page: pages) => void;
    onProfileSelect: (profile: Profile) => void;
}
export default class Home extends React.Component<IHomeProfileProps> {
>>>>>>> b11d46a34764d09e4e8b96d494c7c0a27f9d8f09
    public render() {
        return (
            <div className="container">
                <div className="bs-example">
                    <div className="panel-group" id="accordion3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Meet a new Fin today!</a>
                                </h4>
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse in">
                                <div className="panel-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th />
                                                <th>Hobbies</th>
                                                <th>Office</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <ProfileGridItem profile={this.props.profiles[0]} onRouteToPage={this.routeToPage} onProfileSelect={this.setSelectedProfile} />
                                            <ProfileGridItem profile={this.props.profiles[1]} onRouteToPage={this.routeToPage} onProfileSelect={this.setSelectedProfile} />
                                            <ProfileGridItem profile={this.props.profiles[2]} onRouteToPage={this.routeToPage} onProfileSelect={this.setSelectedProfile} />
                                            <ProfileGridItem profile={this.props.profiles[3]} onRouteToPage={this.routeToPage} onProfileSelect={this.setSelectedProfile} />
                                            <ProfileGridItem profile={this.props.profiles[4]} onRouteToPage={this.routeToPage} onProfileSelect={this.setSelectedProfile} />

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
    public routeToPage = (page: pages) => {
        this.props.onButtonClick(page);
    }
    public setSelectedProfile = (profile: Profile) => {
        this.props.onProfileSelect(profile);
    }
}