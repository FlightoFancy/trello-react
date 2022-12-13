import { useState } from "react";
import styled from "styled-components";
import { ICard } from "../types/data";
import { getLocalStorageArrCards, getLocalStorageName } from "../utilities/localStorageUtility";
import { AddCard } from "./AddCard";
import { CardList } from "./CardList";
import { UserModal } from "./UserModal";
import { Title } from "./titleColumn/Title";
import { CardModal } from "./CardModal";
import { Column } from "./column/Column";


const BoardContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: flex-start
`;
const BoardItem = styled.div`
width:24%;
border: 1px solid black;
border-radius: 5px;
display: flex;
flex-direction: column;
background-color: #90A4AE;
`;

const Board: React.FC = () => {

    const value = localStorage.getItem("col1");
    const value2 = localStorage.getItem("col2");
    const value3 = localStorage.getItem("col3");
    const value4 = localStorage.getItem("col4");

    return (
        <BoardContainer>
            {!getLocalStorageName("user") ? <UserModal /> : null}
            <BoardItem>
                <Title titleValue={value || "Todo"} name="one" />
                <Column localStorageValue="cards1" />
            </BoardItem>
            <BoardItem><Title titleValue={value2 || "In progress"} name="two" />
                <Column localStorageValue="cards2" />
            </BoardItem>
            <BoardItem><Title titleValue={value3 || "Testing"} name="three" />
                <Column localStorageValue="cards3" />
            </BoardItem>
            <BoardItem><Title titleValue={value4 || "Done"} name="four" />
                <Column localStorageValue="cards4" /></BoardItem>
        </BoardContainer>
    )
}


export default Board;