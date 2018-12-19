import React, {Component} from 'react';

import './App.css';
import Canvas from "./Canvas";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Awesome Mandelbrot Webapp
                </header>

                <main className="App-main">
                    <Canvas/>
                </main>

            </div>
        );
    }
}

export default App;
