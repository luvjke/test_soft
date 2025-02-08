import { ReactNode } from 'react';
import { To } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  version: 'unfilled' | 'filled' | 'outline' | 'custom' | 'pagination_pn' | 'pagination';
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  tag?: 'link' | 'button';
  href?: To;
  state?: any;
  active?: boolean;
}
