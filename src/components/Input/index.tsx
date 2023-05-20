import { Ref, forwardRef } from 'react';

import { IInputProps, InputContainer } from './styles';

const InputComponent = forwardRef(
  (props: IInputProps, ref: Ref<HTMLInputElement> | null) => {
    return <InputContainer {...props} ref={ref} />;
  }
);

export const Input = InputComponent;
