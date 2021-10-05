import { StoreonModule } from 'storeon';
import { gamesService } from 'src/api/games';
import { platformService } from 'src/api/platform';
import { GamesQueryParams, GameStoreModule } from './interfaces';
import { IEvents, IState } from '../index';

const initialState: GameStoreModule = {
  games: null,
  platforms: null,
  platformNumber: '',
  inputValue: '',
  game: null,
  selectedPageNumber: 1,
  pagesCountPaginate: 0,
};

export const gameStoreModule: StoreonModule<IState, IEvents> = (store) => {
  store.on('@init', () => ({
    gameStore: { ...initialState },
  }));
  store.on('game/fetch-games', async (state, data) => {
    try {
      const options: GamesQueryParams = {
        ...data,
        platformNumber: state.gameStore.platformNumber,
        search: state.gameStore.inputValue,
        selectedPage: state.gameStore.selectedPageNumber,
      };
      const response = await gamesService.getGames(options);
      store.dispatch('game/set-games', { value: response.data });
      store.dispatch('game/set-pagesCount', { value: response.data.count });
    } catch (error) {
      store.dispatch('app/set-error', error);
    }
  });
  store.on('game/fetch-game', async (state, data) => {
    try {
      const response = await gamesService.getGame(data.gameId);
      store.dispatch('game/set-game', { value: response.data });
    } catch (error) {
      store.dispatch('app/set-error', error);
    }
  });
  store.on('game/fetch-platforms', async () => {
    try {
      const response = await platformService.getPlatform();
      store.dispatch('game/set-platforms', { value: response.data });
    } catch (error) {
      store.dispatch('app/set-error', error);
    }
  });
  store.on('game/set-games', (state, data) => ({
    gameStore: { ...state.gameStore, games: data.value },
  }));
  store.on('game/set-game', (state, data) => ({
    gameStore: { ...state.gameStore, game: data.value },
  }));
  store.on('game/set-platforms', (state, data) => ({
    gameStore: { ...state.gameStore, platforms: data.value },
  }));
  store.on('game/set-platformNumber', (state, data) => ({
    gameStore: { ...state.gameStore, platformNumber: data.value },
  }));
  store.on('game/set-inputValue', (state, data) => ({
    gameStore: { ...state.gameStore, inputValue: data.value },
  }));
  store.on('game/set-selectedPage-number', (state, data) => ({
    gameStore: { ...state.gameStore, selectedPageNumber: data.value },
  }));
  store.on('game/set-pagesCount', (state, data) => ({
    gameStore: { ...state.gameStore, pagesCountPaginate: data.value },
  }));
};
