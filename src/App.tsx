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
  private dummyProfiles = [{
    cohort: "C2",
    firstName: "Lane",
    hobbies: ["Baseball", "C#"],
    imageUrl: "https://pbs.twimg.com/profile_images/890822100306604032/3BWD1Ec9_400x400.jpg",
    lastName: "Ferrell",
    office: "Atlanta",
    password: "password",
    userId: "lane.ferrell@parivedasolutions.com"
  }, {
    cohort: "C1",
    firstName: "Marcus",
    hobbies: ["Soccer", "Python"],
    imageUrl: "https://pbs.twimg.com/profile_images/890822100306604032/3BWD1Ec9_400x400.jpg",
    lastName: "Tsang",
    office: "New York",
    password: "password",
    userId: "marcus.tseng@parivedasolutions.com"
  },
  {
    cohort: "C1",
    firstName: "Matt",
    hobbies: ["Football", "MVC"],
    imageUrl: "https://pbs.twimg.com/profile_images/890822100306604032/3BWD1Ec9_400x400.jpg",
    lastName: "Loft",
    office: "Dallas",
    password: "password",
    userId: "matt.loft@parivedasolutions.com"
  },
  {
    cohort: "C2",
    firstName: "Wesley",
    hobbies: ["Basketball", "C#"],
    imageUrl: "https://pbs.twimg.com/profile_images/890822100306604032/3BWD1Ec9_400x400.jpg",
    lastName: "Evans",
    office: "Atlanta",
    password: "password",
    userId: "wesley.evans@parivedasolutions.com"
  },
  {
    cohort: "C1",
    firstName: "Sydney",
    hobbies: ["Coding", "Java"],
    imageUrl: "https://pbs.twimg.com/profile_images/890822100306604032/3BWD1Ec9_400x400.jpg",
    lastName: "Knox",
    office: "Chicago",
    password: "password",
    userId: "sydney.knox@parivedasolutions.com"
  }];
  constructor(props: {}) {
    super(props);
    this.state = {
      currentPage: pages.home,
      currentProfile: this.dummyProfiles[0],
      selectedProfile: this.dummyProfiles[0]
    }
  }
  public render() {
    return (
      <div className="App">
        {this.renderLogin()}
        {this.renderLayout()}
        {this.renderHome()}
        {this.renderViewProfile()}
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
        <div className="container"> <Home profiles={this.dummyProfiles} onButtonClick={this.handlePageChange} onProfileSelect={this.setSelectedProfile} /> </div>
      );
    }
    return undefined;
  }

  public renderLunchHistory() {
    if (this.state.currentPage === pages.lunchHistory) {
      return <div><LunchHistory onButtonClick={this.handlePageChange} currentUser={this.state.currentProfile} /></div>
    }
    return undefined;
  }

  public renderViewProfile() {
    if (this.state.currentPage === pages.viewProfile) {
      return <div><ViewProfile onButtonClick={this.handlePageChange} selectedProfile={this.state.selectedProfile} onProfileSelect={this.setSelectedProfile} /> </div>

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
      return <div><Layout onClickMenu={this.handlePageChange } profiles={this.dummyProfiles} onProfileSelect={this.setSelectedProfile}/> </div>
    }
    return undefined;
  }
  public renderEditProfile() {
    if (this.state.currentPage === pages.editProfile) {
      return <div><EditProfile currentProfile={this.state.currentProfile} /></div>
    }
    return undefined;
  }

  public setSelectedProfile = (profile: Profile) => {
    this.setState({ selectedProfile: profile });
  }
}

export default App;
