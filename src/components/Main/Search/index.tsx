import React from 'react';
import styled, { css } from 'src/theme';
import { usePresenter } from './usePresenter';
import { useLocales } from 'src/hooks/useLocales';
import { Input } from 'src/components/common/UI/Input/Input';

export const Search = () => {
  const presenter = usePresenter();
  const locales = useLocales();

  return (
    <SearchStyled>
      <TitleStyled>{locales.components.main.search.label}</TitleStyled>
      <InputStyled onChange={presenter.onChange} value={presenter.value} />
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  ${props => css`
    padding-top: ${props.theme.uiPoint * 2}px;

    @media screen and ${props.theme.media.desktop} {
      margin-left: ${props.theme.uiPoint * 4}px;
    }
  `}
`;

const TitleStyled = styled.h3`
  ${props => css`
    font-size: ${props.theme.fonts.h3_size}px;
    font-weight: ${props.theme.fonts.semiBoldWeight};
  `}
`;

const InputStyled = styled(Input)`
  ${props => css`
    margin-top: ${props.theme.uiPoint}px;

    @media screen and ${props.theme.media.desktop} {
      margin-top: ${props.theme.uiPoint * 2}px;
    }
  `}
`;
