import styled from "styled-components"
import { ICard } from "../types/data"

const DivCardItem = styled.div`
border: 1px solid lightgrey;
background-color: #fff;
padding: 5px;
margin: 10px;
border-radius: 5px;
cursor: pointer;
&:hover{
    background-color: lightgrey;
}
`;

interface CardItemProps extends ICard {
    openModalCard: (detail:ICard) => void;
}

const CardItem: React.FC<CardItemProps> = ({ id, title, description,openModalCard }) => {
    return <>
        <DivCardItem onClick={() => openModalCard({id,title,description})}>{title}</DivCardItem>
    </>
}

export { CardItem }



