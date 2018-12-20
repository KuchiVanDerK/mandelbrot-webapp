import React from 'react';
import ReactDOM from 'react-dom';
import PictureSizeInput from "./PictureSizeInput";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PictureSizeInput/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
