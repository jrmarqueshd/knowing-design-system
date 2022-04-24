import { Icons } from 'components/Icon/interfaces';

export type TagTypes =
  | 'disabled'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export interface TagProps {
  label: string;
  type?: TagTypes;
  icon?: Icons;
}
