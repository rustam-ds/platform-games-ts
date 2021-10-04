import React from 'react';
import { usePresenter } from './usePresenter';
import { useLocales } from 'src/hooks/useLocales';
import { Slider } from 'src/components/GameItem/Slider';
import {
  ViewStyled,
  GameStyled,
  TitleStyled,
  DescriptionStyled,
  LinkStyled,
} from './styled';

export const Game = () => {
  const presenter = usePresenter();
  const locales = useLocales();

  return (
    <ViewStyled>
      <GameStyled>
        <TitleStyled>{presenter.game.name}</TitleStyled>
        <DescriptionStyled>{presenter.game.description_raw}</DescriptionStyled>
        {presenter.game.website && (
          <LinkStyled href={presenter.game.website} target={'_blank'}>
            {locales.components.game.linkSiteLabel} {presenter.game.website}
          </LinkStyled>
        )}
        {presenter.game.tags && Boolean(presenter.game.tags.length) && (
          <Slider images={presenter.game.tags} />
        )}
      </GameStyled>
    </ViewStyled>
  );
};
