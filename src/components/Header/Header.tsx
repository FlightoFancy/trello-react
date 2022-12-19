import styled from "styled-components";

interface Props {
    userName: string;
}

export const Header: React.FC<Props> = ({ userName }) => {
    return <Root>{`Имя пользователя: ${userName}`}</Root>
}

const Root = styled.header`
margin: 0 0 1em 0;
`