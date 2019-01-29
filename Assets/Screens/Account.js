import React from 'react';
import {
    StyleSheet, Text, View, Image, Linking,
    Dimensions, TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'

import { mapDispatchToProps, mapStateToProps } from '../store/actions'

var ratio = Dimensions.get('window').width / 100

class Account extends React.Component {
    static navigationOptions = {
        title: 'Account',
        drawerLabel: '',
        headerStyle: { backgroundColor: '#212121', display: 'none' },
        headerTitleStyle: { color: '#fff', fontSize: 16 }
    }

    constructor(props) {
        super(props)
        this.state = {
            name: null,
            image: null,
            phone: null,
            email: null
        }
    }

    getProfil() {
        fetch('https://randomuser.me/api/')
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Request failed.');
            })
            .then(data => {
                this.setState({
                    name: data.results[0].name.first + ' ' + data.results[0].name.last,
                    image: data.results[0].picture.large,
                    phone: data.results[0].phone,
                    email: data.results[0].email
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getProfil()
    }

    render() {

        return (
            <View style={styles.global}>
                <View style={[styles.just, { flex: 1 }]} >
                    <Text>
                        {'Bonjour ' + this.props.loggedin.data}
                    </Text>
                </View>
                <View style={[{ height: 5, width: ratio * 20, marginLeft: ratio * 40, marginRight: ratio * 40, borderTopColor: 'gray', borderTopWidth: 1 }]} />

                <View style={[styles.just, { flex: 2 }]} >
                    <Image
                        style={{ height: ratio * 40, width: ratio * 40, borderRadius: 50 }}
                        source={{ uri: this.state.image }}
                        resizeMode="contain"
                    />
                </View>
                <View style={[styles.just, { flex: 1 }]} >
                    <Text style={{ fontSize: ratio * 4, fontWeight: 'bold' }}>
                        {this.state.name}
                    </Text>
                    <Text style={{ fontSize: ratio * 4 }}>
                        {this.state.phone}
                    </Text>
                    <Text style={{ fontSize: ratio * 3 }}>
                        {this.state.email}
                    </Text>
                </View>
                <View style={{ flex: .5 }} />
                <View style={[{ width: '100%', height: ratio * 30, alignSelf: 'flex-end', flexDirection: 'row' }]} >
                    <TouchableOpacity
                        style={[styles.just, { margin: ratio * 5, width: ratio * 20, height: ratio * 20, borderRadius: 50 }]}
                        onPress={() => { this.props.LOGOUT() }}
                    >
                        <Image
                            style={{ height: ratio * 20, width: ratio * 20, borderRadius: 50 }}
                            source={require('../Images/logout.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 3 }} />
                    <TouchableOpacity
                        style={[styles.just, { margin: ratio * 5, width: ratio * 20, height: ratio * 20, borderRadius: 50 }]}
                        onPress={() => { this.state.phone ? Linking.openURL(`tel:${this.state.phone}`) : null }}
                    >
                        <Image
                            style={{ height: ratio * 20, width: ratio * 20, borderRadius: 50 }}
                            source={require('../Images/call.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)

const styles = StyleSheet.create({
    global: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    just: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },
    magrins: {
        marginTop: ratio * 3,
        marginLeft: ratio * 3,
        marginRight: ratio * 3,
    }
});
