import { useStoreon } from 'storeon/react';
import { getCeilCounts } from 'src/utils';
import { IEvents, IState } from 'src/store';
import { GamesQueryParamOrderingEnum } from 'src/types/enums';

export const usePresenter = () => {
  const {
    dispatch,
    gameStore: { pagesCountPaginate },
  } = useStoreon<IState, IEvents>('gameStore');

  const handlePageClick = (selectedId: { selected: number }) => {
    dispatch('game/set-selectedPage-number', { value: selectedId.selected + 1 });
    dispatch('game/fetch-games', {
      ordering: GamesQueryParamOrderingEnum.RATING_UP,
    });
  };

  const pagesCount = pagesCountPaginate && getCeilCounts(pagesCountPaginate);

  return {
    count: pagesCount,
    onPageChange: handlePageClick,
  };
};
