import { View, Text, TextInput } from "react-native";
import { Input } from "../components/Input";
import styled from "styled-components";
import Logo from "../assets/Logo.svg"

const Container = styled(View)`
    flex: 1;
`

const BlackBackground = styled(View)`
    flex: 2;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.neutral.gray[700]};
`

const GrayBackground = styled(View)`
    flex: 7;
    background-color: ${({ theme }) => theme.colors.neutral.gray[600]};
`

const Form = styled(View)`
   position: absolute;
   padding: 0 24px;
   width: 100%;
   top: -28px;
`

export default function Home() {
    return (
        <Container>
            <BlackBackground>
                <Logo />
            </BlackBackground>
            <GrayBackground>
                <Form>
                    <Input placeholder="Adicione uma tarefa" />
                </Form>
            </GrayBackground>
        </Container>
    )
}