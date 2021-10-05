import { Games } from 'src/types/interfaces/Games';
import { ParentPlatforms } from 'src/types/interfaces/ParentPlatforms';
import { Game } from 'src/types/interfaces/Game';
import { GamesQueryParamOrderingEnum } from 'src/types/enums';

export interface GameStoreModule {
  games: Games | null;
  platforms: ParentPlatforms | null;
  platformNumber: string;
  inputValue: string;
  game: Game | null;
  selectedPageNumber: number;
  pagesCountPaginate: number;
}

export interface IGameState {
  gameStore: GameStoreModule;
}

export interface IGameEvents {
  'game/fetch-games': { ordering: GamesQueryParamOrderingEnum };
  'game/fetch-game': { gameId: string };
  'game/fetch-platforms': undefined;
  'game/set-games': { value: Games };
  'game/set-game': { value: Game | null };
  'game/set-platforms': { value: ParentPlatforms };
  'game/set-platformNumber': { value: string };
  'game/set-inputValue': { value: string };
  'game/set-selectedPage-number': { value: number };
  'game/set-pagesCount': { value: number };
}

export interface GamesQueryParams {
  ordering: GamesQueryParamOrderingEnum;
  platformNumber: string;
  search: string;
  selectedPage: number;
}
