import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen'
import Balance from './src/Balance'
import Deposit from './src/Deposit'
import Withdrawal from './src/Withdrawal'
import FastCash from './src/FastCash'

import AmountProvider from './context/AmountContext'

export default function App() {

  const Stack = createStackNavigator()
  return (
    <AmountProvider>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Balance' component={Balance} />
          <Stack.Screen name='Deposit' component={Deposit} />
          <Stack.Screen name='Withdrawal' component={Withdrawal} />
          <Stack.Screen name='FastCash' component={FastCash} />
        </Stack.Navigator>
      </NavigationContainer>
    </AmountProvider>
  );
}
