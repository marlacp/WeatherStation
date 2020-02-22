import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import  Home  from './Home';
import  table  from './table';
import Alltable  from './Alltable';
import Sidebar from './components/Sidebar';
import Chart from './Chart';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/table" component={table} />
          <Route path="/Chart" component={Chart} />
          <Route component={Alltable} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
