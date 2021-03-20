import { tailwind } from '@/tailwind';
import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { MainNavigationProp } from 'src/routes';

interface NavigationCardProps {
  title: any;
  screen: any;
}

export const NavigationCard = ({ title = '', screen }: NavigationCardProps) => {
  const navigation = useNavigation<MainNavigationProp>();

  const _handleNavigation = () => navigation.navigate(screen);

  return (
    <Pressable
      style={tailwind(
        'flex-row items-center justify-between p-4 bg-gray-800 rounded-lg mb-4',
      )}
      onPress={_handleNavigation}>
      <Text style={tailwind('text-secondary-200')}>{title}</Text>
      <Icon name="chevron-right" size={24} color="#A1E2DE" />
    </Pressable>
  );
};
