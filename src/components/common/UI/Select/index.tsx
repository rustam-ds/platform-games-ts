import React from 'react';
import { useLocales } from 'src/hooks/useLocales';
import { OptionStyled, SelectStyled } from './styled';

export const Select = ({ className, onChange, isVisible, options }) => {
  const locales = useLocales();

  return (
    <SelectStyled className={className} onChange={onChange}>
      {isVisible && (
        <OptionStyled key={-1} value={-1}>
          {locales.components.main.filter.elseOption}
        </OptionStyled>
      )}
      {options.map(select => (
        <OptionStyled key={select.id} value={select.id}>
          {select.name}
        </OptionStyled>
      ))}
    </SelectStyled>
  );
};
