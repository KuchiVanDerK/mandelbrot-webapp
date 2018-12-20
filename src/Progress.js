import React, {Component} from 'react';
import './Progress.css';

class Progress extends Component {

    render() {

        const current = this.props.current;
        const max = this.props.max;

        const percentage = (current / max * 100).toFixed(1);

        return (
            <div>
                <ul>
                    <li>{current} / {max} Pixel calculated</li>
                    <li>{percentage}% calculated</li>
                </ul>
                <ProgressBar percentage={percentage} />
            </div>
        );
    }
}

export default Progress;


const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Filler percentage={props.percentage} />
        </div>
    )
};

const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
};