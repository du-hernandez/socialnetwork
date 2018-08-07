import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import LoginForm from './LoginForm'
import Header from './Header'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header title='INICIAR SESIÓN' />
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        flex:1,
        //alignItems: 'center',
        //flexGrow: 1, // Lleva el coponente al centro verticalmente
        justifyContent: 'center'
    },
    formContainer: {
        flex: 1
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.8
    }
})