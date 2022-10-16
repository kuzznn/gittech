import React from 'react';

type Props = {
  name: string;
};

export const Icon = ({ name = '' }: Props): JSX.Element => {
  return <i className={`bi bi-${name}`}></i>;
};
