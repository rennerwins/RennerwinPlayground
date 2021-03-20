import { StackNavigationProp } from '@react-navigation/stack';

export interface RoutesConfig {
  name: string;
  component: React.ComponentType<any>;
}

export const ROUTES_NAME: { [key: string]: string } = {
  MAIN: 'Main',
  MARK_DOWN_EDITOR: 'Mark Down Editor',
  PARALLAX_HEADER: 'Parallax Header',
};

export enum ROUTES {
  MAIN = 'MAIN',
  MARK_DOWN_EDITOR = 'MARK_DOWN_EDITOR',
  PARALLAX_HEADER = 'PARALLAX_HEADER',
}

export type RootStackParamList = {
  [ROUTES.MAIN]: undefined;
  [ROUTES.MARK_DOWN_EDITOR]: undefined;
  [ROUTES.PARALLAX_HEADER]: undefined;
};

export type MainNavigationProp = StackNavigationProp<
  RootStackParamList,
  ROUTES.MAIN
>;
