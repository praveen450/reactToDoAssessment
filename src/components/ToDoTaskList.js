import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneRoundedIcon from '@material-ui/icons/DoneOutlineTwoTone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as ToDoTaskActions from '../actions/toDoTaskActions';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import If from './common/If';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class ToDoTaskList extends Component {
    constructor(props, context) {
        super(props, context);
        this.DeleteToDoTask = this.DeleteToDoTask.bind(this);
        this.CompleteToDoTask = this.CompleteToDoTask.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadAllToDoTasksAction();
    }

    DeleteToDoTask(toDoTaskID) {
        this.props.actions.deleteToDoTaskAction(toDoTaskID);
    }

    CompleteToDoTask(toDoTaskID) {
        this.props.actions.completeTodoTaskAction(toDoTaskID);
    }

    render() {
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={8}>
                    <Paper>
                        <List>
                            {this.props.toDoTasks.map(value => (
                                <ListItem divider key={value} dense>
                                    <ListItemText primary={
                                        <div>
                                            <If test={value.completed}>
                                                <Link to={{ pathname: "/view/" + value.id }} style={{ fontSize: '25px', textDecoration: 'line-through' }} > {value.title}</Link>
                                            </If>
                                            <If test={!value.completed}>
                                                <Link to={{ pathname: "/view/" + value.id }} style={{ fontSize: '25px', textDecoration: 'none' }} > {value.title}</Link>
                                            </If>
                                        </div>} align="center" style={{ wordWrap: 'break-word'}}/>

                                    <div style={{ marginRight: '280px' }}>
                                        <If test={value.completed}>
                                            <Tooltip title="Complete">
                                                <IconButton aria-label="Complete" onClick={() => this.CompleteToDoTask(value.id)} style={{opacity: '0.5' }} disabled>
                                                    <DoneRoundedIcon style={{ color: 'green' }} />
                                                </IconButton>
                                            </Tooltip>
                                        </If>
                                        <If test={!value.completed}>
                                            <Tooltip title="Complete">
                                                <IconButton aria-label="Complete" onClick={() => this.CompleteToDoTask(value.id)}>
                                                    <DoneRoundedIcon style={{ color: 'green' }} />
                                                </IconButton>
                                            </Tooltip>
                                        </If>
                                        <Tooltip title="Delete">
                                            <IconButton aria-label="Delete" onClick={() => this.DeleteToDoTask(value.id)} style={{ marginLeft: '25px' }}>
                                                <DeleteIcon color="secondary" />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

ToDoTaskList.propTypes = {
    children: PropTypes.object,
    toDoTasks: PropTypes.array
}

function mapStateToProps(state, ownProps) {
    return {
        toDoTasks: state.toDoTasks
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(Object.assign({}, ToDoTaskActions), dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoTaskList);