import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import EditPlayerForm from './editPlayerForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class EditPlayer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title')
        };
    };

    handleSubmit = values => {
        this.props.updatePlayer(values);
        ToastAndroid.show('Updated', ToastAndroid.SHORT);
    }

    render() {
        return (
            <EditPlayerForm onSubmit={this.handleSubmit}/>
        );
    }

}

function mapStateToProps(state, props) {
    return {
        player: state.dataReducer.player
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayer);