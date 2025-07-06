import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';

const Stack=createNativeStackNavigator();
const Bottom=createBottomTabNavigator();
function ExpensesOverview() {
  return <Bottom.Navigator>
    <Bottom.Screen name='RecentExpenses'component={RecentExpenses} />
    <Bottom.Screen name='AllExpenses' component={AllExpenses} />
  </Bottom.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
       <Stack.Navigator >
        <Stack.Screen name='ExpensesOverView' component={ExpensesOverview} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='ManageExpense' component={ManageExpense}/>
        
       </Stack.Navigator>
      </NavigationContainer>
    </>


  );
}


