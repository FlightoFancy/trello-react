import { useState } from "react";

import styled from "styled-components";
import { ICard } from "types";

interface AddCardProps {
    create: (card: ICard) => void;
}

export const AddCard: React.FC<AddCardProps> = ({ create }) => {

    const [isAddCardFormVisible, setIsAddCardFormVisible] = useState(false);
    const [newCardTitle, setNewCardTitle] = useState("");

    const openForm = () => {
        setIsAddCardFormVisible(true);
    };
    const closeForm = () => {
        setIsAddCardFormVisible(false);
    };
    const addCard = () => {
        if (newCardTitle) {
            const newCard = {
                id: Date.now(),
                title: newCardTitle,
            }
            create(newCard)
            setIsAddCardFormVisible(false);
        }
        setNewCardTitle("");
    }

    return <>
        {isAddCardFormVisible ? <ContainerDiv>
            <Textarea value={newCardTitle} placeholder="Введите заголовок карточки" autoFocus={true} rows={3} onChange={e => setNewCardTitle(e.target.value)}></Textarea>
            <Button onClick={addCard}>Добавить карточку</Button>
            <ButtonClose onClick={closeForm}>&#10006;</ButtonClose>
        </ContainerDiv> : <StyledButtonAddCard onClick={openForm}>+ Добавить карточку</StyledButtonAddCard>}
    </>
}

const ContainerDiv = styled.div`
width: 90%;
margin: 5px auto;
`
const Textarea = styled.textarea`
width: 100%;
resize: none;
`
const Button = styled.button`
width: 60%;
padding: 5px;
margin: 5px 0;
cursor: pointer;
background-color: rgba(45,23,28,0);
border-radius: 5px;
`
const StyledButtonAddCard = styled(Button)`
width: 90%;
margin: 10px auto;
`
const ButtonClose = styled.button`
padding: 0 5px;
margin: 5px;
background-color: rgba(28,28,28,0);
border: none;
cursor: pointer;
font-size: 19px;
`