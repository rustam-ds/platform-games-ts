import { api } from 'src/api';
import { PAGE_SIZE } from 'src/config';
import { Games } from 'src/types/interfaces/Games';
import { Game } from 'src/types/interfaces/Game';
import { GamesQueryParams } from 'src/store/GameStoreModule/interfaces';

export const gamesService = {
  getGames: (params: GamesQueryParams) =>
    api.get<Games>('games', {
      params: {
        ordering: params.ordering,
        ...(params.platformNumber && { parent_platforms: params.platformNumber }),
        ...(params.search && { search: params.search }),
        page: params.selectedPage,
        page_size: PAGE_SIZE,
      },
    }),
  getGame: (gameId: string) => api.get<Game>(`games/${gameId}`),
};
