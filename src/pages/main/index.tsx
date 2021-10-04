import React from 'react';
import { ErrorBoundary } from 'src/hocs/ErrorBoundary';
import { Main } from 'src/components/Main';

export const MainPage = () => (
  <ErrorBoundary>
    <Main />
  </ErrorBoundary>
);
