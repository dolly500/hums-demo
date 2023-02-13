import React from 'react';
import Sidebar from '../../Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from '../../Search/search';

const Dashboard = () => {
    return (
        <Router>
        <div className="App" style={{display: 'flex'}}>
            <Sidebar />
            <Search />
            
        </div>
      </Router>
  
    );
}

export default Dashboard;
