import { AppStoreModule } from './interfaces';
import { StoreonModule } from 'storeon';
import { GamesQueryParamOrderingEnum } from 'src/types/enums';
import { IEvents, IState } from '../index';

const initialState: AppStoreModule = {
  error: null,
};

export const appStoreModule: StoreonModule<IState, IEvents> = (store) => {
  store.on('@init', () => ({
    appStore: { ...initialState },
  }));
  store.on('app/init', () => {
    store.dispatch('game/fetch-games', { ordering: GamesQueryParamOrderingEnum.RATING_UP });
    store.dispatch('game/fetch-platforms');
  });
  store.on('app/set-error', (state, data) => ({
    appStore: { ...state.appStore, error: data.value },
  }));
};
