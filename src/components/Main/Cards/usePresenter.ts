import { useMemo } from 'react';
import { useStoreon } from 'storeon/react';
import { IEvents, IState } from 'src/store';
import { plugGamePic } from 'src/assets';

export const usePresenter = () => {
  const {
    gameStore: { games },
  } = useStoreon<IState, IEvents>('gameStore');

  const gamesList = useMemo(
    () =>
      games
        ? games.results.map((game) => ({
            id: game.id,
            name: game.name,
            rating: game.rating,
            backgroundImage: game.background_image ?? plugGamePic,
            released: game.released,
          }))
        : [],
    [games],
  );

  return {
    cards: gamesList,
  };
};
