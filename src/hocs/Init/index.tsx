import React, { FC, useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import { Props } from './interface';

export const Init: FC<Props> = ({ children }) => {
  const { dispatch } = useStoreon();

  useEffect(() => {
    dispatch('app/init');
  }, [dispatch]);

  return <>{children}</>;
};
