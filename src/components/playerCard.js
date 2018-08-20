import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import mainStyles from '../styles/mainStyles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class PlayerCard extends Component {

    editScreen = () => {
        this.props.storePlayer(this.props.id);
        const navigator = this.props.navigator;
        navigator.navigate('EditPlayer', { title: this.props.players[this.props.id - 1].name })
    }

    render() {

        const id = this.props.id;

        return (
            <View style={mainStyles.mv5}>
                <TouchableHighlight
                    style={styles.tochableHighlight}
                    onPress={this.editScreen}>
                    <View style={[mainStyles.container, mainStyles.flexRow, mainStyles.center]}>
                        <View style={mainStyles.ph10}>
                            <Text style={mainStyles.bigText}>{this.props.players[id - 1].name}</Text>
                            <Text>{this.props.players[id - 1].country}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );

    }

}

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        players: state.dataReducer.players.sort((a,b) => {return a.id - b.id})
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);

const styles = StyleSheet.create({
    tochableHighlight: {
        backgroundColor: '#EEE',
        padding: 10,
        marginHorizontal: 10
    }
});