import React from 'react';
import { usePresenter } from './usePresenter';
import { useLocales } from 'src/hooks/useLocales';
import { FilterStyled, TitleStyled, SelectStyled } from './styled';

export const Filter = () => {
  const presenter = usePresenter();
  const locales = useLocales();

  return (
    <FilterStyled>
      <TitleStyled>{locales.components.main.filter.label}</TitleStyled>
      <SelectStyled
        options={presenter.options}
        onChange={presenter.onChange}
        isVisible={presenter.isVisibleElseOption}
      />
    </FilterStyled>
  );
};
