import React from 'react';
import { useLocales } from 'src/hooks/useLocales';
import { InputStyled } from './styled';

export const Input = ({ className, onChange, value }) => {
  const locales = useLocales();

  return (
    <InputStyled
      onChange={onChange}
      value={value}
      placeholder={locales.components.main.search.placeholder}
      className={className}
    />
  );
};
