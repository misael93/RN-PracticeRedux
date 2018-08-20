import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import {
    Button,
    Text
} from 'native-base';
import PlayerCard from './playerCard';
import mainStyles from '../styles/mainStyles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Players',
            headerLeft: null,
            headerRight: (
                <View style={{ marginRight: 5 }}>
                    <Button
                        onPress={() => {
                            navigation.state.params.logoutFunction();
                            navigation.navigate('Login');
                        }}
                        transparent light
                    >
                        <Text>Logout</Text>
                    </Button>
                </View>
            ),
        }
    };

    componentWillMount() {
        this.props.navigation.setParams({
            logoutFunction: this.props.logout
        });
        this.props.getPlayers();
    }

    render() {

        const navigator = this.props.navigation;

        if (this.props.loading) {
            return (
                <View style={mainStyles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true} />
                </View>
            )
        } else {
            return (
                <View style={mainStyles.background}>
                    <FlatList
                        style={mainStyles.mv5}
                        data={this.props.players}
                        renderItem={({ item }) =>
                            <PlayerCard id={item.id} navigator={navigator} />}
                        keyExtractor={(item, index) => item.id.toString()}
                    />
                </View>
            );
        }

    }

}

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        players: state.dataReducer.players.sort((a, b) => { return a.id - b.id })
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);