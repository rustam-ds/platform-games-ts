import { ChangeEvent } from 'react';

export interface Props {
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
