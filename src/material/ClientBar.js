import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from "@material-ui/core/Badge";
import ComputerIcon from '@material-ui/icons/Computer';
import Drawer from "@material-ui/core/Drawer";
import FolderList from "./FolderList";


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
    }
});


class ClientBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showClientList: false};
    }

    openDrawer = () => {
        this.setState({showClientList: true});
    };

    closeDrawer = () => {
        this.setState({showClientList: false});
    };

    render() {
        const {classes} = this.props;

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
                        <FolderList/>

                    </div>
                </Drawer>

            </div>
        );
    }


}

export default withStyles(styles)(ClientBar);
