import React from 'react';
import ReactDOM from 'react-dom';
import PictureSize from "./PictureSize";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PictureSize/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
