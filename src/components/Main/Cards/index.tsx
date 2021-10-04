import React from 'react';
import { usePresenter } from './usePresenter';
import { Card } from 'src/components/Main/Cards/Card';
import { CardsStyled } from './styled';

export const Cards = () => {
  const presenter = usePresenter();

  return (
    <CardsStyled>
      {presenter.cards.map(card => (
        <Card
          key={card.id}
          name={card.name}
          rate={card.rating}
          image={card.background_image}
          date={card.released}
          id={card.id}
        />
      ))}
    </CardsStyled>
  );
};
