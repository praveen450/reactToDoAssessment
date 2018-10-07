import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import * as ToDoTaskActions from '../actions/toDoTaskActions';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DoneRoundedIcon from '@material-ui/icons/DoneOutlineTwoTone';
import If from './common/If';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './common/Header';

class ViewToDoTaskPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id: -1,
            title: '',
            description: '',
            completed: true,
            checkError: '1',
        };
        this.DeleteToDoTask = this.DeleteToDoTask.bind(this);
        this.CancelToDoTask = this.CancelToDoTask.bind(this);
        this.UpdateToDoTask = this.UpdateToDoTask.bind(this);
        this.CompleteToDoTask = this.CompleteToDoTask.bind(this);
    }

    componentDidMount() {
        let toDoTaskListID = this.props.match.params.toDoTaskID;
        this.props.actions.loadAllToDoTasksAction().then((response) => {
            this.props.toDoTasks.map(item => {
                if (item.id == toDoTaskListID) {
                    this.setState({
                        title: item.title,
                        description: item.description,
                        completed: item.completed,
                        id: item.id
                    });
                }
            });
        });
    }

    handleTitleChange = title => event => {
        this.setState({ checkErrorname: "1" });
        this.setState({
            [title]: event.target.value,
        });
    };
    handleDescriptionChange = description => event => {
        this.setState({
            [description]: event.target.value,
        });
    };

    CancelToDoTask() {
        document.location = '/';
    }

    CompleteToDoTask() {
        this.props.actions.completeTodoTaskAction(this.props.match.params.toDoTaskID).then((response) => {
            document.location = '/';
        });
    }

    DeleteToDoTask() {
        this.props.actions.deleteToDoTaskAction(this.props.match.params.toDoTaskID).then((response) => {
            document.location = '/';
        });
    }

    UpdateToDoTask() {
        if (this.state.title !== '') {
            let toDoTask = {
                "title": this.state.title,
                "description": this.state.description
            }
            this.props.actions.updateToDoTaskAction(this.props.match.params.toDoTaskID, toDoTask).then((response) => {
                document.location = '/';
            });
        }
        else {
            this.setState({ checkErrorname: "0" });
        }
    }


    render() {
        return (
            <div>
                <Header />
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={4}>
                        <Paper>
                            <div align="center">
                                <Link to={"/"}> {'<'} Back to ToDo Task</Link>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <TextField
                                            required
                                            id="title"
                                            label="To Do Task"
                                            value={this.state.title}
                                            onChange={this.handleTitleChange('title')}
                                            margin="normal"
                                            error={this.state.checkErrorname === "0"}
                                            helperText={this.state.checkErrorname === "0" ? 'Title should not be empty!' : ' '}
                                        />
                                        <If test={!this.state.completed}>
                                            <Tooltip title="Complete">
                                                <IconButton aria-label="Complete" onClick={this.CompleteToDoTask}>
                                                    <DoneRoundedIcon style={{ color: 'green' }} />
                                                </IconButton>
                                            </Tooltip>
                                        </If>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <TextField
                                            id="description"
                                            label="Description"
                                            multiline
                                            rows="3"
                                            defaultValue=""
                                            margin="normal"
                                            value={this.state.description}
                                            onChange={this.handleDescriptionChange('description')}
                                        />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <Button variant="contained" size="small" color="primary" onClick={this.UpdateToDoTask}>
                                            Save </Button> &nbsp;
                                        <Button variant='contained' size="small" onClick={this.CancelToDoTask}>
                                            Cancel </Button >&nbsp;
                                        <Button variant="contained" color="secondary" size="small" onClick={this.DeleteToDoTask} >
                                              Delete </Button>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

ViewToDoTaskPage.propTypes = {
    children: PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewToDoTaskPage);

