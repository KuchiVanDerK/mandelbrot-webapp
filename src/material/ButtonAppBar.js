import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ClientBar from "./ClientBar";
import SimpleModal from "./SimpleModal";

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
    const {classes} = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <SimpleModal />

                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Awesome Mandelbrot Webapp
                    </Typography>


                    <ClientBar/>


                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(ButtonAppBar);
