import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/LandingPage/Home';
import SignUp from './components/pages/SignUp/SignUp';
import SignIn from './components/pages/SignIn/SignIn';
import Dashboard from './components/pages/Dashboard/Dashboard';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
        <Route path= '/' exact component={Home}/>
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>

    
  );
}

export default App;
