import React from 'react';
import { usePresenter } from './usePresenter';
import { useLocales } from 'src/hooks/useLocales';
import { SortStyled, TitleStyled, SelectStyled } from './styled';

export const Sort = () => {
  const presenter = usePresenter();
  const locales = useLocales();

  return (
    <SortStyled>
      <TitleStyled>{locales.components.main.sort.label}</TitleStyled>
      <SelectStyled
        options={locales.components.main.sort.options}
        onChange={presenter.onChange}
      />
    </SortStyled>
  );
};


