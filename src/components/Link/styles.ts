import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

export interface ILinkContainerProps {
  icondirection: 'left' | 'right';
}

export const LinkContainer = styled(Link)<LinkProps & ILinkContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) =>
    props.icondirection === 'left' ? 'row' : 'row-reverse'};
  width: min-content;

  gap: 0.5rem;

  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.2rem;
  color: ${(props) => props.theme['blue-500']};
  border-bottom: 1px solid transparent;

  text-decoration: none;

  &:hover {
    border-bottom-color: ${(props) => props.theme['blue-500']};
  }
`;
