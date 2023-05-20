import styled from 'styled-components';

export const ListGithubContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`;

export const ListGithubItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['gray-500']};
    font-size: 1.125rem;
    height: 1.125rem;
    width: 1.125rem;
  }

  span {
    line-height: 1.6rem;
    color: ${(props) => props.theme['gray-200']};
  }
`;
