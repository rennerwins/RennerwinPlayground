import { MainNavigationProp } from '@/routes';
import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View } from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';

const ParallaxHeaderModules = () => {
  const navigation = useNavigation<MainNavigationProp>();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View>
      <StickyParallaxHeader headerType="DetailsHeader" title="Hello world" />
    </View>
  );
};

export default ParallaxHeaderModules;
