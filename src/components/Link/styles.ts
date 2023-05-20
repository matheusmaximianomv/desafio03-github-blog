import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min-content;

  gap: 0.5rem;

  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.2rem;
  color: ${(props) => props.theme['blue-500']};
  border-bottom: 1px solid transparent;

  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    border-bottom-color: ${(props) => props.theme['blue-500']};
  }
`;
