import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import styled from 'styled-components/native';
import ArrowBack from '../assets/arrow-back.svg';
import TodoDetails from '../assets/tododetails.svg';
import { BlackBackground } from '../components/BlackBackground';
import { ITask } from '../hooks/useTask';

interface RouteParams {
  task: ITask;
}

const Container = styled.View`
  flex: 1;
`;

const GrayBackground = styled.View`
  flex: 7;
  background-color: ${({ theme }) => theme.colors.neutral.gray[600]};
  padding: 0 24px;
  padding-top: 24px;
  gap: 24px;
`;

const TaskTitle = styled.Text`
  ${({ theme }) => theme.font.sizes.lg};
  color: ${({ theme }) => theme.colors.neutral.gray[100]};
  font-weight: bold;
`;

const CreatedAt = styled.Text`
  ${({ theme }) => theme.font.sizes.md};
  color: ${({ theme }) => theme.colors.neutral.gray[300]};
`;

const GoodJob = styled.Text`
  ${({ theme }) => theme.font.sizes.lg};
  color: ${({ theme }) => theme.colors.neutral.gray[200]};
  text-align: center;
`;

const Return = styled.TouchableOpacity`
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

const ReturnText = styled.Text`
  ${({ theme }) => theme.font.sizes.md};
  color: ${({ theme }) => theme.colors.brand.purple};
  font-weight: 600;
  text-align: center;
  margin-left: 8px;
`;

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  const { task } = route.params as RouteParams;

  return (
    <Container>
      <BlackBackground />

      <GrayBackground>
        <Return onPress={() => navigation.goBack()}>
          <ArrowBack />
          <ReturnText>Voltar para a lista de tarefas</ReturnText>
        </Return>
        <View>
          <TaskTitle>{task.title}</TaskTitle>
          <CreatedAt>Criada em {task.created_at}</CreatedAt>
        </View>
        <TodoDetails />
        <GoodJob>
          {task.finished
            ? '🎉\nParabéns! Você concluiu essa tarefa!'
            : '🌟\nContinue se esforçando para concluir essa tarefa!'}
        </GoodJob>
      </GrayBackground>
    </Container>
  );
}
