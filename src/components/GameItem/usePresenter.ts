import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useStoreon } from 'storeon/react';
import { IEvents, IState } from 'src/store';

export const usePresenter = () => {
  const {
    dispatch,
    gameStore: { game },
  } = useStoreon<IState, IEvents>('gameStore');
  const { gameId } = useParams<{ gameId: string }>();

  useEffect(() => dispatch('game/fetch-game', { gameId }), [dispatch, gameId]);

  useEffect(() => () => dispatch('game/set-game', { value: null }), [dispatch]);

  return {
    game,
  };
};
