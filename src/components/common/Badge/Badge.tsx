import React from 'react';

type Props = {
  content: number;
  className: string;
};

export const Badge = ({ content, className = '' }: Props): JSX.Element => {
  return (
    <span className={`badge rounded-pill bg-danger ${className}`}>
      {content}
    </span>
  );
};
