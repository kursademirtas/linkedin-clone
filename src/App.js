import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "./pages/feed";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
import { AuthProvider } from "./contexts/AuthContext";
import { JobDataProvider } from "./contexts/JobsDataContext";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./pages/signup/Signup";
import Jobs from "./pages/jobs";
import { PostDataProvider } from "./contexts/PostDataContext";
import LearningPage from "./pages/learning";
import PeoplePage from "./pages/people";
import { PeopleDataProvider } from "./contexts/PeopleDataContext";

function App() {
  return (
    <div className="app">
      <Router>
        <JobDataProvider>
          <AuthProvider>
            <PostDataProvider>
              <PeopleDataProvider>
                <Switch>
                  <Route path="/" exact component={Homepage} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/jobs" component={Jobs} />
                  <Route path="/learning" component={LearningPage} />
                  <Route path="/people" component={PeoplePage} />
                  <PrivateRoute path="/feed" component={Feed} />
                </Switch>
              </PeopleDataProvider>
            </PostDataProvider>
          </AuthProvider>
        </JobDataProvider>
      </Router>
    </div>
  );
}

export default App;
