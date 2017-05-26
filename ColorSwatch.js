import React from 'react';
import {
    View,
    VrButton
} from 'react-vr';

export default ({color, handleClick}) => (
    <VrButton style={{flex: 1, width: 0.14}} onClick={handleClick}>
        <View onClick={handleClick}>
            <View onClick={handleClick} style={{height: 0.2, width:0.2, backgroundColor: color, borderColor: "rgba(0,0,0,0.2)", borderWidth: 0.01 }} />
        </View>
    </VrButton>
);
