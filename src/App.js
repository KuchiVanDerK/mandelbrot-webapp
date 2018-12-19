import React, {Component} from 'react';
import './App.css';
import Canvas from "./Canvas";
import { subscribeToTimer } from './api';


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

    }

    handleClick(e) {
        e.preventDefault();


        const x = this.state.pixel.x;
        // const y = this.state.y;

        const newX = x+1;

        this.setState({
                pixel: {
                    x: newX,
                    y: 100,
                    color: {r: 255, g: 165, b: 0, a: 1,}
                }
            }
        )

    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Awesome Mandelbrot Webapp
                    This is the timer value: {this.state.timestamp}
                </header>

                <main className="App-main">

                    <button onClick={this.handleClick.bind(this)}>
                        Activate Lasers
                    </button>

                    <Canvas pixel={this.state.pixel}/>
                </main>

            </div>
        );
    }
}

export default App;
