import * as React from 'react';
import './Layout.css';
import { pages } from './pages';
import { Profile } from './Profile';
import SearchedItem from './searchedItem';

interface IPageProps {
    profiles: Profile[];
    onClickMenu: (page: pages) => void;
    onProfileSelect: (profile: Profile) => void;
}
interface ITerm {
    searchTerm: string;
    foundItems: string[];
}

export default class Layout extends React.Component<IPageProps, ITerm> {
    constructor(props: any) {
        super(props);
        this.state = { searchTerm: '', foundItems: [] };
    }
    public onChange = (arg: React.ChangeEvent<HTMLInputElement>) => {
        const v = arg.target.value;
        this.setState({ searchTerm: v, foundItems: this.find(v) });
    }
    public find(value: string): string[] {
        const final = [];
        const names = ["Lane", "Marcus", "Matt", "Wesley", "Sydney"];
        if (value === ""){
            return [];
        }
        for ( const item of Object(names) ){
            if(item.toLowerCase().startsWith(value.toLocaleLowerCase())){
                final.push(item);
            }
        }
        return final;
    }
    public profileIndex(value: string): any {
        if (value === "Lane"){
            return 0;
        } else if (value === "Marcus"){
            return 1;
        } else if (value === "Matt"){
            return 2;
        } else if (value === "Wesley"){
            return 3;
        } else if (value === "Sydney"){
            return 4;
        } else{ 
            return;
        }
    }
    public render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand" href="#" onClick={this.selectHome}>Fin-A-Friend</a>
                <div>
                    <input value={this.state.searchTerm} style={{color:"black"}} onChange={this.onChange} placeholder="Search Fins"/>
                    {this.state.foundItems.map(x =><div key={x}>{x} <SearchedItem profile={this.props.profiles[this.profileIndex(x)]} onRouteToPage={this.routeToPage} onProfileSelect={this.setSelectedProfile}/></div>)}
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown nav-right">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Hello Fin!
                            </a>

                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#" onClick={this.selectProfile}><i className="fas fa-user" /> My Profile</a>
                                <a className="dropdown-item" href="#" onClick={this.selectLunchHistory}><i className="fas fa-history" /> Lunch History</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt" /> Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>);
    }
    public selectLunchHistory = () => {
        this.props.onClickMenu(pages.lunchHistory);
    }
    public selectHome = () => {
        this.props.onClickMenu(pages.home);
    }
    public selectProfile = () => {
        this.props.onClickMenu(pages.editProfile);
    }
    public routeToPage = (page: pages) => {
        this.props.onClickMenu(page);
    }
    public setSelectedProfile = (profile: Profile) => {
        this.props.onProfileSelect(profile);
    }
}