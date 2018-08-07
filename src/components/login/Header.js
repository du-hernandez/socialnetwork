import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Fonts } from '../../utils/Fonts'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={
                    {
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        flex: 1,

                    }
                }>
                    <View>
                        <Text style={
                            {
                                color: '#10ac84',
                                fontWeight: '300',
                                fontSize: 15,
                                fontFamily: Fonts.PT_Sans_Caption.PT_SansCaptionWebBold
                            }
                        }>
                            {this.props.title}
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name='facebook' color='blue' size={35} />
                        <Icon name='google' color='#eb4d4b' size={35} />
                        <Icon name='instagram' color='#8e44ad' size={35} />
                        <Icon name='twitter' color='#0abde3' size={35} />
                    </View>
                    <Text style={
                        {
                            fontSize: 20,
                            color: '#10ac84',
                            fontFamily: Fonts.PT_Sans_Caption.PT_SansCaptionWebBold
                        }
                    }>
                        o
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //backgroundColor: '#2ecc71',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    alternatives: {

    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        borderBottomColor: 'rgba(0,0,0,0.4)',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})