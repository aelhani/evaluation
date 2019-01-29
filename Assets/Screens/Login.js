import React from 'react';
import {
    StyleSheet, Text, View, Image, Alert,
    Dimensions, TouchableOpacity, TextInput
} from 'react-native';

import { connect } from 'react-redux'

import { mapDispatchToProps, mapStateToProps } from '../store/actions'

var ratio = Dimensions.get('window').width / 100

class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
        drawerLabel: 'Login',
        headerStyle: { backgroundColor: '#212121', display: 'none' },
        headerTitleStyle: { color: '#fff', fontSize: 16 }
    }
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pass: '',
            switch: false,
        }
    }

    handleLogin = () => {
        this.props.LOGIN(this.state.user, this.state.pass)
        // this.setState({ user: '', pass: '' })
        // this.props.navigation.navigate('Account')
    }

    resetPassword = () => {
        alert('Réinitialisation ...')
    }

    componentDidMount() {
        this.props.loggedin.state ?
            this.props.navigation.navigate('Account')
            :
            this.props.navigation.navigate('Login')
    }

    componentDidUpdate() {
        if (this.props.loggedin.state) {
            this.props.navigation.navigate('Account')
        }
        else {
            this.props.navigation.navigate('Login')
        }
    }

    loginForm() {
        return (
            <View style={styles.form}>
                <View style={{ flex: 1.5, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: ratio * 5 }} >
                        Bienvenue
                    </Text>
                </View>
                <View style={styles.inputview}>
                    <TextInput
                        style={{ flex: 4, marginLeft: ratio * 5 }}
                        onChangeText={(user) => {
                            user = user.toLowerCase()
                            this.setState({ user })
                        }}
                        value={this.state.user}
                        placeholder={'Identifiant'}
                        placeholderTextColor={'gray'}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
                <View style={styles.inputview}>
                    <TextInput
                        style={{ flex: 4, marginLeft: ratio * 5 }}
                        onChangeText={(pass) => {
                            this.setState({ pass })
                        }}
                        value={this.state.pass}
                        placeholder={'Mot de passe'}
                        secureTextEntry={true}
                        placeholderTextColor={'gray'}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
                <TouchableOpacity
                    style={{ flex: 1, justifyContent: 'center' }}
                    onPress={() => this.setState({ switch: true })}
                >
                    <Text style={[{ color: '#7A706E', fontSize: ratio * 3.5, marginRight: ratio * 5 }]}>
                        Mot de passe oublié ?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[{
                        flex: 1, backgroundColor: '#2296F3', borderRadius: 30
                    }, styles.just, styles.shadow]}
                    onPress={this.handleLogin}
                >
                    <Text style={[{ color: 'white', fontSize: ratio * 4.5 }, styles.just]}>
                        Se connecter
                    </Text>
                </TouchableOpacity>
                <View style={{ flex: 1.5 }} />
            </View>
        )
    }

    passwordForm() {
        return (
            <View style={styles.form}>
                <View style={{ flex: 1.5, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: ratio * 5 }} >
                        Réinitialiser le mot de passe
                    </Text>
                </View>
                <View style={styles.inputview}>
                    <TextInput
                        style={{ flex: 4, marginLeft: ratio * 5 }}
                        onChangeText={(user) => {
                            user = user.toLowerCase()
                            this.setState({ user })
                        }}
                        value={this.state.user}
                        placeholder={'Identifiant'}
                        placeholderTextColor={'gray'}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
                <View style={{ flex: .5 }} />
                <View style={{ flex: 1, flexDirection: 'row' }} >
                    <TouchableOpacity
                        style={[{ flex: 3, backgroundColor: 'beige', borderRadius: 30 }, styles.just, styles.shadow]}
                        onPress={() => this.setState({ switch: false })}
                    >
                        <Text style={[{ color: 'gray', fontSize: ratio * 4.5 }, styles.just]}>
                            Retour
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flex: .5 }} />
                    <TouchableOpacity
                        style={[{ flex: 3, backgroundColor: '#2296F3', borderRadius: 30 }, styles.just, styles.shadow]}
                        onPress={this.resetPassword}
                    >
                        <Text style={[{ color: 'white', fontSize: ratio * 4.5 }, styles.just]}>
                            Réinitialiser
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 3, marginBottom: ratio * 3 }} />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.global}>

                <View style={[{ height: '100%', width: '100%', position: 'absolute' }, styles.just]}>
                    <Image
                        style={{ height: '100%', width: '100%' }}
                        source={require('../Images/nature.jpg')}
                        resizeMode='cover'
                    />
                </View>
                <View style={{ flex: 3 }} />
                {!this.state.switch ? this.loginForm() : this.passwordForm()}
                <View style={{ flex: 2 }} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    global: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
    },
    just: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        flex: 7,
        marginRight: '15%', marginLeft: '15%',
        flexDirection: 'column'
    },
    inputview: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: ratio * 3,
        borderRadius: 30
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6.3,
        elevation: 10,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)