import React from "react";

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
                    <div className= "form-group">
                        <input className="form-control container text-center" id="focusedInputed" type="text" value={value}
                               onChange={this.handleChange} />
                        <label> {scale}</label>
                    </div>
                </form>
            </div>

        );
    }
}

export default PictureSizeInput;
