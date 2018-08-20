import React from 'react';
import {
    Container,
    Item,
    Input,
    Content,
    Button,
    Text,
    Label
} from 'native-base';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import mainStyles from '../styles/mainStyles';
import { required, email, password } from '../validators';

const renderInput = ({ input, label, type, meta: { touched, error, warning } }) => {
    var isPassword = false;

    if (input.name === 'password') {
        isPassword = true;
    }

    return (
        <View style={mainStyles.p10}>
            <Item floatingLabel> 
                <Label>{label}</Label>
                <Input
                    {...input}
                    secureTextEntry={isPassword}
                />
            </Item>
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : <Text />}
        </View>
    )
}

    let LoginForm = props => {

        const { handleSubmit } = props;

        return (
            <Container>
                <Content padder>
                    <Field
                        name="email"
                        label="Email"
                        component={renderInput}
                        validate={[required, email]} />
                    <Field
                        name="password"
                        label="Password"
                        component={renderInput}
                        validate={[required, password]} />
                    <Button block success onPress={handleSubmit}>
                        <Text>Login</Text>
                    </Button>
                </Content>
            </Container>
        );
    }

    export default LoginForm = reduxForm({
        form: 'loginForm'
    })(LoginForm)