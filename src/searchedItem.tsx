import * as React from 'react';
import { pages } from './pages';
import { Profile } from './Profile';

interface ISearchedItemProp {
    profile: Profile;
    onRouteToPage: (page: pages) => void;
    onProfileSelect: (profile: Profile) => void;
}
export default class SearchedItem extends React.Component<ISearchedItemProp> {
    constructor(props: ISearchedItemProp) {
        super(props);
    }
    public render() {
        return (
            <span onClick={this.routeToProfile}> - View Profile</span>
        );
    }

    public routeToProfile = () => {
        this.props.onProfileSelect(this.props.profile);
        this.props.onRouteToPage(pages.viewProfile);
    }
}