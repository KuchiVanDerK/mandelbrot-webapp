import React, {Component} from 'react';
import Canvas from "./Canvas";
import {subscribeToClient, subscribeToPixel} from './api';
import Progress from "./Progress";
import Clients from "./Clients";
import PictureSize from "./PictureSize";
import {withStyles} from '@material-ui/core/styles';
import withRoot from "./withRoot";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonAppBar from "./material/ButtonAppBar";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            width: 100,
            height: 100,
            pixel: {},
            pixelCount: 0,
            clients: [],
            inProgress: false
        };

        this.handleWidthChange = this.handleWidthChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        subscribeToClient((err, client) => {
            const clients = this.state.clients.slice().concat([client]);
            this.setState({clients});
        });

    }


    handleWidthChange(value) {
        this.setState({width: value});
    }

    handleHeightChange(value) {
        this.setState({height: value});
    }

    handleClick(e) {
        e.preventDefault();

        this.setState({inProgress: true});

        subscribeToPixel((err, pixel) => {
            return this.setState({
                pixel,
                pixelCount: this.state.pixelCount + 1
            });
        }, this.state.width, this.state.height);

    }

    render() {

        const inProgress = this.state.inProgress;
        const notEnoughClients = this.state.clients.length < 2;

        const disableButton = inProgress || notEnoughClients;

        const buttonText = inProgress ? 'Lasers already running' :
            notEnoughClients ? 'At least two clients required to start Lasers' :
                'Activate Lasers';


        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <ButtonAppBar />
                        <Paper className={classes.paper}>Header</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Image</Paper>
                    </Grid>
                </Grid>
            </div>
        );


        // return (
        //     <div className="App">
        //         <header className="App-header">
        //             Awesome Mandelbrot Webapp
        //         </header>
        //         <main className="App-main">
        //
        //             <Clients clients={this.state.clients}/>
        //
        //             <PictureSize width={this.state.width} onWidthChange={this.handleWidthChange}
        //                          height={this.state.height}
        //                          onHeightChange={this.handleHeightChange}/>
        //
        //             <button onClick={this.handleClick} disabled={disableButton}>
        //                 {buttonText}
        //             </button>
        //             <br/>
        //             {inProgress &&
        //             <Progress current={this.state.pixelCount}
        //                       max={this.state.width * this.state.height}/>
        //             }
        //
        //             <Canvas pixel={this.state.pixel}
        //                     width={this.state.width}
        //                     height={this.state.height}/>
        //
        //         </main>
        //
        //     </div>
        // );
    }
}

export default withRoot(withStyles(styles)(App));