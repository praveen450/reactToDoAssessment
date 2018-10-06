import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as ToDoTaskActions from '../actions/toDoTaskActions';

class NewToDoTaskPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            taskName: '',
            checkError: '1'
        };
        this.AddToDoTask = this.AddToDoTask.bind(this);
    }
    AddToDoTask() {
        if (this.state.taskName !== '') {
            let toDoTask = {
                "title": this.state.taskName
            }
            let savePromise = this.props.actions.createNewToDoTaskAction(toDoTask);
            savePromise.then((response) => {
                if (this.props.toDoTasks.length > 0) {

                }
                this.setState({ taskName: '', description: '' });
            });

        }
        else {
            this.setState({ checkErrorname: "0" });
        }

        this.setState({ name: '' });
    }
    handleTaskChange = taskName => event => {
        this.setState({ checkErrorname: "1" });
        this.setState({
            [taskName]: event.target.value,
        });
    };

    render() {
        return (
            <div>

                <div>
                    <TextField
                        required
                        id="taskName"
                        label="TO-DO Task"
                        margin="normal"
                        value={this.state.taskName}
                        onChange={this.handleTaskChange('taskName')}
                        error={this.state.checkErrorname === "0"}
                        helperText={this.state.checkErrorname === "0" ? 'Title should not be empty!' : ' '}
                    />
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={this.AddToDoTask}>
                        Add To-Do Task
                </Button>
                </div>

            </div>
        );
    }
}

NewToDoTaskPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoTaskPage);