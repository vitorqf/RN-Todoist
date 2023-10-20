import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styled from 'styled-components/native';
import theme from '../styles/theme';
import { Button } from './Button';

interface ITaskProps {
  title: string;
  finished: boolean;
  handleToggleTaskFinished?: () => void;
  handleRemoveTask?: () => void;
}

const Container = styled.View`
  padding: 12px;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  border-radius: 8px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.neutral.gray[400]};

  background-color: ${({ theme }) => theme.colors.neutral.gray[500]};
`;

const Title = styled.Text<{ finished: boolean }>`
  flex: 1;

  ${({ theme }) => theme.font.sizes.md};

  ${({ theme, finished }) => {
    if (finished) {
      return `
        text-decoration: line-through;
        color: ${theme.colors.neutral.gray[300]};
      `;
    }

    return `
      text-decoration: none;
      color: ${theme.colors.neutral.gray[100]};
    `;
  }};
`;

export function Task({
  title,
  finished,
  handleToggleTaskFinished,
  handleRemoveTask
}: ITaskProps) {
  return (
    <Container>
      <BouncyCheckbox
        size={24}
        fillColor={
          finished ? theme.colors.brand.purple : theme.colors.brand.blue_dark
        }
        innerIconStyle={{ borderWidth: 2 }}
        isChecked={finished}
        onPress={handleToggleTaskFinished}
      />
      <Title finished={finished}>{title}</Title>
      <Button variant="delete" onPress={handleRemoveTask} />
    </Container>
  );
}
