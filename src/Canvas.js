import React, {Component} from 'react';
import './Canvas.css';

class Canvas extends Component {
    
    constructor() {
        super()
        this.state = {
            pixel: {}
        }
    }

    componentDidMount() {
        this.connection = new WebSocket('ws://localhost:8000/results/');

        this.connection.onmessage = event => {
            const pixel = JSON.parse(event.data)
            this.setState({pixel})
        }
    }

    componentWillUnmount() {
        this.connection.close()
    }

    render() {
        if (this.state.pixel.result) {

            let {x, y, r, g, b} = this.state.pixel.result;

            if (!x) x = 0;
            if (!y) y = 0;
            if (!r) r = 0;
            if (!g) g = 0;
            if (!b) b = 0;
            
            const ctx = this.refs.canvas.getContext('2d', {alpha: false});
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
            ctx.fillRect(x, y, 1, 1);
        }
        return (
            <div>
                <canvas ref="canvas"
                        className="Canvas"
                        width={this.props.width}
                        height={this.props.height}/>
            </div>
        );
    }
}

export default Canvas;