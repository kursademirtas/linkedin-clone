import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Feed from './pages/feed'
import Login from "./pages/login";
import Homepage from  './pages/homepage'
import { AuthProvider } from "./contexts/AuthContext";
import { JobDataProvider } from './contexts/JobsDataContext';
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./pages/signup/Signup";
import Jobs from './pages/jobs'
import { PostDataProvider } from "./contexts/PostDataContext";


function App() {

  return (
    
      <div className="app">
      <Router>
        <JobDataProvider>
          <AuthProvider >
            <PostDataProvider>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/signup" component={Signup} />
                <Route path="/login"  component={Login} />
                <Route path="/jobs" component={Jobs} />
                <PrivateRoute path="/feed" component={Feed} />
            </Switch>
            </PostDataProvider>
            </AuthProvider>
          </JobDataProvider>
      </Router>
    
      </div>
  );
}


export default App;
