import React, { Component } from 'react';
import LoginForm from './loginForm';
import { ToastAndroid } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class Login extends Component {

    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
        if (this.props.session) {
            this.props.navigation.navigate('Home');
        }
    }

    handleSubmit = values => {
        if (values.email.toLowerCase() == 'practice@gmail.com'
            && values.password == '1234Qw') {
            
            this.props.setSession(values.email.toLowerCase());
            this.props.navigation.navigate('Home');

        } else {
            ToastAndroid.show('Wrong email/password', ToastAndroid.SHORT);
        }
    }

    render() {
        return (
            <LoginForm onSubmit={this.handleSubmit}/>
        );
    }

}

function mapStateToProps(state, props) {
    return {
        session: state.dataReducer.session
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);