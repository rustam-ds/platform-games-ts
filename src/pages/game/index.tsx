import React from 'react';
import { ErrorBoundary } from 'src/hocs/ErrorBoundary';
import { Game } from 'src/components/GameItem';

export const GamePage = () => (
  <ErrorBoundary>
    <Game />
  </ErrorBoundary>
);
