import { useState } from "react";
import { ICard } from "types";
import { AddCard, AddDescriptionCard, CardList, CardModal } from "components";

export const Column: React.FC = () => {

    const [cards, setCards] = useState<ICard[]>([]);
    const [isModalActive, setIsModalActive] = useState(false);
    const [isActiveDesc, setIsActiveDesc] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
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
            setIsEdit(true)
        }
    }

    return <>
        <CardModal removeCard={removeCard} active={isModalActive} setActive={setIsModalActive} cardDetail={cardDetail}>
            <AddDescriptionCard cardDetail={cardDetail} edit={isEdit} setEdit={setIsEdit} addDesc={addDesc} activeDesc={isActiveDesc} setActiveDesc={setIsActiveDesc} />
        </CardModal>
        <CardList items={cards} openModalCard={openModalCard} />
        <AddCard create={createCard} />
    </>
}
