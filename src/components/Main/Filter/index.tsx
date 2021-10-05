import React, { FC } from 'react';
import { useLocales } from 'src/hooks/useLocales';
import { usePresenter } from './usePresenter';
import { Props } from './interfaces';
import { FilterStyled, TitleStyled, SelectStyled } from './styled';

export const Filter: FC<Props> = () => {
  const presenter = usePresenter();
  const locales = useLocales();

  return (
    <FilterStyled>
      <TitleStyled>{locales.components.main.filter.label}</TitleStyled>
      <SelectStyled
        selectList={presenter.selectList}
        onChangeSelect={presenter.onChangeSelect}
        isVisible
      />
    </FilterStyled>
  );
};
