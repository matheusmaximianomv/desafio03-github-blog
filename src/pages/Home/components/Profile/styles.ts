import styled from 'styled-components';

export const ProfileContainer = styled.article`
  width: 100%;
  padding: 2rem 2.5rem;
  margin-top: 2.875rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  background: ${(props) => props.theme['gray-800']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;
  object-fit: cover;
`;

export const ProfileApresentation = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const ProfileDescription = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const ProfileHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.95rem;
    color: ${(props) => props.theme['gray-100']};
  }
`;

export const ProfileBio = styled.p`
  line-height: 1.6rem;
  color: ${(props) => props.theme['gray-300']};
`;
