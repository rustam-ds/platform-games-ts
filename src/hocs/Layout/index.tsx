import React from 'react';
import { Link } from 'react-router-dom';
import { useLocales } from 'src/hooks/useLocales';
import { routesPath } from 'src/utils/routes/routesPath';
import {
  ViewStyled,
  HeaderStyled,
  TitleStyled,
  FooterStyled,
  InfoStyled,
} from './styled';

export const Layout = ({ children }) => {
  const locales = useLocales();

  return (
    <ViewStyled>
      <HeaderStyled>
        <Link to={routesPath.index}>
          <TitleStyled>{locales.components.header.title}</TitleStyled>
        </Link>
      </HeaderStyled>
      {children}
      <FooterStyled>
        <InfoStyled>{locales.components.footer.lawInfo}</InfoStyled>
      </FooterStyled>
    </ViewStyled>
  );
};
