import { ChangeEvent, useCallback } from 'react';
import { useStoreon } from 'storeon/react';
import { IEvents, IState } from 'src/store';
import { GamesQueryParamOrderingEnum } from 'src/types/enums';

export const usePresenter = () => {
  const {
    dispatch,
    gameStore: { inputValue },
  } = useStoreon<IState, IEvents>('gameStore');

  const getInputValueAndDispatchIt = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch('game/set-inputValue', {
        value: event.target.value,
      });
      dispatch('game/fetch-games', {
        ordering: GamesQueryParamOrderingEnum.RATING_UP,
      });
    },
    [dispatch],
  );

  return {
    value: inputValue,
    onInputChange: getInputValueAndDispatchIt,
  };
};
