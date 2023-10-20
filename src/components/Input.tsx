import { Fragment, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import theme from '../styles/theme';

interface IInputProps extends TextInputProps {}

const StyledInput = styled.TextInput.attrs(({ theme }) => {
  return {
    placeholderTextColor: theme.colors.neutral.gray[300]
  };
})`
  flex: 1;
  height: 52px;
  align-items: center;

  border-radius: 8px;
  padding: 0 16px;
  border-width: 1px;

  ${({ theme }) => theme.font.sizes.md};

  background-color: ${({ theme }) => theme.colors.neutral.gray[500]};
  color: ${({ theme }) => theme.colors.neutral.gray[100]};
`;

const COLORS = {
  focused: {
    borderColor: theme.colors.brand.purple
  },
  unfocused: {
    borderColor: theme.colors.neutral.gray[500]
  }
};

export function Input({ ...others }: IInputProps) {
  const [inputBorderColor, setInputBordercolor] = useState(
    COLORS.unfocused.borderColor
  );

  function handleFocus() {
    setInputBordercolor(COLORS.focused.borderColor);
  }

  return (
    <Fragment>
      <StyledInput
        {...others}
        onFocus={handleFocus}
        style={{
          borderColor: inputBorderColor
        }}
      />
    </Fragment>
  );
}
