import { InputHTMLAttributes, Ref } from 'react';
import styled from 'styled-components';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref: Ref<HTMLInputElement> | null;
}

export const InputContainer = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem 1rem;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-300']};
  line-height: 1.625rem;

  background: ${(props) => props.theme['gray-900']};
  border: 1px solid ${(props) => props.theme['gray-600']};
  border-radius: 6px;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`;
