import styled, { css } from 'src/theme';

export const ViewStyled = styled.div`
  ${(props) => css`
    padding: ${props.theme.uiPoint * 2}px 0;
    text-align: center;

    @media screen and ${props.theme.media.desktop} {
      text-align: left;
    }
  `}
`;

export const OptionsStyled = styled.div`
  ${(props) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and ${props.theme.media.desktop} {
      justify-content: left;
    }
  `}
`;

export const ReactPaginateStyled = styled.div`
  ${(props) => css`
    .pagination {
      color: #0366d6;

      display: flex;
      justify-content: space-between;
      width: ${props.theme.sizes.small.pagination_width}px;
      margin-top: ${props.theme.uiPoint * 3}px;
      cursor: pointer;
      border: none;
      background: transparent;
    }
    .break-me {
      cursor: default;
    }
    .active {
      color: ${props.theme.colors.pagination_active_number};
      font-weight: ${props.theme.fonts.boldWeight};
      background: transparent;
      border: none;
    }
  `}
`;
