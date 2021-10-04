import React from 'react';
import { Link } from 'react-router-dom';
import { useLocales } from 'src/hooks/useLocales';
import {
  CardStyled,
  TitleStyled,
  ImgStyled,
  RateStyled,
  DateStyled,
} from './styled';

export const Card = ({ id, name, image, rate, date }) => {
  const locales = useLocales();

  return (
    <CardStyled>
      <Link to={`/game/${id}`}>
        <TitleStyled>{name}</TitleStyled>
        <ImgStyled src={image} alt={name} />
        {rate && (
          <RateStyled>
            {locales.components.main.cards.rateLabel} {rate}
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
};
