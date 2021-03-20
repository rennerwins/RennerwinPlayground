import * as React from 'react';
import { NavigationCard } from '@/components';
import { ROUTES, ROUTES_NAME } from '@/routes';
import { tailwind } from '@/tailwind';
import { FlatList, View } from 'react-native';

const Main = () => {
  const _keyExtractor = (item: string) => item;

  const _renderListItem = ({ item }: { item: string }) => {
    if (item === ROUTES.MAIN) {
      return null;
    }
    return <NavigationCard title={ROUTES_NAME[item]} screen={item} />;
  };

  return (
    <View style={tailwind('flex-1 bg-gray-900')}>
      <FlatList
        contentContainerStyle={tailwind('p-4')}
        data={Object.keys(ROUTES)}
        renderItem={_renderListItem}
        keyExtractor={_keyExtractor}
      />
    </View>
  );
};

export default Main;
