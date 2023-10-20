import { TouchableOpacity } from "react-native"
import styled from "styled-components"
import Plus from "../assets/plus.svg"
import Trash from "../assets/trash.svg"

type Variant = 'create' | 'delete'

interface IButtonProps { 
    variant?: Variant
    icon?: React.ReactNode
}


const DefaultButton = styled(TouchableOpacity)`
    height: 52px;
    width: 52px;

    align-items: center;
    justify-content: center;

    border-radius: 8px;
`;

const CreateButton = styled(DefaultButton)`
    background-color: ${({ theme }) => theme.colors.brand.blue};
`;

const DeleteButton = styled(DefaultButton)`
    background-color: transparent;
`;

const BUTTONS = {
    create: CreateButton,
    delete: DeleteButton
};

const ICONS = {
    create: <Plus />,
    delete: <Trash />
}

export function Button({ variant = "create" }: IButtonProps) {
    const icon = ICONS[variant]
    const Button = BUTTONS[variant]

    return (
        <Button>{icon}</Button>
    )
}