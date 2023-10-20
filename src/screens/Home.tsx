import { Input } from "../components/Input";
import styled from "styled-components/native";
import Logo from "../assets/Logo.svg"
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Alert, FlatList, View } from "react-native";
import { Task } from "../components/Task";
import { useState } from "react";


interface Task {
    id: string
    title: string
    finished: boolean
}

const Container = styled.View`
    flex: 1;
`

const BlackBackground = styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.neutral.gray[700]};
`

const GrayBackground = styled.View`
    flex: 7;
    background-color: ${({ theme }) => theme.colors.neutral.gray[600]};
    padding: 0 24px;
    align-items: center;
`

const Form = styled.View`
   position: absolute;
   max-width: 100%;
   top: -28px;

   flex-direction: row;
   gap: 4px;
`

const List = styled.View`
    width: 100%;
    padding: 48px 0 16px;
`


const StyledFlatList = styled.FlatList`
    width: 100%;
    padding: 24px 0;
`

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [taskTitle, setTaskTitle] = useState('')

    const finishedTasksAmount = tasks.filter(task => task.finished).length
    const remainingTasksAmount = tasks.length - finishedTasksAmount


    function handleAddTask(taskTitle: string) {
        const newTask = {
            id: String(new Date().getTime()),
            title: taskTitle,
            finished: false
        }

        setTasks([newTask, ...tasks])
        setTaskTitle('')
    }

    function handleToggleTaskFinished(taskId: string) {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    finished: !task.finished
                }
            }

            return task
        })

        setTasks(updatedTasks)
    }

    function handleRemoveTask(taskId: string) {
        const updatedTasks = tasks.filter(task => task.id !== taskId)

        return Alert.alert(
            'Remover item',
            'Tem certeza que você deseja remover este item?',
            [
                {
                    text: 'Não',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => setTasks(updatedTasks)
                }
            ]
        )
    }

    return (
        <Container>
            <BlackBackground>
                <Logo />
            </BlackBackground>

            <GrayBackground>
                <Form>
                    <Input placeholder="Adicione uma nova tarefa" value={taskTitle} onChangeText={setTaskTitle} />
                    <Button onPress={() => handleAddTask(taskTitle)} />
                </Form>

                <List>
                    <Header remainingTasksAmount={remainingTasksAmount} finishedTasksAmount={finishedTasksAmount} />
                    <StyledFlatList 
                        data={tasks}
                        keyExtractor={(item: Task) => item.id}
                        renderItem={({ item }: {item: Task}) => <Task title={item.title} finished={item.finished} handleRemoveTask={() => handleRemoveTask(item.id)} handleToggleTaskFinished={() => handleToggleTaskFinished(item.id)} />}
                        ItemSeparatorComponent={() => <View style={{height: 8}} />}
                    />
                </List>
            </GrayBackground>
        </Container>
    )
}