import React, { FC } from 'react';
import { ErrorBoundary } from 'src/hocs/ErrorBoundary';
import { GameItem } from 'src/components/GameItem';
import { Props } from './interfaces';

export const GamePage: FC<Props> = () => (
  <ErrorBoundary>
    <GameItem />
  </ErrorBoundary>
);
