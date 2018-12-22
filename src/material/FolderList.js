import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import moment from "moment";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

function FolderList(props) {
    const {classes} = props;


    function toTime(date){
        return moment(date).fromNow();
    }

    const clients = [
        {name: 'C 64', cores: 4, timestamp: new Date().toISOString()},
        {name: 'Casio FX-3650PII', cores: 1, timestamp: new Date().toISOString()},
        {name: 'IBM Summit', cores: 2397824, timestamp: new Date().toISOString()},
    ];

    return (
        <List className={classes.root}>
            {clients.map((client) => (
                <ListItem key={client.name}>
                    <ListItemText primary={client.name} secondary={`${toTime(client.timestamp)} | cores: ${client.cores}`}/>
                </ListItem>
            ))}
        </List>
    );
}

FolderList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);
