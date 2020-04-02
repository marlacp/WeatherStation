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
import  ChartTable from './Chart-Table';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />


        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/table" component={table} />
          {/* <Route path="/Chart" component={Chart} /> */}
          <Route path="/Chart-table/:hour" component={ChartTable} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
