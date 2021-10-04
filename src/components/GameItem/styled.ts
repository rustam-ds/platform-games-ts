import styled, { css } from 'src/theme';

export const ViewStyled = styled.div``;

export const GameStyled = styled.div`
  ${props => css`
    margin-top: ${props.theme.uiPoint * 3}px;
  `}
`;

export const TitleStyled = styled.h3`
  ${props => css`
    font-size: ${props.theme.fonts.h3_size}px;
    font-weight: ${props.theme.fonts.semiBoldWeight};
    text-align: center;

    @media screen and ${props.theme.media.desktop} {
      text-align: left;
    }
  `}
`;

export const DescriptionStyled = styled.p`
  ${props => css`
    margin: ${props.theme.uiPoint * 2}px 0 ${props.theme.uiPoint * 3}px;
  `}
`;

export const LinkStyled = styled.a``;
