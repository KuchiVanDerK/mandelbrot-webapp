import React, {Component} from 'react';
import './Canvas.css';

class Canvas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            width: 300,
            height: 300
        }

    }

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, this.state.width, this.state.height);
    }

    render() {
        return (
            <canvas ref="canvas"
                    className="Canvas"
                    width={this.state.width}
                    height={this.state.height}/>
        );
    }
}

export default Canvas;
