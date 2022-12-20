import { ICard } from "types";
import { CardItem } from "components";

interface Props {
  items: ICard[];
  openModalCard: (id: number) => void;
}
export const CardList: React.FC<Props> = ({ items, openModalCard }) => {
  return (
    <>
      {items.map((card) => (
        <CardItem key={card.id} openModalCard={openModalCard} {...card} />
      ))}
    </>
  );
};
