import { useCallback } from 'react';
import { useStoreon } from 'storeon/react';
import { IEvents, IState } from 'src/store';
import { GamesQueryParamOrderingEnum } from 'src/types/enums';
import { useLocales } from 'src/hooks/useLocales';
import { SelectList } from 'src/components/common/UI/Select/interfaces';

export const usePresenter = () => {
  const { dispatch } = useStoreon<IState, IEvents>();
  const locales = useLocales();

  const getSortedGames = useCallback(
    (event) => {
      switch (Number(event.target.value)) {
        case 1:
          dispatch('game/fetch-games', { ordering: GamesQueryParamOrderingEnum.RATING_UP });
          break;
        case 2:
          dispatch('game/fetch-games', { ordering: GamesQueryParamOrderingEnum.RATING_DOWN });
          break;
        case 3:
          dispatch('game/fetch-games', {
            ordering: GamesQueryParamOrderingEnum.RELEASED_UP,
          });
          break;
        case 4:
          dispatch('game/fetch-games', { ordering: GamesQueryParamOrderingEnum.RELEASED_DOWN });
          break;
      }
    },
    [dispatch],
  );

  const selectList: SelectList[] = locales.components.main.sort.options.map((option, index) => ({
    id: index,
    label: option.label,
  }));

  return {
    selectList,
    onChangeSelect: getSortedGames,
  };
};
