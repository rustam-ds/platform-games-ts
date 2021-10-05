import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';
import { appStoreModule } from './AppStoreModule';
import { gameStoreModule } from './GameStoreModule';
import { IGameEvents, IGameState } from './GameStoreModule/interfaces';
import { IAppEvents, IAppState } from './AppStoreModule/interfaces';

export interface IState extends IGameState, IAppState {}

export interface IEvents extends IGameEvents, IAppEvents {}

export const store = createStoreon<IState, IEvents>([
  appStoreModule,
  gameStoreModule,
  process.env.NODE_ENV !== 'production' && storeonDevtools,
]);
