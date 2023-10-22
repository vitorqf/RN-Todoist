import { View } from 'react-native';
import styled from 'styled-components/native';
import Clipboard from '../assets/Clipboard.svg';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 48px;
`;

export const Title = styled.Text`
  ${({ theme }) => theme.font.sizes.md};
  color: ${({ theme }) => theme.colors.neutral.gray[300]};
  font-weight: bold;
  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => theme.font.sizes.md};
  color: ${({ theme }) => theme.colors.neutral.gray[300]};
  text-align: center;
`;

export function EmptyList() {
  return (
    <Container>
      <Clipboard width={100} height={100} />
      <View>
        <Title>Você ainda não tem tarefas cadastradas</Title>
        <Subtitle>Crie tarefas e organize seus itens a fazer</Subtitle>
      </View>
    </Container>
  );
}
