import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styled from 'styled-components/native';
import { ITask } from '../hooks/useTask';
import { RootStackParamList } from '../screens/RootStackPrams';
import theme from '../styles/theme';
import { Button } from './Button';

type detailsScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

interface ITaskProps extends ITask {
  handleToggleTaskFinished?: () => void;
  handleRemoveTask?: () => void;
}

const Container = styled.TouchableOpacity`
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
  id,
  title,
  finished,
  created_at,
  handleToggleTaskFinished,
  handleRemoveTask
}: ITaskProps) {
  const navigation = useNavigation<detailsScreenProp>();

  return (
    <Container
      onPress={() =>
        navigation.navigate('Details', {
          task: {
            id,
            title,
            finished,
            created_at
          }
        })
      }
    >
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
