import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react'

import colors from '../config/Colors'
import Screen from '../components/Screen';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({ navigation }) => {
    const [password, setPassword] = useState('1234');
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = () => {
        var isFocused = true
        if (password == '1234') {
            navigation.navigate('Home')
            setErrorMessage('')
        } else if (!password) {
            setErrorMessage('Field should not be empty')
        } else {
            setErrorMessage('Invalid PIN')
            setPassword('')
        }
        setPassword('')
    }

    return (
        <Screen>
            <Text style={styles.welTxt}>Welcome</Text>
            <Text style={styles.pinTxt}>Please enter PIN</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder='****'
                    placeholderTextColor={colors.primary}
                    keyboardType="number-pad"
                    secureTextEntry={true}
                />
                {errorMessage && <Text
                    style={{
                        color: 'red',
                        paddingTop: 10,
                    }}>
                    {errorMessage}</Text>}
                <CustomButton
                    onPress={() => handleSubmit()}
                    text='Go' />
            </View>
        </Screen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    welTxt: {
        fontSize: 40,
        color: colors.primary
    },
    pinTxt: {
        fontSize: 18,
        color: colors.primary
    },
    inputContainer: {
        width: '60%',
        alignItems: 'center'
    },
    textInput: {
        width: '100%',
        paddingVertical: 3,
        marginTop: 10,
        borderRadius: 5,
        borderColor: colors.primary,
        textAlign: 'center',
        fontSize: 20,
        borderWidth: 1,
        color: colors.primary
    },
    buttonContainer: {
        borderColor: colors.blue_color,
        borderWidth: 1,
        marginTop: 10,
        width: 100,
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary
    },
})