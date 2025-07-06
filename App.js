import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons'
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();
function ExpensesOverview() {
  return <Bottom.Navigator screenOptions={({ navigation }) => (
    {
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: { backgroundColor: GlobalStyles.accent500 },
      headerRight: ({ tintColor }) => {
        return <IconButton name="add" size={24} color={tintColor} onPress={() => {
          navigation.navigate('ManageExpense')
        }} />
      }
    })
  }>
    <Bottom.Screen name='RecentExpenses' component={RecentExpenses}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name='hourglass' color={color} size={size} />
        },
        title: 'Recent Expenses'

      }}
    />
    <Bottom.Screen name='AllExpenses' component={AllExpenses} options={{
      tabBarIcon: ({ color, size }) => {
        return <Ionicons name='calendar' color={color} size={size} />
      },
      title: 'All Expenses'

    }} />
  </Bottom.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500
          },
          headerTintColor: 'white'
        }}>
          <Stack.Screen name='ExpensesOverView' component={ExpensesOverview} options={{
            headerShown: false
          }} />
          <Stack.Screen name='ManageExpense' component={ManageExpense} options={{
            presentation:'modal'
          }} />

        </Stack.Navigator>
      </NavigationContainer>
    </>


  );
}


