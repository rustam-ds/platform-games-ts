import { ChangeEvent } from 'react';

export interface Props {
  className?: string;
  onChangeSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
  isVisible?: boolean;
  selectList: SelectList[];
}

export interface SelectList {
  id: number;
  label: string;
}
