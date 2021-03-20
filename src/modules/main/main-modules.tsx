import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { MainNavigationProp, ROUTES } from '../../routes';

const Main = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const handleNavigation = () => navigation.navigate(ROUTES.MARK_DOWN_EDITOR);

  return (
    <View>
      <Text>Main</Text>
      <Button title="Mark down editor" onPress={handleNavigation} />
    </View>
  );
};

export default Main;
