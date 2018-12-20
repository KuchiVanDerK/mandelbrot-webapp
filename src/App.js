import React, {Component} from 'react';
import './App.css';
import Canvas from "./Canvas";
import {subscribeToClient, subscribeToPixel} from './api';
import Progress from "./Progress";
import Clients from "./Clients";
import PictureSizeInput from "./PictureSizeInput";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            width: 100,
            height: 100,
            pixel: {},
            pixelCount: 0,
            clients: []
        };

        this.handleWidthChange = this.handleWidthChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);

        subscribeToClient((err, client) => {
            const clients = this.state.clients.slice().concat([client]);
            this.setState({clients});
        });

        // subscribeToPixel((err, pixel) => {
        //     return this.setState({
        //         pixel,
        //         pixelCount: this.state.pixelCount + 1
        //     });
        // }, this.state.width, this.state.height);

    }


    handleWidthChange(value) {
        this.setState({width: value});
    }

    handleHeightChange(value) {
        this.setState({height: value});
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Awesome Mandelbrot Webapp
                </header>
                <main className="App-main">

                    <Clients clients={this.state.clients}/>

                    <div className="text-center container-fluid">
                        <PictureSizeInput
                            scale="width"
                            value={this.state.width}
                            onChange={this.handleWidthChange} />
                        <PictureSizeInput
                            scale="height"
                            value={this.state.height}
                            onChange={this.handleHeightChange} />
                    </div>

                    <Progress current={this.state.pixelCount}
                              max={this.state.width * this.state.height}/>

                    <Canvas pixel={this.state.pixel}
                            width={this.state.width}
                            height={this.state.height}/>

                </main>

            </div>
        );
    }
}

export default App;
