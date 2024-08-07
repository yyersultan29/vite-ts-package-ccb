import { FC } from 'react';

interface ContainerProps {
  title?: string;
}

export const Container: FC<ContainerProps> = ({ title = 'Container Box' }) => {
  return <div style={{ background: 'silver', padding: '10px' }}>{title}</div>;
};
