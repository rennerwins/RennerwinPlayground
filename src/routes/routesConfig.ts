import { Main, MarkdownEditorModules } from '../modules';
import { ROUTES, RoutesConfig } from './routes.model';

export const routesConfig: RoutesConfig[] = [
  {
    name: ROUTES.MAIN,
    component: Main,
  },
  {
    name: ROUTES.MARK_DOWN_EDITOR,
    component: MarkdownEditorModules,
  },
];
