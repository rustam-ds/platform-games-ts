import { useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import { useParams } from 'react-router';

export const usePresenter = () => {
  const {
    dispatch,
    gameView: { game },
  } = useStoreon('gameView');
  const { gameId } = useParams();

  useEffect(() => dispatch('gameView/fetch-game', { gameId }), []);

  useEffect(() => () => dispatch('gameView/set-game', { games: {} }), []);

  return {
    game,
  };
};
