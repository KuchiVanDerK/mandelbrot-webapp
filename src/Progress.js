import React, {Component} from 'react';
import './Progress.css';
import LinearProgress from "@material-ui/core/LinearProgress";

class Progress extends Component {

    render() {

        const current = this.props.current;
        const max = this.props.max;

        const percentage = (current / max * 100).toFixed(1);

        const normalised = current * 100 / max;


        return (
            <div className="Progress">
                <ul>
                    <li>{current} / {max} Pixel calculated</li>
                    <li>{percentage}% calculated</li>
                </ul>
                <LinearProgress variant="determinate" value={normalised}/>
            </div>
        );
    }
}

export default Progress;
