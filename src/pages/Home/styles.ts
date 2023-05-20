import styled from 'styled-components';

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding-bottom: 2rem;
`;

export const HomeListPublications = styled.article`
  margin-top: 3rem;

  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  justify-items: center;
`;
