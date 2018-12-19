import React, {Component} from 'react';
import './App.css';
import Canvas from "./Canvas";
import {subscribeToPixel, subscribeToTimer} from './api';


class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            timestamp: 'no timestamp yet',
            pixel: {
                x: 0,
                y: 0
            }
        };

        subscribeToTimer((err, timestamp) => this.setState({
            timestamp
        }));


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
                    This is the timer value: {this.state.timestamp}
                </header>

                <main className="App-main">
                    <Canvas pixel={this.state.pixel}/>
                </main>

            </div>
        );
    }
}

export default App;
