import React, {Component} from 'react';
import './Canvas.css';

class Canvas extends Component {
    
    constructor() {
        super()
        this.pixelCount = 0
    }

    componentDidMount() {
        this.connection = new WebSocket('ws://localhost:8000/results/');

        this.connection.onmessage = event => {
            this.drawPixel(event.data)
        }

        this.ctx = this.refs.canvas.getContext('2d', {alpha: false});
        this.imageData = this.ctx.getImageData(0, 0, this.props.width, this.props.height)
    }

    componentWillUnmount() {
        this.connection.close()
    }

    drawPixel(data) {
        const pixel = JSON.parse(data)
            
        if (!pixel.result) {
            return
        }
        
        const {
            index = 0, 
            r = 0, 
            g = 0, 
            b = 0
        } = pixel.result;

        this.imageData.data[index * 4   ] = r
        this.imageData.data[index * 4 +1] = g
        this.imageData.data[index * 4 +2] = b

        this.pixelCount++

        // draw line by line
        if (this.pixelCount % this.props.width === 0) {
            this.ctx.putImageData(this.imageData, 0, 0);
        }
    }

    render() {
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