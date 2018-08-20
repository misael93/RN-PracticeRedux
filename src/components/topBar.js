import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

export default class TopBar extends Component {

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='#00529F'
                    barStyle='light-content'
                />
            </View>
        );
    }
}