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
import { connect } from 'react-redux';
import { required, numeric, age } from '../validators';

const renderInput = ({ input, label, type, meta: { touched, error, warning } }) => {
    var multiline = false;
    var numberOfLines = 1;

    if (input.name === 'age') {
        input.value += '';
    }

    if (input.name === 'bio') {
        multiline = true;
        numberOfLines = 5;
    }

    return (
        <View>
            <Item floatingLabel>
                <Label>{label}</Label>
                <Input
                    {...input}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                />
            </Item>
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : <Text />}
        </View>
    )
}

const EditPlayerForm = props => {

    const { handleSubmit } = props;

    return (
        <Container>
            <Content padder>
                <Field
                    name="name"
                    label="Name"
                    component={renderInput}
                    validate={required}
                />
                <Field
                    name="team"
                    label="Team"
                    component={renderInput}
                    validate={required}
                />
                <Field
                    name="country"
                    label="Country"
                    component={renderInput}
                    validate={required}
                />
                <Field
                    name="age"
                    label="Age"
                    component={renderInput}
                    validate={[required, numeric, age]}
                />
                <Field
                    name="biggestAchievment"
                    label="Biggest Achievment"
                    component={renderInput}
                    validate={required}
                />
                <Field
                    name="bio"
                    label="Biography"
                    component={renderInput}
                    validate={required}
                />
                <Button block success onPress={handleSubmit}>
                    <Text>Save</Text>
                </Button>
            </Content>
        </Container>
    );
}

function mapStateToProps(state, props) {
    return {
        initialValues: state.dataReducer.player
    };
}

EditPlayerForm = reduxForm({
    form: 'editPlayerForm',
    // Without this line the form loaded an old value
    // the first time the app was opened
    enableReinitialize: true,
})(EditPlayerForm)

EditPlayerForm = connect(mapStateToProps)(EditPlayerForm)

export default EditPlayerForm;