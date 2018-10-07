import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './../App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import NewToDoTaskPage from './NewToDoTaskPage';
import * as ToDoTaskActions from '../actions/toDoTaskActions';
import ToDoTaskList from './ToDoTaskList';
import Header from './common/Header';

class TasksPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className="App">
                <Header/>
                <NewToDoTaskPage />
                <div>
                    < ToDoTaskList />
                </div>
            </div>
        );
    }
}

TasksPage.propTypes = {
    toDoTasks: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        toDoTasks: state.toDoTasks
    };
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(Object.assign({}, ToDoTaskActions), dispatch) };
}
export default connect(mapStateToProps)(TasksPage);
