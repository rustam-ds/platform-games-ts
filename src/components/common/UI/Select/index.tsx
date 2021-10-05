import React, { FC, memo } from 'react';
import { useLocales } from 'src/hooks/useLocales';
import { Props } from './interfaces';
import { OptionStyled, SelectStyled } from './styled';

export const Select: FC<Props> = memo(({ className, onChangeSelect, isVisible, selectList }) => {
  const locales = useLocales();

  return (
    <SelectStyled className={className} onChange={onChangeSelect}>
      {isVisible && (
        <OptionStyled key={-1} value={-1}>
          {locales.components.main.filter.elseOption}
        </OptionStyled>
      )}
      {selectList.map((selectItem) => (
        <OptionStyled key={selectItem.id} value={selectItem.id}>
          {selectItem.label}
        </OptionStyled>
      ))}
    </SelectStyled>
  );
});
