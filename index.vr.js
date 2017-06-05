import React, { Component } from 'react';
import {
    Animated,
    AppRegistry,
    asset,
    Image,
    Pano,
    Scene,
    Text,
    View,
    VrButton,
    VrHeadModel
} from 'react-vr';

import ColorPickerButton from './components/ColorPickerButton';
import Instructions from './components/Instructions';

import {
    primaryColors,
    secondaryColors,
    accentColors
} from './config/colors';

export default class VokalInteriorDecorator extends Component {
    constructor() {
        super();
        this.state = {
            primaryColor: "rgba(238,238,232,0.99)",
            secondaryColor: "#ffffff01",
            accentColor: "#ffffff01"
        }
    }

    render() {
        // Was using this to update the follow HUD position
        // window.setTimeout(
        //     () => this.setState( { headMatrix: VrHeadModel.headMatrix } ),
        //     1000/60
        // );

        return (
            <View>
                <Scene style={{transform: [
                    {translate: [0, 0, 0]}
                ]}}/>
                <Pano
                    style={{transform: [{translate: [0, 0, 0]}]}}
                    source={asset('chillzone.jpg')}
                />
                <Pano
                    style={{
                        tintColor: this.state.primaryColor,
                        transform: [{translate: [0, 0, 0]}]
                    }}
                    source={asset('chillzone-primary.gif')}
                />
                <Pano
                    style={{
                        tintColor: this.state.secondaryColor,
                        transform: [{translate: [0, 0, 0]}]
                    }}
                    source={asset('chillzone-secondary.gif')}
                />
                <Instructions />
                <ColorPickerButton
                    currentColor={this.state.primaryColor}
                    updateColor={color => this.setState({primaryColor: color})}
                    angularPosition={[0, -55, 0]}
                    colorOptions={primaryColors}/>
                <ColorPickerButton
                    currentColor={this.state.secondaryColor}
                    updateColor={color => this.setState({secondaryColor: color})}
                    angularPosition={[0, 10, 0]}
                    colorOptions={secondaryColors}/>
            </View>
        );
    }
};

AppRegistry.registerComponent('VokalInteriorDecorator', () => VokalInteriorDecorator);
