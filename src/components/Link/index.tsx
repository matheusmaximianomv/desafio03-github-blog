import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

import { LinkContainer } from './styles';

interface ILinkProps extends LinkProps {
  children: ReactNode;
}

export function Link({ children, ...props }: ILinkProps) {
  return <LinkContainer {...props}>{children}</LinkContainer>;
}
