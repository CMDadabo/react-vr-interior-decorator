import React from 'react';

import {
    View,
    Image,
    Text
} from 'react-vr';

export default () => (
    <View style={{
        backgroundColor: "#212844dd",
        transform:[{translate:[1, 2, -5]}],
        flexDirection: 'column',
        width: 3,
        padding: 0.1,
        layoutOrigin: [0.5, 0.5]
    }}>
        <View>
            <Image source={{uri: '../static_assets/logo-white.png'}}
                       style={{
                           width: 0.5,
                           height: 0.24
                       }} />
            <Text
                style={{
                    fontSize: 0.24,
                    fontWeight: 'bold'
                }}
            >Interior Decorator</Text>
        </View>
        <Text style={{
                opacity: 0.9,
                width: 2.5,
                fontSize: 0.14,
                marginTop: 0.1,
                marginBottom: 0.1
            }}>
            Change the color of a surface in the room around you by interacting with one of the colored circles.
        </Text>
    </View>
);
