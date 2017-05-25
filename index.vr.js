import React, { Component } from 'react';
import {
    Animated,
    AppRegistry,
    asset,
    Image,
    Pano,
    Text,
    View,
    VrButton,
    VrHeadModel
} from 'react-vr';

const ColorSwatch = ({color, handleClick}) => (
    <VrButton style={{flex: 1, width: 0.14}} onClick={handleClick}>
        <View>
            <View style={{height: 0.2, width:0.2, backgroundColor: color, borderColor: "rgba(0,0,0,0.2)", borderWidth: 0.01 }} />
        </View>
    </VrButton>
);

const primaryColors = [
    "rgba(238,238,232,0.99)",
    "rgba(060,059,059,0.99)",
    "rgba(193,061,059,0.99)",
    "rgba(000,139,191,0.99)",
    "rgba(208,165,133,0.99)",
    "rgba(244,213,171,0.99)",
    "rgba(196,203,179,0.99)"
];
const secondaryColors = [
    "rgba(108,123,129,0.99)",
    "rgba(172,161,144,0.99)",
    "rgba(237,235,231,0.99)",
    "rgba(238,238,232,0.99)",
    "rgba(192,139,110,0.99)",
    "rgba(248,237,217,0.99)",
    "rgba(243,241,236,0.99)"
];
const accentColors = [
    "rgba(108,123,129,0.99)",
    "rgba(240,241,236,0.99)",
    "rgba(162,162,161,0.99)",
    "rgba(191,191,189,0.99)",
    "rgba(247,248,244,0.99)",
    "rgba(248,237,217,0.99)",
    "rgba(250,241,227,0.99)"
];


export default class VokalInteriorDecorator extends Component {
    constructor() {
        super();
        this.state = {
            primaryColor: "#ffffff01",
            secondaryColor: "#ffffff01",
            accentColor: "#ffffff01",
            headMatrix: VrHeadModel.headMatrix
        }
    }

    render() {

        // window.setTimeout(
        //     () => this.setState( { headMatrix: VrHeadModel.headMatrix } ),
        //     1000/60
        // );

        return (
            <View>
                <Pano
                    source={asset('chillzone.jpg')}
                />
                <Pano
                    style={{
                        tintColor: this.state.primaryColor
                    }}
                    source={asset('chillzone-primary.gif')}
                />
                <Pano
                    style={{
                        tintColor: this.state.secondaryColor
                    }}
                    source={asset('chillzone-secondary.gif')}
                />
                <View
                    style={{
                        backgroundColor: '#212844dd',
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        layoutOrigin: [0.5, 0.5],
                        padding: 0.16,
                        transform: [
                            //{matrix: this.state.headMatrix},
                            {rotateY: 45},
                            {translate: [0, 0.75, -3.5]}
                        ],
                    }}
                >
                    <View>
                        <View>
                            <Image source={{uri: '../static_assets/logo-white.png'}}
                                       style={{
                                           width: 0.5,
                                           height: 0.24,
                                           marginBottom: 0.12
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
                                marginTop: 0.16,
                                marginBottom: 0.16
                            }}>
                            Change the colors in the room around you by making selections from the palette below.
                        </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        }}>
                        <Text style={{flex: 1, fontSize: 0.14, width: 0.7, textAlign:'right', marginRight: 0.04}}>Primary:</Text>
                        {primaryColors.map( color => (
                            <ColorSwatch color={color} handleClick={() => this.setState({primaryColor: color})}/>
                        ))}
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 0.1
                        }}>
                        <Text style={{flex: 1, fontSize: 0.14, width: 0.7, textAlign:'right', marginRight: 0.04}}>Secondary:</Text>
                        {secondaryColors.map( color => (
                            <ColorSwatch color={color} handleClick={() => this.setState({secondaryColor: color})}/>
                        ))}
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 0.1
                        }}>
                        <Text style={{flex: 1, fontSize: 0.14, width: 0.7, textAlign:'right', marginRight: 0.04}}>Accent:</Text>
                        {accentColors.map( color => (
                            <ColorSwatch color={color} handleClick={() => this.setState({accentColor: color})}/>
                        ))}
                    </View>
                </View>
            </View>
        );
    }
};

AppRegistry.registerComponent('VokalInteriorDecorator', () => VokalInteriorDecorator);
