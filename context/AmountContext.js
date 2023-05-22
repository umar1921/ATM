import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const AmountContext = createContext();

const AmountProvider = ({ children }) => {
    const [amount, setAmount] = useState(10);

    useEffect(() => {
        fetchAmount()
    }, [])

    const saveAmount = async (newAmount) => {
        try {
            await AsyncStorage.setItem('amount', newAmount.toString());
            setAmount(newAmount)
        } catch (error) {
            console.log('Error saving amount to AsyncStorage:', error)
        }
    }
    const fetchAmount = async () => {
        try {
            const storedAmount = await AsyncStorage.getItem('amount')
            if (storedAmount !== null) {
                setAmount(parseInt(storedAmount))
            }
        } catch (error) {
            console.log('Error getting amount from AsyncStorage:', error)
        }
    }


    return (
        <AmountContext.Provider
            value={{
                amount,
                saveAmount
            }}
        >
            {children}
        </AmountContext.Provider>
    );
};

export default AmountProvider;
