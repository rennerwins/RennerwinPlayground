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
            options={{
              headerStyle: {
                backgroundColor: '#111827',
                elevation: 0,
              },
              headerTintColor: '#667EEA',
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default Routes;
