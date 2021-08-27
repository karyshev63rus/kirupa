import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IPAddressContainer from './xhr_IPAddressContainer';

let destination = document.querySelector('#container')

ReactDOM.render(
    <div>
        <IPAddressContainer/>
    </div>,
    destination
)