const initialState = {
  error: null,
};

export const app = store => {
  store.on('@init', () => ({
    app: { ...initialState },
  }));
  store.on('app/init', () => {
    store.dispatch('gameView/fetch-games', { query: '-rating' });
    store.dispatch('gameView/fetch-platform');
  });
  store.on('app/set-error', (state, data) => ({
    app: { ...state.app, error: data.value },
  }));
};
