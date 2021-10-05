import React, { FC } from 'react';
import { useLocales } from 'src/hooks/useLocales';
import { usePresenter } from './usePresenter';
import { Props } from './interfaces';
import { SearchStyled, TitleStyled, InputStyled } from './styled';

export const Search: FC<Props> = () => {
  const presenter = usePresenter();
  const locales = useLocales();

  return (
    <SearchStyled>
      <TitleStyled>{locales.components.main.search.label}</TitleStyled>
      <InputStyled onChange={presenter.onInputChange} value={presenter.value} />
    </SearchStyled>
  );
};
