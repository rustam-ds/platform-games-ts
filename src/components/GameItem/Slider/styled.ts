import styled, { css } from 'src/theme';

export const WrapperStyled = styled.div`
  ${props => css`
    position: relative;
    margin: ${props.theme.uiPoint * 2}px 0;
  `}
`;

export const ImageStyled = styled.img`
  ${props => css`
    width: 100%;
    height: auto;
    margin: auto;

    @media screen and ${props.theme.media.desktop} {
      left: 0;
      top: 0;
      padding: 0 ${props.theme.uiPoint * 4}px;
      width: 100%;
      min-width: auto;
    }
  `}
`;

const commonArrowStyled = css`
  ${props => css`
    display: none;
    position: absolute;

    &:hover {
      background: ${props.theme.colors.slider_arrows_background_hover};
    }

    @media screen and ${props.theme.media.desktop} {
      top: 50%;
      width: ${props.theme.uiPoint * 8 - 2}px;
      height: ${props.theme.uiPoint * 8 - 2}px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      transition: 0.2s;
    }
  `}
`;

export const ArrowLeftStyled = styled.button`
  ${commonArrowStyled};

  left: -5%;
  z-index: 1000;
`;

export const ArrowRightStyled = styled.button`
  ${commonArrowStyled};

  right: -5%;
`;

export const ArrowStyled = styled.img``;
