import React from 'react';
import {
    View,
    VrButton
} from 'react-vr';

const buttonStyle = {
    height: 40,
    width: 40,
    borderRadius: 20,
    margin: 15
}

export default ({color, handleClick}) => (
    <VrButton style={{ ...buttonStyle, backgroundColor: color}} onClick={handleClick} />
);
