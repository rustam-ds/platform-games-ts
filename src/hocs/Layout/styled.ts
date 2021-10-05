import styled, { css } from 'src/theme';

export const ViewStyled = styled.div`
  ${props => css`
    width: 96%;
    margin: auto;
    padding: ${props.theme.uiPoint * 6}px ${props.theme.uiPoint * 3}px;

    @media screen and ${props.theme.media.desktop} {
      width: 90%;
    }
  `}
`;

export const HeaderStyled = styled.header`
  ${props => css`
    text-align: center;

    @media screen and ${props.theme.media.desktop} {
      text-align: left;
    }
  `}
`;

export const TitleStyled = styled.h1`
  ${props => css`
    font-size: ${props.theme.fonts.h1_size}px;
    font-weight: ${props.theme.fonts.boldWeight};
  `}
`;

export const FooterStyled = styled.footer`
  ${props => css`
    text-align: center;
    margin-top: ${props.theme.uiPoint * 2}px;
  `}
`;

export const InfoStyled = styled.p``;
