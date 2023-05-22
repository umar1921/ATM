import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'

import { AmountContext } from '../context/AmountContext'

import colors from '../config/Colors'
import Screen from '../components/Screen'
import CustomButton from '../components/CustomButton'

const Withdrawal = ({ navigation }) => {
    const { amount, saveAmount } = useContext(AmountContext)
    const [withdrawAmount, setWithdrawAmount] = useState('')
    const [errorMessage, setErrorMessage] = useState("")

    const [withdrawSuccess, setWithdrawSuccess] = useState(true)

    const handleChange = (event) => {
        if (withdrawAmount == '') {
            setErrorMessage('Field should not be empty')
        } else if (withdrawAmount == '0') {
            setErrorMessage('Should be greater than zero')
            setWithdrawAmount('')
        } else if (withdrawAmount > amount) {
            setErrorMessage('Insufficient Balance')
            setWithdrawAmount("")
            setWithdrawSuccess(false)
        } else {
            setWithdrawAmount(event.target.value)
            setErrorMessage('')
            setWithdrawSuccess(true)
            const newTotal = parseInt(amount) - parseInt(withdrawAmount)
            saveAmount(newTotal)
            navigation.navigate('Home')
            alert(`Rs ${withdrawAmount} has been deducted from your account`)
        }
    }

    return (
        <Screen>
            <View style={styles.innerContainer}>
                <Text style={styles.depositTxt}>Enter Withdraw Amount</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={withdrawAmount}
                        onChangeText={(number) => setWithdrawAmount(number)}
                        placeholder='Enter amount'
                        placeholderTextColor={colors.primary}
                        selectionColor={colors.primary}
                        keyboardType="number-pad"
                        onFocus={() => setErrorMessage('')}
                    />
                    {errorMessage && <Text style={{
                        color: colors.red_color,
                        paddingTop: 10,
                        alignItems: 'center'
                    }}>{errorMessage}</Text>}
                    {withdrawSuccess ? <CustomButton onPress={handleChange} text='Withdraw' />
                        : <CustomButton onPress={() => navigation.navigate('Balance')} text='Check Balance' />
                    }
                </View>
            </View>
        </Screen>
    )
}

export default Withdrawal

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