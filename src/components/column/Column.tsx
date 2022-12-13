import { useState } from "react";
import { ICard } from "../../types/data"
import { getLocalStorageArrCards } from "../../utilities/localStorageUtility";
import { AddCard } from "../AddCard"
import { AddDescriptionCard } from "../AddDescriptionCard";
import { CardList } from "../CardList"
import { CardModal } from "../CardModal";

interface ColumnProps {
    localStorageValue: string
}

const Column: React.FC<ColumnProps> = ({ localStorageValue }) => {

    const [cards, setCards] = useState<ICard[]>(getLocalStorageArrCards(localStorageValue));

    const [modalActive, setModalActive] = useState(false);

    const [activeDesc, setActiveDesc] = useState(true)

    const [edit,setEdit] = useState(false)

    const [cardDetail, setCardDetail] = useState<ICard>();

    const openModalCard = (detail: ICard) => {
        setCardDetail(detail)
        setModalActive(true)
    }
    const createCard = (newCard: ICard) => {
        setCards([...cards, newCard])
        localStorage.setItem(localStorageValue, JSON.stringify([...cards, newCard]));
    }
    const removeCard = (id: number | undefined) => {
        setCards(cards.filter(card => card.id !== id))
        localStorage.setItem(localStorageValue, JSON.stringify(cards.filter(card => card.id !== id)))
        setModalActive(false)
    }

    const addDesc = (description: string) => {
        if (description !== '') {
            setCards(cards.map(card => {
                if (card.id !== cardDetail?.id) return card
                return {
                    ...card,
                    description: description
                }
            }))
            localStorage.setItem(localStorageValue, JSON.stringify(cards.map(card => {
                if (card.id !== cardDetail?.id) return card
                return {
                    ...card,
                    description: description
                }
            })))
            setActiveDesc(false)
            setEdit(true)
        }
    }

    return <>
        <CardModal removeCard={removeCard} active={modalActive} setActive={setModalActive} cardDetail={cardDetail}>
            <AddDescriptionCard cardDetail={cardDetail} edit={edit} setEdit={setEdit} addDesc={addDesc} activeDesc={activeDesc} setActiveDesc={setActiveDesc} />
        </CardModal>
        <CardList items={cards} openModalCard={openModalCard} />
        <AddCard create={createCard} />
    </>
}

export { Column }