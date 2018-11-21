import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
// import Header from '../Header/Header';
import CreateNewProfile from '../CreateNewProfile/CreateNewProfile';
import CurrentProfiles from '../CurrentProfiles/CurrentProfiles';
import UserInterface from '../UserInterface/UserInterface';
import IndividualProfile from '../IndividualProfile/IndividualProfile';
import HistoryPage from '../HistoryPage/HistoryPage';
import SelectedTasks from '../SelectedTasks/SelectedTasks';

import './App.css';


class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <div>
            
            <ul>
              <li>
                <Link to="/UserInterface">UserInterface</Link>
              </li>
              
              <li>
                <Link to="/CreateNewProfile">CreateNewProfile</Link>
              </li>
              <li>
                <Link to="/SelectedTasks">Selected Tasks</Link>
              </li>
              <li>
                <Link to="/CurrentProfiles">CurrentProfiles</Link>
              </li>
              <li>
                <Link to="/IndividualProfile">IndividualProfile</Link>
              </li>
              <li>
                <Link to="/HistoryPage">HistoryPage</Link>
              </li>
              
            </ul>

            <hr />

            
            <Route path="/UserInterface" component={UserInterface} />
            <Route path="/CreateNewProfile" component={CreateNewProfile} />
            <Route path="/SelectedTasks" component={SelectedTasks} />
            <Route path="/CurrentProfiles" component={CurrentProfiles} />
            <Route path="/IndividualProfile" component={IndividualProfile} />
            <Route path="/HistoryPage" component={HistoryPage} />
          </div>
          <br></br>
          <section>
          <Footer />
          </section>
        </div>
        
      </Router>
  )}
}

export default connect()(App);
