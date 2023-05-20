import styled from 'styled-components';

export const SearchFormContainer = styled.article`
  width: 100%;
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  input {
    width: 100%;
  }
`;

export const SearchFormInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.8rem;
    color: ${(props) => props.theme['gray-200']};
  }

  span {
    font-size: 0.875rem;
    line-height: 1.4rem;
    color: ${(props) => props.theme['gray-400']};
  }
`;
