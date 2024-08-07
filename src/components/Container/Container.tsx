import { FC } from 'react';

interface ContainerProps {
  title?: string;
}

export const Container: FC<ContainerProps> = ({ title = 'Container Box' }) => {
  return <div className='p-5 bg-gray-100 '>{title}</div>;
};
