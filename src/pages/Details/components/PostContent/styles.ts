import styled from 'styled-components';

export const PostContentContainer = styled.article`
  width: 100%;
  padding: 2.5rem 2rem;

  & > * {
    margin-bottom: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
    color: ${(props) => props.theme['blue-500']};
  }

  ul,
  ol {
    padding-left: 1.75rem;
  }
`;
