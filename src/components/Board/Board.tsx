import styled from "styled-components";
import { Column, Title, UserModal } from "components";

export const Board: React.FC = () => {
    return (
        <BoardContainer>
            <UserModal />
            <BoardItem>
                <Title titleValue="Todo" name="one" />
                <Column localStorageValue="cards1" />
            </BoardItem>
            <BoardItem><Title titleValue="In progress" name="two" />
                <Column localStorageValue="cards2" />
            </BoardItem>
            <BoardItem><Title titleValue="Testing" name="three" />
                <Column localStorageValue="cards3" />
            </BoardItem>
            <BoardItem><Title titleValue="Done" name="four" />
                <Column localStorageValue="cards4" /></BoardItem>
        </BoardContainer>
    )
}

const BoardContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: flex-start;
`;
const BoardItem = styled.div`
width:24%;
border: 1px solid black;
border-radius: 5px;
display: flex;
flex-direction: column;
background-color: #90A4AE;
`;