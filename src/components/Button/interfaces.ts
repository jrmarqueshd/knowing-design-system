import { Icons } from 'components/Icon/interfaces';
import { ButtonHTMLAttributes } from 'react';

type formatType = 'primary' | 'secondary' | 'outline' | 'text';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  format?: formatType;
  icon?: Icons;
}
