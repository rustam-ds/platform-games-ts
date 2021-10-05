import React, { FC } from 'react';
import { useLocales } from 'src/hooks/useLocales';
import { Slider } from 'src/components/GameItem/Slider';
import { usePresenter } from './usePresenter';
import { Props } from './interfaces';
import { ViewStyled, GameStyled, TitleStyled, DescriptionStyled, LinkStyled } from './styled';

export const GameItem: FC<Props> = () => {
  const { game } = usePresenter();
  const locales = useLocales();

  return (
    <ViewStyled>
      <GameStyled>
        <TitleStyled>{game?.name}</TitleStyled>
        <DescriptionStyled>{game?.description_raw}</DescriptionStyled>
        {game?.website && (
          <LinkStyled href={game.website} target={'_blank'}>
            {locales.components.game.linkSiteLabel} {game.website}
          </LinkStyled>
        )}
        {game?.tags && Boolean(game.tags.length) && <Slider images={game.tags} />}
      </GameStyled>
    </ViewStyled>
  );
};
