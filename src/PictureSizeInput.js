import React from "react";
import TextField from "@material-ui/core/TextField";

class PictureSizeInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        const scale = this.props.scale;
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <TextField
                            id="standard-name"
                            label={scale}
                            className="picture-size-input"
                            value={value}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                    </div>
                </form>
            </div>

        );
    }
}

export default PictureSizeInput;
