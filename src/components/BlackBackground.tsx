import styled from 'styled-components/native';
import Logo from '../assets/Logo.svg';

const Container = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral.gray[700]};
`;
export function BlackBackground() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}
