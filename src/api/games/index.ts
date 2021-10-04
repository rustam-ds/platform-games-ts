import { api } from 'src/api';
import { PAGE_SIZE } from 'src/config';

export const gamesService = {
  getGames: options =>
    api.get('games', {
      params: {
        ordering: options.query,
        parent_platforms: options.platformNumber,
        search: options.search,
        page: options.selectedPage,
        page_size: PAGE_SIZE,
      },
    }),
  getGame: gameId => api.get(`games/${gameId}`),
};
