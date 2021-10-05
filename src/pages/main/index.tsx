import React, { FC } from 'react';
import { ErrorBoundary } from 'src/hocs/ErrorBoundary';
import { Main } from 'src/components/Main';
import { Props } from './interfaces';

export const MainPage: FC<Props> = () => (
  <ErrorBoundary>
    <Main />
  </ErrorBoundary>
);
