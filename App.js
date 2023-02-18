import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScanProductScreen from './screens/ScanProductScreen';
import ViewStockLevelsScreen from './screens/ViewStockLevelsScreen';
import SalesScreen from './screens/SalesScreen';
import SyncDataScreen from './screens/SyncDataScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Scan Product" component={ScanProductScreen} />
        <Stack.Screen name="View Stock Levels" component={ViewStockLevelsScreen} />
        <Stack.Screen name="Sales" component={SalesScreen} />
        <Stack.Screen name="Sync Data" component={SyncDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
