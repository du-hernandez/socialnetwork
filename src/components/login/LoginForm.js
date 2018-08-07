import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements'
// KeyboardAvoidingView

export default class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            UserName: '',
            UserPass: '',
            check: false
        }
        this.login = this.login.bind(this)
    }

    async login() {
        let data = {
            correo: this.state.UserName,
            contrasena: this.state.UserPass
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.ViewCombo}>
                    <View style={styles.iconos}><Icon name='user' color='#576574' size={11} style={{ alignItems: 'center' }} /></View>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid='rgba(0,0,0,0.3)'
                            //underlineColorAndroid="transparent"
                            placeholder='Usuario o correo'
                            placeholderTextColor='rgba(0,0,0,0.7)'
                            returnKeyType='next'
                            keyboardType='email-address'
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChange={(text) => this.setState({ UserName: text.nativeEvent.text })}
                            value={this.state.UserName}
                        />
                    </View>
                    <View style={styles.ViewCombo}>
                        <View style={styles.iconos}><Icon name='key' color='#576574' size={11} style={{ alignItems: 'center' }} /></View>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid='rgba(0,0,0,0.3)'
                            //underlineColorAndroid="transparent"
                            placeholder='Contraseña'
                            secureTextEntry
                            placeholderTextColor='rgba(0,0,0,0.7)'
                            returnKeyType='go'
                            ref={(input) => this.passwordInput = input}
                            autoCapitalize='none'
                            onChange={(text) => this.setState({ UserPass: text.nativeEvent.text })}
                            value={this.state.UserPass}
                        />
                    </View>
                </View>
                <View style={{paddingTop:25}}>
                    <Button
                        onPress={() => this.login()}
                        title="Iniciar sesión"
                        color="#27ae60"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent: 'space-between'
    },
    input: {
        flex: 1,
        //paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#000',
    },
    ViewCombo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconos: {
        backgroundColor: '#c8d6e5',
        padding: 10
    }
})