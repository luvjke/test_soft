import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MovieCard.module.scss';
import { MovieCardProps } from './MovieCard.props';
export const MovieCard = ({ poster, title, link, children }: MovieCardProps) => {
  return (
    <div className={styles.item_box}>
      {poster && (
        <div className={styles.image_box}>
          <Link to={link}>
            <img
              src={poster !== 'N/A' ? poster : 'Вставь изображение'}
              alt={title}
              className={styles.image}
            />
          </Link>
        </div>
      )}
      <div className={styles.content_box}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {children && <div className={styles.content}>{children}</div>}
      </div>
    </div>
  );
};
