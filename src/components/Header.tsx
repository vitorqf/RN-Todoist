import styled from "styled-components/native";
import { Text } from "react-native";

type Variants = 'blue' | 'purple'

interface IHeaderProps {
    remainingTasksAmount: number
    finishedTasksAmount: number
}

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px; 
    border-color: ${({ theme }) => theme.colors.neutral.gray[400]};
    padding-bottom: 24px;
`

const HeaderTextContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

const CountBadge = styled.View`
    ${({ theme }) => theme.font.sizes.sm};
    color: ${({ theme }) => theme.colors.neutral.gray[100]};
    background-color: ${({ theme }) => theme.colors.neutral.gray[400]};
    border-radius: 50px;
    padding: 0 8px;
    
    align-items: center;
    justify-content: center;
`;

const HeaderText = styled.Text<{variant: Variants}>`
    ${({ theme }) => theme.font.sizes.md};
    color: ${({ variant, theme }) => theme.colors.brand[variant]};
    font-weight: bold;

`;

export function Header({ remainingTasksAmount, finishedTasksAmount }: IHeaderProps) {
    return (
        <Container>
            <HeaderTextContainer>
                <HeaderText variant="blue">Criadas</HeaderText>
                <CountBadge>
                    <Text style={{ color: '#fff'}}>{remainingTasksAmount}</Text>
                </CountBadge>
            </HeaderTextContainer>

            <HeaderTextContainer>
                <HeaderText variant="purple">Concluídas</HeaderText>
                <CountBadge>
                    <Text style={{ color: '#fff'}}>{finishedTasksAmount}</Text>
                </CountBadge>
            </HeaderTextContainer>
        </Container>
    )
}