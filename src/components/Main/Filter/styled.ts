import styled, { css } from 'src/theme';
import { Select } from 'src/components/common/UI/Select';

export const FilterStyled = styled.div`
  ${props => css`
    padding-top: ${props.theme.uiPoint * 2}px;

    @media screen and ${props.theme.media.desktop} {
      margin-left: ${props.theme.uiPoint * 4}px;
    }
  `}
`;

export const TitleStyled = styled.h3`
  ${props => css`
    font-size: ${props.theme.fonts.h3_size}px;
    font-weight: ${props.theme.fonts.semiBoldWeight};
  `}
`;

export const SelectStyled = styled(Select)`
  ${props => css`
    margin-top: ${props.theme.uiPoint}px;

    @media screen and ${props.theme.media.desktop} {
      margin-top: ${props.theme.uiPoint * 2}px;
    }
  `}
`;
