import React, { Component } from 'react';
import {
    Text,
    View,
    VrButton
} from 'react-vr';

import ColorSwatch from './ColorSwatch';

import {
    secondaryColors
} from '../config/colors';

export default class ColorPickerButton extends Component {
    constructor() {
        super();
        this.state = {
            pickerOpen: false
        }
    }

    render() {

        const {
            currentColor,
            updateColor,
            colorOptions,
            angularPosition
        } = this.props;

        return (
            <View style={{
                position: 'absolute',
                layoutOrigin: [0.5, 0.5],
                width: 1000,
                height: 100,
                flex: 1,
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                transform: [
                    {rotateX: angularPosition[0]},
                    {rotateY: angularPosition[1]},
                    {rotateZ: angularPosition[2]},
                    {translate: [0, 0, -800]}
                ]
            }}>
                <VrButton style={{
                        backgroundColor: currentColor,
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        borderColor: 'rgba(255,255,255,0.8)',
                        borderWidth: 3,
                        marginBottom: 10
                    }} onClick={() => this.setState({pickerOpen: !this.state.pickerOpen})}>
                </VrButton>
                {
                    this.state.pickerOpen
                    ?
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "#212844dd",
                        borderRadius: 10,
                    }}>
                        {colorOptions.map( color => (
                            <ColorSwatch key={color} color={color} handleClick={() => updateColor(color)}/>
                        ))}
                    </View>
                    :
                    null
                }
            </View>
        );
    }
}
