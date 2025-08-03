import React from 'react';
import classNames from 'classnames';

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, className }) => {
  return (
    <span
      className={classNames(
        'inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full shadow-sm',
        className
      )}
    >
      {text}
    </span>
  );
};

export { Badge };
