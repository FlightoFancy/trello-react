import { ICard } from "types";
import { AddCard, CardList } from "components";

interface Props {
  items: ICard[];
  openModalCard: (id: number) => void;
  createCard: (card: ICard) => void;
}

export const Column: React.FC<Props> = ({
  openModalCard,
  createCard,
  items,
}) => {
  return (
    <>
      <CardList items={items} openModalCard={openModalCard} />
      <AddCard createCard={createCard} />
    </>
  );
};
