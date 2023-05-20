import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background: ${(props) => props.theme['gray-700']};
  border: 2px solid transparent;
  border-radius: 0.625rem;

  width: 26rem;
  height: 16.25rem;

  overflow: hidden;
  transition: border-color 0.5s;

  &:hover {
    border-color: ${(props) => props.theme['gray-500']};
    cursor: pointer;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2rem;
    color: ${(props) => props.theme['gray-100']};
  }

  span {
    font-size: 0.875rem;
    line-height: 1.4rem;
    color: ${(props) => props.theme['gray-400']};
  }
`;

export const CardBody = styled.p`
  flex: 1;
  overflow: hidden;

  line-height: 1.6rem;
  color: ${(props) => props.theme['gray-300']};
`;
