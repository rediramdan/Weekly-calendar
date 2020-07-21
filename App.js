import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Map from './src/screens/Map';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splash">
        <Screen name="Splash" component={Splash} />
        <Screen name="Home" component={Home} />
        <Screen name="Map" component={Map} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
