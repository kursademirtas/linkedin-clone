import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//import Header from "./components/Header";
import Feed from './pages/feed'
import Login from "./pages/login";
import Homepage from  './pages/homepage'
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {


  return (
    
      <>
      <Router>
        <AuthProvider >
          <Switch>
             <Route path="/" exact component={Homepage} />
             <Route path="/login"  component={Login} />
             <PrivateRoute path="/feed" component={Feed} />
          </Switch>
          </AuthProvider>
      </Router>
    
      </>
  );
}

export default App;
