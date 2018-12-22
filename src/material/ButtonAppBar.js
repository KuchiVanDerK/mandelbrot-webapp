import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from "@material-ui/core/Badge";
import ComputerIcon from '@material-ui/icons/Computer';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <Button color="inherit">Start</Button>


                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        Test
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Awesome Mandelbrot Webapp
                    </Typography>

                    <IconButton color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <ComputerIcon />
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(ButtonAppBar);
