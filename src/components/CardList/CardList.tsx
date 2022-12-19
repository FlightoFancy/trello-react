import { ICard } from "types";
import { CardItem } from "components";

interface CardListProps {
  items: ICard[];
  openModalCard: (detail: ICard) => void;
}
export const CardList: React.FC<CardListProps> = ({ items, openModalCard }) => {
  return (
    <>
      {items.map((card) => (
        <CardItem key={card.id} openModalCard={openModalCard} {...card} />
      ))}
    </>
  );
};
