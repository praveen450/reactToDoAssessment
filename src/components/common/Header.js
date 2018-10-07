import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="headline" color="inherit">
                            TO - DO Task
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;