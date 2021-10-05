import { ChangeEvent, useCallback, useMemo } from 'react';
import { useStoreon } from 'storeon/react';
import { IEvents, IState } from 'src/store';
import { GamesQueryParamOrderingEnum } from 'src/types/enums';
import { SelectList } from 'src/components/common/UI/Select/interfaces';

export const usePresenter = () => {
  const {
    dispatch,
    gameStore: { platforms },
  } = useStoreon<IState, IEvents>('gameStore');

  const dispatchGames = useCallback(
    () => dispatch('game/fetch-games', { ordering: GamesQueryParamOrderingEnum.RATING_UP }),
    [dispatch],
  );

  const getPlatform = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      if (event.target.value === '-1') {
        dispatch('game/set-platformNumber', {
          value: '',
        });
        dispatchGames();
      } else {
        dispatch('game/set-platformNumber', {
          value: event.target.value,
        });
        dispatchGames();
      }
    },
    [dispatch, dispatchGames],
  );

  const platformsList: SelectList[] = useMemo(
    () =>
      platforms
        ? platforms.results.map((platform) => ({
            id: platform.id,
            label: platform.name,
          }))
        : [],
    [platforms],
  );

  return {
    selectList: platformsList,
    onChangeSelect: getPlatform,
  };
};
