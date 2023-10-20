import styled from "styled-components/native";
import { Button } from "./Button";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import theme from "../styles/theme";

interface ITaskProps {
    title: string
    finished: boolean
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
`

const Title = styled.Text<{finished: boolean}>`
flex: 1;
    ${({ theme }) => theme.font.sizes.md};
    color: ${({ theme }) => theme.colors.neutral.gray[100]};
    text-decoration: ${({ finished }) => finished ? 'line-through' : 'none'};
`

export function Task({ title, finished }: ITaskProps) {
    return (
        <Container>
            <BouncyCheckbox 
                size={24}
                fillColor={theme.colors.brand.purple}
                innerIconStyle={{ borderWidth: 2 }}
            />
            <Title finished={finished}>{title}</Title>
            <Button variant="delete" />
        </Container>
    )
}