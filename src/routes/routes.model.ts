import { StackNavigationProp } from '@react-navigation/stack';

export interface RoutesConfig {
  name: string;
  component: React.ComponentType<any>;
  showHeader?: boolean;
}

export enum ROUTES {
  MAIN = 'Main',
  MARK_DOWN_EDITOR = 'Mark Down Editor',
}

export type RootStackParamList = {
  [ROUTES.MAIN]: undefined;
  [ROUTES.MARK_DOWN_EDITOR]: undefined;
};

export type MainNavigationProp = StackNavigationProp<
  RootStackParamList,
  ROUTES.MAIN
>;
