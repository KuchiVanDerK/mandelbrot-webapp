import React, {Component} from 'react';
import './App.css';
import Canvas from "./Canvas";
import {subscribeToPixel} from './api';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pixel: {
                x: 0,
                y: 0
            }
        };

        subscribeToPixel((err, pixel) => {
            console.log(`Pixel.io: ${JSON.stringify(pixel)}`);
            return this.setState({
                pixel
            });
        });

    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Awesome Mandelbrot Webapp
                </header>

                <main className="App-main">
                    <Canvas pixel={this.state.pixel}/>
                </main>

            </div>
        );
    }
}

export default App;
