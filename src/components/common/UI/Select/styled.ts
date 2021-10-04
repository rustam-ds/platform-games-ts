import styled, { css } from 'src/theme';

export const SelectStyled = styled.select`
  ${props => css`
    font-size: ${props.theme.fonts.p1_size}px;
    width: ${props.theme.sizes.small.selectWidth}px;
    height: ${props.theme.sizes.small.selectHeight}px;
    padding-left: ${props.theme.uiPoint}px;
  `}
`;

export const OptionStyled = styled.option``;
