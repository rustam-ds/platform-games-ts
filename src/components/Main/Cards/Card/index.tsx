import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { useLocales } from 'src/hooks/useLocales';
import { Props } from './interfaces';
import { CardStyled, TitleStyled, ImgStyled, RateStyled, DateStyled } from './styled';

export const Card: FC<Props> = memo(({ gameId, name, image, rating, date }) => {
  const locales = useLocales();

  return (
    <CardStyled>
      <Link to={`/game/${gameId}`}>
        <TitleStyled>{name}</TitleStyled>
        <ImgStyled src={image} alt={name} />
        {rating && (
          <RateStyled>
            {locales.components.main.cards.rateLabel} {rating}
          </RateStyled>
        )}
        {date && (
          <DateStyled>
            {locales.components.main.cards.dateLabel} {date}
          </DateStyled>
        )}
      </Link>
    </CardStyled>
  );
});
