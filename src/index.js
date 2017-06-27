import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';

let RoomTypeList = ['standard', 'single', 'double', 'twin', 'triple', 'quarter', 'duplex'];


ReactDOM.render(
    <App roomTypeList={RoomTypeList}/>,
    document.getElementById('root')
);


