import { FunctionComponent } from 'react';
import { UNSAFE_ANY_TYPE } from 'src/types/types';

export interface Routes {
  id: number;
  path: string;
  exact: boolean;
  component: FunctionComponent<UNSAFE_ANY_TYPE>;
}
