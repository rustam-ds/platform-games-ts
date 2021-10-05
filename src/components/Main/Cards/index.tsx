import React, { FC } from 'react';
import { Card } from 'src/components/Main/Cards/Card';
import { usePresenter } from './usePresenter';
import { Props } from './interfaces';
import { CardsStyled } from './styled';

export const Cards: FC<Props> = () => {
  const presenter = usePresenter();

  return (
    <CardsStyled>
      {presenter.cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          rating={card.rating}
          image={card.backgroundImage}
          date={card.released}
          gameId={card.id}
        />
      ))}
    </CardsStyled>
  );
};
