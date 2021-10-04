import { MainPage } from 'src/pages/main';
import { GamePage } from 'src/pages/game';
import { routesPath } from 'src/utils/routes/routesPath';

export const routes = [
  {
    id: 0,
    path: routesPath.index,
    exact: true,
    component: MainPage,
  },
  {
    id: 1,
    path: routesPath.game,
    exact: true,
    component: GamePage,
  },
];
