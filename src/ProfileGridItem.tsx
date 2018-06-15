import * as React from 'react';
import { pages } from './pages';
import { Profile } from './Profile';
import ScheduleLunchButton from './ScheduleLunchButton';
interface IProfileGridItemProp {
    profile: Profile;
    onButtonClick: (page: pages) => void;
    onProfileSelect: (profile: Profile) => void;
}
export default class ProfileGridItem extends React.Component<IProfileGridItemProp> {
    constructor(props: IProfileGridItemProp) {
        super(props);
    }
    public render() {
        return (
            <tr>
                <td>{this.props.profile.firstName} {this.props.profile.lastName}</td>
                <td>Dummy Client</td>
                <td>{this.props.profile.hobbies.map(item => <span key={item}> {item}</span>)}</td>
                <td>{this.props.profile.office}</td>
                <td><ScheduleLunchButton onClickButton={this.routeToScheduling} /></td>
            </tr>
        );
    }
    public routeToScheduling = () => {
        this.props.onProfileSelect(this.props.profile);
        this.props.onButtonClick(pages.scheduling);
    }
}