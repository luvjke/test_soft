import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button = ({
  onClick,
  disabled,
  label,
  icon,
  version,
  tag = 'button',
  href,
  active,
  state,
}: ButtonProps) => {
  const buttonClassNames = classNames(
    styles.button,
    version && styles[version],
    icon && styles.icon_button,
    active && styles.active
  );
  return tag === 'button' ? (
    <button className={buttonClassNames} onClick={onClick} disabled={disabled}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {label && <span className={styles.label}>{label}</span>}
    </button>
  ) : (
    <Link to={href ?? ''} className={buttonClassNames} state={state}>
      {label}
    </Link>
  );
};
