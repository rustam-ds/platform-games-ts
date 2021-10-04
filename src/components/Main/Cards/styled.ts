import styled, { css } from 'src/theme';

export const CardsStyled = styled.div`
  ${props => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: ${props.theme.uiPoint * 5}px;
    text-align: center;

    @media screen and ${props.theme.media.desktop} {
      display: grid;
      grid-template-columns: repeat(
        auto-fill,
        minmax(${props.theme.sizes.medium.card_width}px, 1fr)
      );
      grid-gap: ${props.theme.uiPoint * 4}px;
    }
  `}
`;
