import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from "@material-ui/core/Badge";
import ComputerIcon from '@material-ui/icons/Computer';
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import green from "@material-ui/core/colors/green";


const styles = theme => ({
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
    // drawer: {
    //     backgroundColor: green[300],
    //     paddingTop: theme.spacing.unit * 20
    // }
});


class ClientBar extends React.Component {


    constructor(props) {
        super(props);

        this.state = {showClientList: true}; // TODO false true for testing
    }

    openDrawer = () => {
        this.setState({showClientList: true});
    };


    closeDrawer = () => {
        this.setState({showClientList: false});
    };


    render() {
        const {classes} = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (

            <div>
                <IconButton color="inherit"
                            onClick={this.openDrawer}
                            onMouseEnter={this.openDrawer}>
                    <Badge badgeContent={17} color="secondary">
                        <ComputerIcon/>
                    </Badge>
                </IconButton>

                <Drawer className={classes.drawer}
                        anchor="right"
                        open={this.state.showClientList}
                        onClose={this.closeDrawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.closeDrawer}
                        onKeyDown={this.closeDrawer}
                    >
                        {sideList}
                    </div>
                </Drawer>

            </div>
        );
    }


}

export default withStyles(styles)(ClientBar);
