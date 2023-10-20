import { Input } from "../components/Input";
import styled from "styled-components/native";
import Logo from "../assets/Logo.svg"
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { FlatList, View } from "react-native";
import { Task } from "../components/Task";


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
    border-bottom-width: 1px; 
    border-color: ${({ theme }) => theme.colors.neutral.gray[400]};
`



const StyledFlatList = styled.FlatList`
    width: 100%;
    padding: 24px 0;
`

const Tasks = [
    {
        title: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
        finished: false
    },
    {
        title: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
        finished: true
    }
]

export default function Home() {
    const finishedTasksAmount = Tasks.filter(task => task.finished).length
    const remainingTasksAmount = Tasks.length - finishedTasksAmount

    return (
        <Container>
            <BlackBackground>
                <Logo />
            </BlackBackground>

            <GrayBackground>
                <Form>
                    <Input placeholder="Adicione uma nova tarefa" />
                    <Button  />
                </Form>

                <List>
                    <Header remainingTasksAmount={remainingTasksAmount} finishedTasksAmount={finishedTasksAmount} />
                    <StyledFlatList 
                        data={Tasks}
                        keyExtractor={(item, index) => String(index)}
                        renderItem={({ item }) => <Task title={item.title} finished={item.finished} />}
                        ItemSeparatorComponent={() => <View style={{height: 8}} />}
                    />
                </List>
            </GrayBackground>
        </Container>
    )
}