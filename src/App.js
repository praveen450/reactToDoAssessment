import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import ViewToDoTaskPage from './components/ViewToDoTaskPage';
import TasksPage from './components/TasksPage';

class App extends Component {
  render() {
    return (
      <div>
        <switch>
          <Route path="/view/:toDoTaskID" component={ViewToDoTaskPage} />
          <Route path="/" exact component={TasksPage} />
        </switch>
      </div>
    );
  }
}

export default App;
