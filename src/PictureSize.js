import React, {Component} from "react";
import PictureSizeInput from "./PictureSizeInput";

class PictureSize extends Component {
    render() {
        return <div className="text-center container-fluid">
            <PictureSizeInput
                scale="width"
                value={this.props.width}
                onChange={this.props.onWidthChange}/>
            <PictureSizeInput
                scale="height"
                value={this.props.height}
                onChange={this.props.onHeightChange}/>
            Pixels to calculate: {this.props.width * this.props.height}
        </div>;
    }
}

export default PictureSize;