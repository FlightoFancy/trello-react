import { useState } from "react";
import { ICard } from "types";
import { getLocalStorageArrCards } from "../../utilities/localStorageUtility";
import { AddCard, AddDescriptionCard, CardList, CardModal } from "components";

interface ColumnProps {
    localStorageValue: string;
}

export const Column: React.FC<ColumnProps> = ({ localStorageValue }) => {

    const [cards, setCards] = useState<ICard[]>(getLocalStorageArrCards(localStorageValue));

    const [isModalActive, setIsModalActive] = useState(false);

    const [isActiveDesc, setIsActiveDesc] = useState(true);

    const [edit, setEdit] = useState(false);

    const [cardDetail, setCardDetail] = useState<ICard>();

    const openModalCard = (detail: ICard) => {
        setCardDetail(detail)
        setIsModalActive(true)
    }
    const createCard = (newCard: ICard) => {
        setCards([...cards, newCard])
    }
    const removeCard = (id: number | undefined) => {
        setCards(cards.filter(card => card.id !== id))
        setIsModalActive(false)
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
            setIsActiveDesc(false)
            setEdit(true)
        }
    }

    return <>
        <CardModal removeCard={removeCard} active={isModalActive} setActive={setIsModalActive} cardDetail={cardDetail}>
            <AddDescriptionCard cardDetail={cardDetail} edit={edit} setEdit={setEdit} addDesc={addDesc} activeDesc={isActiveDesc} setActiveDesc={setIsActiveDesc} />
        </CardModal>
        <CardList items={cards} openModalCard={openModalCard} />
        <AddCard create={createCard} />
    </>
}
