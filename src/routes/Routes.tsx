import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { routesConfig } from './routesConfig';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      {routesConfig.map(route => {
        return (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default Routes;
