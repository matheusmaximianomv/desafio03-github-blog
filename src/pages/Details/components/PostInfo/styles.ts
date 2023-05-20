import styled from 'styled-components';

export const PostInfoContainer = styled.article`
  width: 100%;
  padding: 2rem;
  margin-top: 2.875rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background: ${(props) => props.theme['gray-800']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const PostInfoActions = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostInfoData = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['gray-400']};
  }
`;

export const PostInfoTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.95rem;
  color: ${(props) => props.theme['gray-100']};
`;
