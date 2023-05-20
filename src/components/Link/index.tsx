import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

import { LinkContainer, ILinkContainerProps } from './styles';

interface ILinkProps extends LinkProps, ILinkContainerProps {
  children: ReactNode;
}

export function Link({ children, ...props }: ILinkProps) {
  return <LinkContainer {...props}>{children}</LinkContainer>;
}
