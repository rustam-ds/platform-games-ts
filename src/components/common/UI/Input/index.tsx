import React, { FC, memo } from 'react';
import { useLocales } from 'src/hooks/useLocales';
import { Props } from './interfaces';
import { InputStyled } from './styled';

export const Input: FC<Props> = memo(({ className, onChange, value }) => {
  const locales = useLocales();

  return (
    <InputStyled
      onChange={onChange}
      value={value}
      placeholder={locales.components.main.search.placeholder}
      className={className}
    />
  );
});
