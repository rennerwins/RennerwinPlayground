import { StackNavigationProp } from '@react-navigation/stack';

export interface RoutesConfig {
  name: string;
  component: React.ComponentType<any>;
}

export const ROUTES_NAME: { [key: string]: string } = {
  MAIN: 'Main',
  MARK_DOWN_EDITOR: 'Mark Down Editor',
};

export enum ROUTES {
  MAIN = 'MAIN',
  MARK_DOWN_EDITOR = 'MARK_DOWN_EDITOR',
}

export type RootStackParamList = {
  [ROUTES.MAIN]: undefined;
  [ROUTES.MARK_DOWN_EDITOR]: undefined;
};

export type MainNavigationProp = StackNavigationProp<
  RootStackParamList,
  ROUTES.MAIN
>;
