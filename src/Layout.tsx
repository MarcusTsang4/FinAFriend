import * as React from 'react';
import './Layout.css';
import { pages } from './pages';

interface IPageProps {
    onClickMenu: (page: pages) => void;
}
interface ITerm {
    searchTerm: string;
    foundItems: string[];
}

export default class Layout extends React.Component<IPageProps, ITerm> {
    constructor(props: any) {
        super(props);
<<<<<<< HEAD
        this.state = {searchTerm: '', foundItems:[]};
=======
        this.state = { searchTerm: '' };
>>>>>>> b11d46a34764d09e4e8b96d494c7c0a27f9d8f09
    }
    public onChange = (arg: React.ChangeEvent<HTMLInputElement>) => {
        const v = arg.target.value;
<<<<<<< HEAD
        this.setState({searchTerm: v, foundItems: this.find(v)});
    }
    public find(value: string): string[] {
        return []
=======
        this.setState({ searchTerm: v });
>>>>>>> b11d46a34764d09e4e8b96d494c7c0a27f9d8f09
    }
    public render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand" href="#" onClick={this.selectHome}>Fin-A-Friend</a>
                <input value={this.state.searchTerm} onChange={this.onChange} />

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
}