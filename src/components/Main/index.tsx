import React from 'react';
import ReactPaginate from 'react-paginate';
import { Sort } from 'src/components/Main/Sort';
import { Filter } from 'src/components/Main/Filter';
import { Search } from 'src/components/Main/Search';
import { Cards } from 'src/components/Main/Cards';
import { useLocales } from 'src/hooks/useLocales';
import { usePresenter } from './usePresenter';
import { ViewStyled, OptionsStyled, ReactPaginateStyled } from './styled';

export const Main = () => {
  const presenter = usePresenter();
  const locales = useLocales();

  return (
    <ViewStyled>
      <OptionsStyled>
        <Sort />
        <Filter />
        <Search />
      </OptionsStyled>
      <Cards />
      <ReactPaginateStyled>
        <ReactPaginate
          previousLabel={locales.components.main.cards.pagination.prev}
          nextLabel={locales.components.main.cards.pagination.next}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={presenter.count}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={presenter.onPageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </ReactPaginateStyled>
    </ViewStyled>
  );
};
