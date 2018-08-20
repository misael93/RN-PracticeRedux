import { createStackNavigator } from 'react-navigation';
import Login from '../components/login';
import Home from '../components/home';
import EditPlayer from '../components/editPlayer';

const StackNavigation = createStackNavigator(
    {
        Login: { screen: Login },
        Home: { screen: Home },
        EditPlayer: { screen: EditPlayer },
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#00529F'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
);

export default StackNavigation;