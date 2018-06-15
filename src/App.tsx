import * as React from 'react';
import './App.css';

// import logo from './logo.svg';
import EditProfile from './EditProfile';
import Home from './Home';
import Layout from './Layout';
import Login from './Login';
import LunchHistory from './LunchHistory';
// import NoSearchResult from './NoSearchResult';

import { pages } from './pages';

import { Profile } from './Profile';
import Scheduling from './Scheduling';

import ViewProfile from './ViewProfile';
// import SearchResult from './SearchResult';

interface IPageState {
  currentPage: pages,
  currentProfile: Profile,
  selectedProfile: Profile
}

class App extends React.Component<{}, IPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentPage: pages.home,
      currentProfile: this.getDefaultCurrentProfile(),
      selectedProfile: this.getDefaultSelectedProfile()
    }
  }
  public render() {
    return (
      <div className="App">
        {this.renderLogin()}
        {this.renderLayout()}
        {this.renderHome()}
        {this.renderProfile()}
        {this.renderEditProfile()}
        {this.renderLunchHistory()}
        {this.renderScheduling()}
      </div>
    );
  }

  public handlePageChange = (page: pages) => {
    this.setState({ currentPage: page });
  }


  public renderHome() {
    if (this.state.currentPage === pages.home) {
      return (
        <div className="container"> <Home /> </div>
      );
    }
    return undefined;
  }

  public renderLunchHistory() {
    if (this.state.currentPage === pages.lunchHistory) {
      return <div><LunchHistory onButtonClick={this.handlePageChange} /></div>
    }
    return undefined;
  }

  public renderProfile() {
    if (this.state.currentPage === pages.viewProfile) {
      if (this.state.currentProfile !== this.state.selectedProfile) {

        return <div><ViewProfile onButtonClick={this.handlePageChange} selectedProfile={this.state.selectedProfile} /> </div>
      }
      return <div><ViewProfile onButtonClick={this.handlePageChange} selectedProfile={this.state.currentProfile} /> </div>
    }
    return undefined;
  }

  public renderScheduling() {
    if (this.state.currentPage === pages.scheduling) {
      return <div><Scheduling selectedProfile={this.state.selectedProfile} /> </div>
    }
    return undefined;
  }
  public renderLogin() {
    if (this.state.currentPage === pages.login) {
      return <div><Login /> </div>
    }
    return undefined;
  }
  public renderLayout() {
    if (this.state.currentPage !== pages.login) {
      return <div><Layout onClickMenu={this.handlePageChange} /> </div>
    }
    return undefined;
  }
  public renderEditProfile() {
    if (this.state.currentPage === pages.editProfile) {
      return <div><EditProfile currentProfile={this.state.selectedProfile} /></div>
    }
    return undefined;
  }
  public getDefaultSelectedProfile() {
    return {
      cohort: "C1",
      firstName: "Marcus",
      hobbies: ["Soccer", "Python"],
      lastName: "Tsang",
      office: "New York",
      password: "password",
      userId: "marcus.tsang@parivedasolutions.com"
    }
  }
  public getDefaultCurrentProfile() {
    return {
      cohort: "C2",
      firstName: "Lane",
      hobbies: ["Baseball", "C#"],
      lastName: "Ferrell",
      office: "Atlanta",
      password: "password",
      userId: "lane.ferrell@parivedasolutions.com"
    }
  }

  public setSelectedProfile = (profile: Profile) => {
    this.setState({ selectedProfile: profile });
  }
}

export default App;
