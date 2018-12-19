import React, {Component} from 'react';
import './App.css';
import Canvas from "./Canvas";
import {subscribeToPixel} from './api';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            width: 100,
            height: 100,
            pixel: {}
        };

        subscribeToPixel((err, pixel) => {
            console.log(`Pixel.io: ${JSON.stringify(pixel)}`);
            return this.setState({
                pixel
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
                    <Canvas pixel={this.state.pixel}
                            width={this.state.width}
                            height={this.state.height}/>
                </main>

            </div>
        );
    }
}

export default App;
