import { useState } from "react";
import styled from "styled-components";
import { ICard } from "../types/data";


const ContainerDiv = styled.div`
width: 90%;
margin: 5px auto;
`
const StyledTextarea = styled.textarea`
width: 100%;
resize: none;
`
const StyledButton = styled.button`
width: 60%;
padding: 5px;
margin: 5px 0;
cursor: pointer;
background-color: rgba(45,23,28,0);
border-radius: 5px;
`
const ButtonAddCard = styled(StyledButton)`
width: 90%;
margin: 10px auto;
`

const ButtonClose = styled.button`
padding: 0 5px;
margin: 5px;
background-color: rgba(28,28,28,0);
border: none;
cursor: pointer;
font-size: 19px
`
interface AddCardProps {
    create: (card: ICard) => void
}

const AddCard: React.FC<AddCardProps> = ({ create }) => {
    const [modal, setModal] = useState(false);
    const [value, setValue] = useState("")


    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };

    const addCard = () => {
        if (value) {
            const newCard = {
                id: Date.now(),
                title: value,
            }
            create(newCard)
            setModal(false);
        }
        setValue("");
    }

    return <>
        {!modal && <ButtonAddCard onClick={openModal}>+ Добавить карточку</ButtonAddCard>}
        {modal && <ContainerDiv>
            <StyledTextarea value={value} placeholder="Введите заголовок карточки" autoFocus={true} rows={3} onChange={e => setValue(e.target.value)}></StyledTextarea>
            <StyledButton onClick={addCard}>Добавить карточку</StyledButton>
            <ButtonClose onClick={closeModal}>&#10006;</ButtonClose>
        </ContainerDiv>}
    </>
}

export { AddCard }