import React, { FC } from 'react';
import { useLocales } from 'src/hooks/useLocales';
import { usePresenter } from './usePresenter';
import { Props } from './interfaces';
import { SortStyled, TitleStyled, SelectStyled } from './styled';

export const Sort: FC<Props> = () => {
  const { selectList, onChangeSelect } = usePresenter();
  const locales = useLocales();

  return (
    <SortStyled>
      <TitleStyled>{locales.components.main.sort.label}</TitleStyled>
      <SelectStyled selectList={selectList} onChangeSelect={onChangeSelect} />
    </SortStyled>
  );
};
