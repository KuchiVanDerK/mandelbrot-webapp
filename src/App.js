import React, {Component} from 'react';
import './App.css';
import Canvas from "./Canvas";
import {subscribeToClient, subscribeToPixel} from './api';
import Progress from "./Progress";
import Clients from "./Clients";


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

        subscribeToClient((err, client) => {
            const clients = this.state.clients.slice().concat([client]);
            this.setState({clients});
        });

        subscribeToPixel((err, pixel) => {
            return this.setState({
                pixel,
                pixelCount: this.state.pixelCount + 1
            });
        }, this.state.width, this.state.height);

    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Awesome Mandelbrot Webapp
                </header>
                <main className="App-main">

                    <Clients clients={this.state.clients}/>

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
