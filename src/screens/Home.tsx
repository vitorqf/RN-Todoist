import { Text, TextProps, View } from "react-native";
import { Input } from "../components/Input";
import styled from "styled-components";
import Logo from "../assets/Logo.svg"
import { Button } from "../components/Button";

type Variants = 'blue' | 'purple'


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
    padding: 0 24px;
    align-items: center;
`

const Form = styled(View)`
   position: absolute;
   max-width: 100%;
   top: -28px;

   flex-direction: row;
   gap: 4px;
`

const List = styled(View)`
    width: 100%;
    padding: 48px 0 16px;
    border-bottom-width: 1px; 
    border-color: ${({ theme }) => theme.colors.neutral.gray[400]};
`

const Header = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const HeaderTextContainer = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

const CountBadge = styled(View)`
    ${({ theme }) => theme.font.sizes.sm};
    color: ${({ theme }) => theme.colors.neutral.gray[100]};
    background-color: ${({ theme }) => theme.colors.neutral.gray[400]};
    border-radius: 50px;
    padding: 0 8px;
    
    align-items: center;
    justify-content: center;
`;

const HeaderText = styled(Text)<{ variant: Variants }>`
    ${({ theme }) => theme.font.sizes.md};
    color: ${({ variant, theme }) => theme.colors.brand[variant]};
    font-weight: bold;

`;
export default function Home() {
    return (
        <Container>
            <BlackBackground>
                <Logo />
            </BlackBackground>
            <GrayBackground>
                <Form>
                    <Input placeholder="Adicione uma nova tarefa" />
                    <Button />
                </Form>

                <List>
                    <Header>
                        <HeaderTextContainer>
                            <HeaderText variant="blue">Criadas</HeaderText>
                            <CountBadge>
                                <Text style={{ color: '#fff'}}>0</Text>
                            </CountBadge>
                        </HeaderTextContainer>

                        <HeaderTextContainer>
                            <HeaderText variant="purple">Concluídas</HeaderText>
                            <CountBadge>
                                <Text style={{ color: '#fff'}}>0</Text>
                            </CountBadge>
                        </HeaderTextContainer>
                    </Header>
                </List>
            </GrayBackground>
        </Container>
    )
}