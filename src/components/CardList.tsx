import { ICard } from "../types/data"
import { CardItem } from "./CardItem"

interface CardListProps {
    items: ICard[],
    openModalCard: (detail:ICard)=>void
}
const CardList: React.FC<CardListProps> = ({items,openModalCard}) => {
    return <>
        {items.map(card => <CardItem key={card.id} openModalCard={openModalCard} {...card} />)}
    </>
}

export { CardList }