import { ChangeEvent, KeyboardEvent, ReactNode } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  button?: ReactNode;
  placeholder?: string;
  isDisabled?: boolean;
  icon?: ReactNode;
  version: 'unfilled' | 'filled' | 'outline' | 'custom' | 'advanced';
}
