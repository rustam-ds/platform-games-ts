import styled, { css } from 'src/theme';

export const InputStyled = styled.input`
  ${props => css`
    width: ${props.theme.sizes.small.inputWidth}px;
    height: ${props.theme.sizes.small.inputHeight}px;
    padding-left: ${props.theme.uiPoint}px;
    font-size: ${props.theme.fonts.p1_size}px;
  `}
`;
