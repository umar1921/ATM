import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'

import { AmountContext } from '../context/AmountContext'

import colors from '../config/Colors'
import Screen from '../components/Screen'
import CustomButton from '../components/CustomButton'

const Deposit = ({ navigation }) => {
    const { amount, saveAmount } = useContext(AmountContext)
    const [addAmount, setAddAmount] = useState('')
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (event) => {
        if (addAmount == '') {
            setErrorMessage('Field should not be empty')
        } else if (addAmount == '0') {
            setErrorMessage('Should be greater than zero')
            setAddAmount('')
        } else {
            setAddAmount(event.target.value)
            setErrorMessage('')
            const newTotal = parseInt(amount) + parseInt(addAmount)
            saveAmount(newTotal)
            navigation.navigate('Home')
            alert(`Rs ${addAmount} has been added to your account`)
        }
    }

    return (
        <Screen>
            <View style={styles.innerContainer}>
                <Text style={styles.depositTxt}>Enter Deposit Amount</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={addAmount}
                        onChangeText={(number) => setAddAmount(number)}
                        placeholder='Enter amount'
                        placeholderTextColor={colors.primary}
                        selectionColor={colors.primary}
                        keyboardType="number-pad"
                        onFocus={() => setErrorMessage('')}
                    />
                    {errorMessage && <Text style={{
                        color: '#fa1505',
                        paddingTop: 10,
                    }}>{errorMessage}</Text>}
                    <CustomButton onPress={handleChange} text='Deposit' />
                </View>
            </View>
        </Screen>
    )
}

export default Deposit

const styles = StyleSheet.create({
    innerContainer: {
        alignItems: 'center',
        width: '100%',
    },
    depositTxt: {
        fontSize: 25,
        color: colors.primary,
        paddingBottom: 10
    },
    inputContainer: {
        width: '60%',
        alignItems: 'center'
    },
    textInput: {
        color: colors.primary,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: colors.primary,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 3,
        fontSize: 18
    }
})