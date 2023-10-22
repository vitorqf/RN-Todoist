import { useMemo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { BlackBackground } from '../components/BlackBackground';
import { Button } from '../components/Button';
import { EmptyList } from '../components/EmptyList';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Task } from '../components/Task';
import useTask, { ITask } from '../hooks/useTask';

const Container = styled.View`
  flex: 1;
`;

const GrayBackground = styled.View`
  flex: 7;
  background-color: ${({ theme }) => theme.colors.neutral.gray[600]};
  padding: 0 24px;
  align-items: center;
`;

const Form = styled.View`
  position: absolute;
  max-width: 100%;
  top: -28px;

  flex-direction: row;
  gap: 4px;
`;

const List = styled.View`
  width: 100%;
  padding: 48px 0 16px;
`;

const StyledFlatList = styled.FlatList`
  width: 100%;
  padding: 24px 0;
`;

export default function Home() {
  const {
    tasks,
    taskTitle,
    setTaskTitle,
    handleAddTask,
    handleToggleTaskFinished,
    handleRemoveTask
  } = useTask();

  const finishedTasksAmount = useMemo(
    () => tasks.filter((task) => task.finished).length,
    [tasks]
  );
  const remainingTasksAmount = useMemo(
    () => tasks.length - finishedTasksAmount,
    [tasks]
  );

  return (
    <Container>
      <BlackBackground />

      <GrayBackground>
        <Form>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={taskTitle}
            onChangeText={setTaskTitle}
          />
          <Button onPress={() => handleAddTask(taskTitle)} />
        </Form>

        <List>
          <Header
            remainingTasksAmount={remainingTasksAmount}
            finishedTasksAmount={finishedTasksAmount}
          />
          <StyledFlatList
            data={tasks}
            keyExtractor={(item: ITask) => item.id}
            renderItem={({ item }: { item: ITask }) => (
              <Task
                id={item.id}
                title={item.title}
                finished={item.finished}
                created_at={item.created_at}
                handleRemoveTask={() => handleRemoveTask(item.id)}
                handleToggleTaskFinished={() =>
                  handleToggleTaskFinished(item.id)
                }
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            ListEmptyComponent={EmptyList}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        </List>
      </GrayBackground>
    </Container>
  );
}
